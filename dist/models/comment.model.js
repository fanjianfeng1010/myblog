"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const model_util_1 = require("../utils/model.util");
exports.CommentSchema = new mongoose.Schema({
    nickName: {
        type: String,
        min: [1],
        max: 150,
        required: true,
    },
    content: {
        type: String,
        min: [2],
        max: 150,
        required: true,
    },
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'article',
        required: true,
    },
}, {
    timestamps: true,
});
exports.CommentModel = mongoose.model('comment', exports.CommentSchema, 'comment');
exports.CommentModelProvider = model_util_1.getProviderByModel(exports.CommentModel);
//# sourceMappingURL=comment.model.js.map