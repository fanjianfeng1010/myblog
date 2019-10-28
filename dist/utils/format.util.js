"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatResponse(data) {
    let responseData = { code: 0, msg: 'success', data: '' };
    if (!data) {
        responseData.code = 1;
        responseData.msg = 'error';
    }
    responseData.data = data;
    return responseData;
}
exports.formatResponse = formatResponse;
//# sourceMappingURL=format.util.js.map