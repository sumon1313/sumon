"use strict";
// import * as dotenv from 'dotenv';
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config();
// interface IConfig {
//     port: string | number;
//     database: {
//         MONGODB_URI: string;
//         MONGODB_DB_MAIN: string;
//     };
//     secret: string;
// }
// const NODE_ENV: string = process.env.NODE_ENV || 'development';
// const development: IConfig = {
//     port: process.env.PORT || 3000,
//     database: {
//         MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/',
//         MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN || 'users_db'
//     },
//     secret: process.env.SECRET || '@QEGTUI'
// };
// const production: IConfig = {
//     port: process.env.PORT || 3000,
//     database: {
//         MONGODB_URI: process.env.MONGODB_URI || 'mongodb://production_uri/',
//         MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN || 'users_db'
//     },
//     secret: process.env.SECRET || '@QEGTUI'
// };
// const test: IConfig = {
//     port: process.env.PORT || 3000,
//     database: {
//         MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017',
//         MONGODB_DB_MAIN: 'test_users_db'
//     },
//     secret: process.env.SECRET || '@QEGTUI'
// };
// const config: {
//     [name: string]: IConfig
// } = {
//     test,
//     development,
//     production
// };
// export default config[NODE_ENV];
const dotenv = require("dotenv");
dotenv.config();
let config;
const DATABASE_TYPE = process.env.DATABASE_TYPE;
if (DATABASE_TYPE == 'mssql') {
    config = {
        port: process.env.PORT || 3000,
        database: {
            DIALECT: DATABASE_TYPE,
            DB_URI: process.env.MSSQL_URI,
            DB_MAIN: process.env.MSSQL_DB
        },
        secret: process.env.SECRET || '@QEGTUI'
    };
}
exports.default = config;
//# sourceMappingURL=index.js.map