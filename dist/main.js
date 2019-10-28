"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const helmet = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(helmet());
    app.enableCors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'OPTIONS', 'DELETE'],
        allowedHeaders: [
            'Content-Type,Content-Length,Authorization, Accept,X-Requested-With',
        ],
        credentials: true,
        maxAge: 1728000,
    });
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map