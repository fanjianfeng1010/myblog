"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const model_util_1 = require("../../utils/model.util");
const article_model_1 = require("../../models/article.model");
const category_model_1 = require("../../models/category.model");
const MarkdownIt = require("markdown-it");
const hljs = require("highlight.js");
const mila = require("markdown-it-link-attributes");
const markdown = new MarkdownIt({
    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            return `<pre><code class="hljs"> ${hljs.highlight(lang, str, true).value}</code></pre>`;
        }
        return `<pre><code class="hljs">${markdown.utils.escapeHtml(str)}</code></pre>`;
    },
});
exports.markdown = markdown;
markdown.use(mila, {
    attrs: {
        target: '_blank',
        rel: 'noopener',
    },
});
let ArticleService = class ArticleService {
    constructor(articleModel, categoryModel) {
        this.articleModel = articleModel;
        this.categoryModel = categoryModel;
    }
    async create(articleDocument) {
        const article = await this.articleModel.create(articleDocument);
        if (article.category) {
            await this.categoryModel.updateOne({ _id: article.category }, { $inc: { articleCount: 1 } });
        }
        return article;
    }
    async update(_id, data) {
        const article = await this.articleModel.findOneAndUpdate({ _id }, data);
        if (!article) {
            throw new common_1.NotFoundException('文章不存在');
        }
        if (article.category && article.category.toString() !== data.category) {
            await Promise.all([
                this.categoryModel.updateOne({ _id: article.category }, { $inc: { articleCount: -1 } }),
                this.categoryModel.updateOne({ _id: data.category }, { $inc: { articleCount: 1 } }),
            ]);
        }
        return article;
    }
    async getArticles(query, option) {
        const { skip = 1, limit = 10, sort = { createAt: -1 } } = option;
        let filter = {};
        if (query.tag) {
            filter = Object.assign(Object.assign({}, filter), { tags: { $elemMatch: { $eq: query.tag } } });
        }
        else {
            filter = Object.assign(Object.assign({}, filter), query);
        }
        return await this.articleModel
            .find(filter, '-content', {
            skip: (skip - 1) * limit,
            limit,
            sort,
        })
            .populate('category');
    }
    async getCurrentArticles() {
        const skip = 0, limit = 3, sort = { createAt: -1 };
        return await this.articleModel
            .find({}, '-content', {
            skip,
            limit,
            sort,
        })
            .populate('category');
    }
    async getArtile(id, isRenderHtml) {
        let article = null;
        try {
            article = await this.articleModel
                .findByIdAndUpdate(id, {
                $inc: { viewsCount: 1 },
            })
                .populate('category');
        }
        catch (_a) {
            return null;
        }
        if (article) {
            const data = article.toObject();
            if (isRenderHtml) {
                data.content = markdown.render(data.content);
            }
            const [prev, next] = await Promise.all([
                this.articleModel.findOne({ _id: { $gt: id } }, 'title', {
                    sort: { _id: 1 },
                }),
                this.articleModel.findOne({ _id: { $lt: id } }, 'title', {
                    sort: { _id: -1 },
                }),
            ]);
            data.prev = prev;
            data.next = next;
            return data;
        }
        return article;
    }
    async deleteArticle(id) {
        const article = await this.articleModel.findById(id);
        let result = await this.articleModel.deleteOne({ _id: id });
        if (article.category) {
            await this.categoryModel.updateOne({ _id: article.category }, { $inc: { articleCount: -1 } });
        }
        return result;
    }
    async countArticles(query) {
        const filter = Object.assign({}, query);
        return await this.articleModel.countDocuments(filter);
    }
    async batchDelete(articleIds) {
        return this.articleModel
            .find({ _id: { $in: articleIds } })
            .then(async (articles) => {
            articles.map(async (article) => {
                return await this.categoryModel.updateOne({ _id: article.category }, { $inc: { articleCount: -1 } });
            });
            return this.articleModel.deleteMany({ _id: { $in: articleIds } });
        });
    }
};
ArticleService = __decorate([
    common_1.Injectable(),
    __param(0, model_util_1.InjectModel(article_model_1.ArticleModel)),
    __param(1, model_util_1.InjectModel(category_model_1.CategoryModel)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map