"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose = require("mongoose");
const index_config_1 = require("../config/index.config");
console.log(index_config_1.MONGODB);
const DB_CONNECTION_TOKEN = Symbol('DB_CONNECTION_TOKEN');
const Connection = {
    provide: DB_CONNECTION_TOKEN,
    useFactory: () => {
        const RECONNET_INTERVAL = 500;
        mongoose.connection.on('connecting', () => {
            console.log('数据库连接中...');
        });
        mongoose.connection.on('open', () => {
            console.info('数据库连接成功！');
        });
        mongoose.connection.on('disconnected', () => {
            console.error(`数据库失去连接！尝试 ${RECONNET_INTERVAL / 1000}s 后重连`);
        });
        mongoose.connection.on('error', (error) => {
            console.error('数据库发生异常！', error);
            mongoose.disconnect();
        });
        const uri = 'mongodb://fanjianfeng:36226016@localhost/blogserver';
        return mongoose.connect(uri, {
            useCreateIndex: true,
            useNewUrlParser: true,
            autoReconnect: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            reconnectInterval: RECONNET_INTERVAL,
        });
    },
};
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Global(),
    common_1.Module({
        providers: [Connection],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map