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
const article_model_1 = require("../../models/article.model");
const model_util_1 = require("../../utils/model.util");
const category_model_1 = require("../../models/category.model");
let ArticlesService = class ArticlesService {
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
            throw new common_1.BadRequestException();
        }
        if (article.category && article.category.toString() !== data.category) {
            console.log(data);
            await Promise.all([
                this.categoryModel.updateOne({ _id: article.category }, { $inc: { articleCount: -1 } }),
                this.categoryModel.updateOne({ _id: data.category }, { $inc: { articleCount: 1 } }),
            ]);
        }
    }
    async getArticle(id) {
        const article = await this.articleModel
            .findOneAndUpdate(id, {
            $inc: { viewCount: 1 },
        })
            .populate('category');
        return article;
    }
    async deleteArticle(id) {
        const article = await this.articleModel.findById(id);
        await this.articleModel.deleteOne({ _id: id });
        if (article.category) {
            await this.categoryModel.updateOne({ _id: article.category }, { $inc: { articleCount: -1 } });
        }
        return '删除成功';
    }
    async getArticles(query, option) {
        const { page = 1, limit = 10, sort = { createAt: -1 } } = option;
        let filter = {};
        if (query.category) {
            filter = Object.assign(Object.assign({}, filter), { category: { $elemMatch: { $eq: query.category } } });
        }
        else {
            filter = Object.assign(Object.assign({}, filter), query);
        }
        return await this.articleModel
            .find(filter, '-content', {
            page: (page - 1) * limit,
            limit,
            sort,
        })
            .populate('category');
    }
    async count(query) {
        return await this.articleModel.countDocuments(query);
    }
};
ArticlesService = __decorate([
    common_1.Injectable(),
    __param(0, model_util_1.InjectModel(article_model_1.ArticleModel)),
    __param(1, model_util_1.InjectModel(category_model_1.CategoryModel)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=article.service.js.map