"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const all_exceptions_filter_1 = require("./filters/all-exceptions.filter");
const logger_util_1 = require("./utils/logger.util");
const body_parser_1 = require("body-parser");
const helmet = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { logger: false });
    app.use(helmet());
    app.use(body_parser_1.json({ limit: '20mb' }));
    app.useGlobalFilters(new all_exceptions_filter_1.AllExceptionsFilter());
    return await app.listen(2300);
}
exports.bootstrap = bootstrap;
bootstrap().then(() => {
    logger_util_1.default.info(`监听进行中`);
});
//# sourceMappingURL=main.js.map