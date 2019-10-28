"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const model_util_1 = require("../utils/model.util");
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        min: [1],
        max: 20,
        required: true,
    },
    order: {
        type: Number,
        min: [1],
        max: 100,
        required: true,
    },
    articleCount: {
        type: String,
        min: [1],
        max: 888,
        required: true,
    },
}, {
    timestamps: true,
});
exports.CategoryModel = mongoose.model('category', CategorySchema, 'category');
exports.CategoryModelProvider = model_util_1.getProviderByModel(exports.CategoryModel);
//# sourceMappingURL=category.model.js.map