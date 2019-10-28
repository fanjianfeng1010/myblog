"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const model_util_1 = require("../utils/model.util");
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        min: [1],
        max: 150,
        required: true,
    },
    articleCount: {
        type: Number,
        max: 10000,
        default: 0,
    },
}, {
    timestamps: true,
});
exports.CategoryModel = mongoose.model('category', CategorySchema, 'category');
exports.CategoryModelProvider = model_util_1.getProviderByModel(exports.CategoryModel);
//# sourceMappingURL=category.model.js.map