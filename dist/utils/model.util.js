"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const DB_MODEL_TOKEN_SUFFIX = 'db_model_token';
function getModelToken(modelName) {
    return modelName + DB_MODEL_TOKEN_SUFFIX;
}
exports.getModelToken = getModelToken;
exports.getProviderByModel = (model) => {
    return {
        provide: model.modelName + DB_MODEL_TOKEN_SUFFIX,
        useValue: model,
    };
};
exports.InjectModel = (model) => {
    return common_1.Inject(getModelToken(model.modelName));
};
//# sourceMappingURL=model.util.js.map