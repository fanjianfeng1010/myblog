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
const category_model_1 = require("../../models/category.model");
const model_util_1 = require("../../utils/model.util");
const article_model_1 = require("src/models/article.model");
let CategoryService = class CategoryService {
    constructor(categoryModel, ArticleModel) {
        this.categoryModel = categoryModel;
        this.ArticleModel = ArticleModel;
    }
    async create(newCategory) {
        const category = await this.categoryModel.create(newCategory);
        return category;
    }
    async getCategory(id) {
        return this.categoryModel.findById(id);
    }
    async getCategories() {
        return await this.categoryModel.find();
    }
    async update(id, data) {
        await this.categoryModel.updateOne({ _id: id }, data);
        return await this.categoryModel.findById(id);
    }
    async deleteCategory(id) {
        await this.categoryModel.deleteOne({ _id: id });
        return {
            msg: 'ok',
            code: 0,
        };
    }
    async batchDelete(categoryIds) {
        let data = await this.categoryModel.deleteMany({ _id: { $in: categoryIds } });
        return data;
    }
};
CategoryService = __decorate([
    common_1.Injectable(),
    __param(0, model_util_1.InjectModel(category_model_1.CategoryModel)),
    __param(0, model_util_1.InjectModel(article_model_1.ArticleModel)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map