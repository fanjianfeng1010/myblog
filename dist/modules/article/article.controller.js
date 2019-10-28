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
var ArticleController_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const standard_pagination_validation_1 = require("../../validations/standard.pagination.validation");
const article_service_1 = require("./article.service");
const joi_validation_pipe_1 = require("../../pipes/joi.validation.pipe");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const roles_guard_1 = require("../../guards/roles.guard");
const Joi = require("@hapi/joi");
let ArticleController = ArticleController_1 = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async create(article) {
        const result = await this.articleService.create(article);
        return formatResponse(result);
    }
    async update(params, article) {
        let resonseData = {};
        const data = await this.articleService.update(params.id, article);
        return formatResponse(data);
    }
    async getArticles(query) {
        const q = {};
        if (query.cid) {
            q.category = query.cid;
        }
        else if (query.tag) {
            q.tag = query.tag;
        }
        const items = await this.articleService.getArticles(q, {
            skip: Number(query.page),
            limit: Number(query.limit),
        });
        const totalCount = await this.articleService.countArticles(q);
        let data = { items, totalCount };
        return formatResponse(data);
    }
    async getCurrent() {
        const items = await this.articleService.getCurrentArticles();
        let data = { items };
        return formatResponse(data);
    }
    async getArticle(params, query) {
        let data = await this.articleService.getArtile(params.id, query.md);
        let responseData = {
            data,
            type: 'article',
        };
        return responseData;
    }
    async deleteArticle(params) {
        let data = await this.articleService.deleteArticle(params.id);
        return formatResponse(data);
    }
    async deleteArticles(body) {
        let result = await this.articleService.batchDelete(body.articleIds);
        let responseData = {
            data: null,
        };
        if (result.deletedCount > 0) {
            responseData = {
                data: result,
            };
        }
        return responseData;
    }
};
ArticleController.cIdSchema = {
    cid: Joi.string()
        .default('')
        .max(50),
};
ArticleController.idSchema = {
    id: Joi.string()
        .default('')
        .max(50),
};
ArticleController.deleteArticlesSchema = {
    articleIds: Joi.array().items(Joi.string()),
};
__decorate([
    common_1.Post('/articles'),
    roles_decorator_1.Roles('admin'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "create", null);
__decorate([
    common_1.Put('/articles/:id'),
    roles_decorator_1.Roles('admin'),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "update", null);
__decorate([
    common_1.Get('/articles'),
    joi_validation_pipe_1.JoiValidationPipe(standard_pagination_validation_1.StandardPaginationSchema),
    joi_validation_pipe_1.JoiValidationPipe(ArticleController_1.cIdSchema),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticles", null);
__decorate([
    common_1.Get('/rencent'),
    joi_validation_pipe_1.JoiValidationPipe(standard_pagination_validation_1.StandardPaginationSchema),
    joi_validation_pipe_1.JoiValidationPipe(ArticleController_1.cIdSchema),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getCurrent", null);
__decorate([
    common_1.Get('/article/:id'),
    joi_validation_pipe_1.JoiValidationPipe(ArticleController_1.idSchema),
    __param(0, common_1.Param()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticle", null);
__decorate([
    common_1.Delete('/article/:id'),
    roles_decorator_1.Roles('admin'),
    joi_validation_pipe_1.JoiValidationPipe(ArticleController_1.idSchema),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "deleteArticle", null);
__decorate([
    common_1.Delete('/articles'),
    roles_decorator_1.Roles('admin'),
    joi_validation_pipe_1.JoiValidationPipe(ArticleController_1.deleteArticlesSchema),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "deleteArticles", null);
ArticleController = ArticleController_1 = __decorate([
    common_1.Controller('/api'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
exports.ArticleController = ArticleController;
function formatResponse(data) {
    let responseData = { code: 0, msg: 'success', data: '' };
    if (!data) {
        responseData.code = 1;
        responseData.msg = 'error';
    }
    responseData.data = data;
    return responseData;
}
//# sourceMappingURL=article.controller.js.map