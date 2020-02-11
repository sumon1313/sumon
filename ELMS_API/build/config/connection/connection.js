"use strict";
// import * as mongoose from 'mongoose';
// import config from '../env/index';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectOptions = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true,
};
//const MAIN_DB_URI: string = config.database.DB_URI+"/"+config.database.DB_MAIN;
let db_server = require('mssql');
let config = {
    user: 'sa',
    password: 'sql2017DB',
    server: '192.168.1.130\\MSSQLSERVER2017',
    database: 'VVS_NAVIGATOR',
    port: 1433
};
// db.connect(config,function(err: any){
//     if(err){
//         console.log(err);
//         console.log('Database Not Connected')
//     }
// })
const db = new db_server.ConnectionPool(config);
function dbConTest() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const poolConnect = yield db.connect();
            poolConnect.close();
            return poolConnect;
        }
        catch (e) {
            return Promise.reject(e);
        }
    });
}
dbConTest().then(res => {
    console.log('***************************************************');
    console.log('Database successfully connected.');
    console.log('***************************************************');
})
    .catch(err => {
    console.log('***************************************************');
    console.log('Failed to Establish the connection to the database server.');
    console.log('***************************************************');
    console.log('Error details here...');
    console.log(err);
});
//const db = new Sequelize('mssql://sa:sql2017DB@192.168.1.130:1433/VCA');
//const db = new Sequelize(MAIN_DB_URI);
//export const db = new Sequelize('mssql://SA:sql2017DB@localhost:1433/vca');
//export const db: mongoose.Connection = mongoose.createConnection(MONGO_URI, connectOptions);
// db.authenticate().then(() => {
//     console.log(config.database.DIALECT+' Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the '+config.database.DIALECT+' database:', err);
//   });
exports.default = db;
//# sourceMappingURL=connection.js.map