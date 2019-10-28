"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const cypto_util_1 = require("../utils/cypto.util");
const model_util_1 = require("../utils/model.util");
const UserSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['admin'],
        default: 'admin',
        required: true,
    },
    account: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true,
    },
    password: {
        type: String,
        set: cypto_util_1.sha1,
        required: true,
    },
}, {
    timestamps: true,
}).index({ createdAt: -1 });
exports.UserModel = mongoose.model('user', UserSchema, 'user');
exports.UserModelProvider = model_util_1.getProviderByModel(exports.UserModel);
//# sourceMappingURL=user.model.js.map