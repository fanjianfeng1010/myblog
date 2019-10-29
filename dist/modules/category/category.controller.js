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
var CategoryController_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const standard_pagination_validation_1 = require("../../validations/standard.pagination.validation");
const category_service_1 = require("./category.service");
const joi_validation_pipe_1 = require("../../pipes/joi.validation.pipe");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const roles_guard_1 = require("../../guards/roles.guard");
const Joi = require("@hapi/joi");
const format_util_1 = require("../../utils/format.util");
let CategoryController = CategoryController_1 = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async create(category) {
        let data = await this.categoryService.create(category);
        return {
            data
        };
    }
    async update(params, category) {
        return await this.categoryService.update(params.id, category);
    }
    async getCategories(query) {
        let data = await this.categoryService.getCategories({}, {
            skip: Number(query.page),
            limit: Number(query.limit),
            sort: {},
        });
        return format_util_1.formatResponse(data);
    }
    async getCategory(params) {
        return await this.categoryService.getCategory(params.id);
    }
    async delteCategory(params) {
        return await this.categoryService.delete(params.id);
    }
    async deleteCategories(body) {
        return this.categoryService.batchDelete(body.categoryIds);
    }
};
CategoryController.idSchema = {
    id: Joi.string()
        .default('')
        .max(50),
};
CategoryController.deleteCategoriesSchema = {
    categoryIds: Joi.array().items(Joi.string().required()),
};
__decorate([
    common_1.Post('/category'),
    roles_decorator_1.Roles('admin'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
__decorate([
    common_1.Put('/category/:id'),
    roles_decorator_1.Roles('admin'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "update", null);
__decorate([
    common_1.Get('/categories'),
    joi_validation_pipe_1.JoiValidationPipe(standard_pagination_validation_1.StandardPaginationSchema),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategories", null);
__decorate([
    common_1.Get('/category/:id'),
    joi_validation_pipe_1.JoiValidationPipe(CategoryController_1.idSchema),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategory", null);
__decorate([
    common_1.Delete('/category/:id'),
    roles_decorator_1.Roles('admin'),
    joi_validation_pipe_1.JoiValidationPipe(CategoryController_1.idSchema),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "delteCategory", null);
__decorate([
    common_1.Delete('/categories'),
    roles_decorator_1.Roles('admin'),
    joi_validation_pipe_1.JoiValidationPipe(CategoryController_1.deleteCategoriesSchema),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteCategories", null);
CategoryController = CategoryController_1 = __decorate([
    common_1.Controller('/api'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map