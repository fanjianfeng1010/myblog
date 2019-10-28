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
const category_model_1 = require("../../models/category.model");
let CategoryService = class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async create(newCategory) {
        return await this.categoryModel.create(newCategory);
    }
    async update(id, data) {
        await this.categoryModel.updateOne({ _id: id }, data);
        return await this.categoryModel.findById(id);
    }
    async getCategories(query = {}, option) {
        const { skip = 1, limit = 100, sort = {} } = option;
        return await this.categoryModel.find(query, '', {
            skip: (skip - 1) * limit,
            limit,
            sort,
        });
    }
    async getCategory(id) {
        return await this.categoryModel.findById(id);
    }
    async delete(id) {
        await this.categoryModel.deleteOne({ _id: id });
        return {};
    }
    async batchDelete(categoryIds) {
        return this.categoryModel.deleteMany({ _id: { $in: categoryIds } });
    }
};
CategoryService = __decorate([
    common_1.Injectable(),
    __param(0, model_util_1.InjectModel(category_model_1.CategoryModel)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map