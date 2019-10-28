"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const config_1 = require("../config/config");
const common_1 = require("@nestjs/common");
exports.auth = (req) => {
    if (req.hasOwnProperty('headers') && req.headers.hasOwnProperty('authorization')) {
        let token = req.headers['authorization'];
        try {
            return jwt.verify(token, config_1.TOKEN_SECRET_KEY);
        }
        catch (err) {
            console.log(err.json());
            throw new common_1.UnauthorizedException('尚未登录！！', err.message);
        }
    }
    return null;
};
//# sourceMappingURL=auth.util.js.map