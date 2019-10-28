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
const comment_service_1 = require("./comment.service");
let CommentController = class CommentController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    async create(comment) {
        await this.commentsService.create(comment);
    }
    async getComment(query) {
        let res = await this.commentsService.getComment(query.id);
        let code = 0, msg = 'ok', data = res;
        return { code, msg, data };
    }
};
__decorate([
    common_1.Post('/comment'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "create", null);
__decorate([
    common_1.Get('/comment'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getComment", null);
CommentController = __decorate([
    common_1.Controller('/api'),
    __metadata("design:paramtypes", [comment_service_1.CommentsService])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=comment.controller.js.map