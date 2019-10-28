"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const model_util_1 = require("../utils/model.util");
const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        min: [1],
        max: 150,
        required: true,
    },
    content: {
        type: String,
        min: [1],
        max: 8000,
        required: true,
    },
    summary: {
        type: String,
        min: [1],
        max: 2000,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: false,
    },
    commentCount: {
        type: Number,
        max: 100000,
        default: 0,
    },
    viewsCount: {
        type: Number,
        max: 100000,
        default: 0,
    },
    likeCount: {
        type: Number,
        max: 100000,
        default: 0,
    },
    tags: { type: [String], index: true },
}, {
    timestamps: true,
});
exports.ArticleModel = mongoose.model('article', ArticleSchema, 'article');
exports.ArticleModelProvider = model_util_1.getProviderByModel(exports.ArticleModel);
//# sourceMappingURL=article.model.js.map