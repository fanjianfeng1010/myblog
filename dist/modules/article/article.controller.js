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
const common_1 = require("@nestjs/common");
const article_service_1 = require("./article.service");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const roels_guard_1 = require("../../guards/roels.guard");
const Joi = require("@hapi/joi");
let ArticlesController = class ArticlesController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async create(article) {
        await this.articleService.create(article);
    }
    async update(param, article) {
        console.log('穿进来的参数是' + param, '传进来的主体是' + article);
        return await this.articleService.update(param.id, article);
    }
    async getArticle(query) {
        let res = await this.articleService.getArticle(query.id);
        let code = 0, msg = 'ok', data = res;
        return { code, msg, data };
    }
    async getArticles(query) {
        const q = {};
        if (query.cid) {
            q.category = query.cid;
        }
        const items = await this.articleService.getArticles(q, {
            page: Number(query.page),
            limit: Number(query.limit),
        });
        const totalCount = await this.articleService.count(q);
        return {
            code: 0,
            msg: 'ok',
            data: items,
        };
    }
};
ArticlesController.cIdSchema = {
    cid: Joi.string()
        .default('')
        .max(50),
};
ArticlesController.idSchema = {
    id: Joi.string()
        .default('')
        .max(50),
};
ArticlesController.deleteArticleSchema = {
    articleIds: Joi.array().items(Joi.string()),
};
__decorate([
    common_1.Post('/articles'),
    roles_decorator_1.Roles('admin'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "create", null);
__decorate([
    common_1.Put('/articles/:id'),
    roles_decorator_1.Roles('admin'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "update", null);
__decorate([
    common_1.Get('/article'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "getArticle", null);
__decorate([
    common_1.Get('/articles'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "getArticles", null);
ArticlesController = __decorate([
    common_1.Controller('/api'),
    common_1.UseGuards(roels_guard_1.RolesGuard),
    __metadata("design:paramtypes", [article_service_1.ArticlesService])
], ArticlesController);
exports.ArticlesController = ArticlesController;
//# sourceMappingURL=article.controller.js.map