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
const comment_model_1 = require("../../models/comment.model");
const model_util_1 = require("../../utils/model.util");
const article_model_1 = require("../../models/article.model");
const common_2 = require("@nestjs/common");
let CommentsService = class CommentsService {
    constructor(commentModel, articleModel) {
        this.commentModel = commentModel;
        this.articleModel = articleModel;
    }
    async create(newComment) {
        console.log(newComment.article);
        const article = await this.articleModel.findById(newComment.article);
        console.log(article);
        if (!article) {
            throw new common_2.BadRequestException('文章 id 错误');
        }
        const comment = await this.commentModel.create(newComment);
        await this.articleModel.updateOne({ _id: article._id }, { $inc: { commentCount: 1 } });
        return comment;
    }
    async getComment(id) {
        console.log(id);
        return await this.commentModel.findById(id).exec();
    }
};
CommentsService = __decorate([
    common_1.Injectable(),
    __param(0, model_util_1.InjectModel(comment_model_1.CommentModel)),
    __param(1, model_util_1.InjectModel(article_model_1.ArticleModel)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comment.service.js.map