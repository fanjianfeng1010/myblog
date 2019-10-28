"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const model_util_1 = require("../utils/model.util");
const AdminLogSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    data: {
        type: String,
        default: '',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
}, {
    timestamps: true,
});
exports.AdminLogModel = mongoose.model('adminlog', AdminLogSchema, 'adminlog');
exports.AdminLogModelProvider = model_util_1.getProviderByModel(exports.AdminLogModel);
//# sourceMappingURL=adminlog.model.js.map