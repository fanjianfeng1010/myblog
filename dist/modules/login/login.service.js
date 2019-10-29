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
const Joi = require("@hapi/joi");
const index_config_1 = require("../../config/index.config");
const jwt = require("jsonwebtoken");
const crypto_util_1 = require("../../utils/crypto.util");
const user_model_1 = require("../../models/user.model");
const schema = Joi.object().keys({
    account: Joi.string()
        .min(6)
        .max(30)
        .required()
        .error(new Error('账号长度在 6-30 之间')),
    password: Joi.string()
        .min(6)
        .max(30)
        .required()
        .error(new Error('密码长度在 6-30 之间')),
});
let LoginService = class LoginService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getFirstLoginInfo() {
        const count = await this.userModel.estimatedDocumentCount();
        if (count <= 0) {
            return { msg: '首次登陆,账号为管理员账号,直接登陆即可生成账号' };
        }
        return '';
    }
    async login(data) {
        const User = JSON.parse(crypto_util_1.decrypt(data.key));
        const account = User.account;
        const password = User.password;
        const count = await this.userModel.estimatedDocumentCount();
        const result = Joi.validate(User, schema);
        if (count <= 0) {
            if (result.error) {
                console.log(Joi.validate(User, schema));
                return {
                    msg: '首次登陆,账号为管理员账号,直接登陆即可生成账号' + result.error.message,
                };
            }
            await this.userModel.create({
                account,
                password: crypto_util_1.getDerivedKey(password),
            });
            let token = jwt.sign({ account, roles: ['admin'] }, index_config_1.TOKEN_SECRET_KEY, {
                expiresIn: 60 * 60 * 12,
            });
            return {
                data: {
                    token,
                },
            };
        }
        const user = await this.userModel.findOne({
            account,
            password: crypto_util_1.getDerivedKey(password),
        });
        if (user) {
            let token = jwt.sign({ account, roles: ['admin'] }, index_config_1.TOKEN_SECRET_KEY, {
                expiresIn: 60 * 60 * 12,
            });
            return { token };
        }
        return {
            msg: '用户密码输入错误,请重新检查再登录',
        };
    }
};
LoginService = __decorate([
    common_1.Injectable(),
    __param(0, model_util_1.InjectModel(user_model_1.UserModel)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map