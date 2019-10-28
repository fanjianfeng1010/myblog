"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const index_config_1 = require("../config/index.config");
const common_1 = require("@nestjs/common");
exports.auth = (req, res, next) => {
    if (req.hasOwnProperty('headers') && req.headers.hasOwnProperty('authorization')) {
        try {
            return jwt.verify(req.headers.authorization, index_config_1.TOKEN_SECRET_KEY);
        }
        catch (err) {
            throw new common_1.UnauthorizedException('尚未登录！！', err.message);
        }
    }
    return null;
};
//# sourceMappingURL=auth.util.js.map