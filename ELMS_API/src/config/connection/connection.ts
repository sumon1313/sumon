// import * as mongoose from 'mongoose';
// import config from '../env/index';

// interface IConnectOptions {
//     autoReconnect: boolean;
//     reconnectTries: number; // Never stop trying to reconnect
//     reconnectInterval: number;
//     loggerLevel ? : string;
//     useNewUrlParser ? : boolean;
// }

// const connectOptions: IConnectOptions = {
//     autoReconnect: true,
//     reconnectTries: Number.MAX_VALUE,
//     reconnectInterval: 1000,
//     useNewUrlParser: true,
// };

// const MONGO_URI: string = `${config.database.MONGODB_URI}${config.database.MONGODB_DB_MAIN}`;

// export const db: mongoose.Connection = mongoose.createConnection(MONGO_URI, connectOptions);

// // handlers
// db.on('connecting', () => {
//     console.log('\x1b[32m', 'MongoDB :: connecting');
// });

// db.on('error', (error) => {
//     console.log('\x1b[31m', `MongoDB :: connection ${error}`);
//     mongoose.disconnect();
// });

// db.on('connected', () => {
//     console.log('\x1b[32m', 'MongoDB :: connected');
// });

// db.once('open', () => {
//     console.log('\x1b[32m', 'MongoDB :: connection opened');
// });

// db.on('reconnected', () => {
//     console.log('\x1b[33m"', 'MongoDB :: reconnected');
// });

// db.on('reconnectFailed', () => {
//     console.log('\x1b[31m', 'MongoDB :: reconnectFailed');
// });

// db.on('disconnected', () => {
//     console.log('\x1b[31m', 'MongoDB :: disconnected');
// });

// db.on('fullsetup', () => {
//     console.log('\x1b[33m"', 'MongoDB :: reconnecting... %d');
// });




import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
//import config from '../env';

interface IConnectOptions {
    autoReconnect: boolean;
    reconnectTries: number; // Never stop trying to reconnect
    reconnectInterval: number;
    loggerLevel ? : string;
    useNewUrlParser ? : boolean;
}

const connectOptions: IConnectOptions = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true,
};

//const MAIN_DB_URI: string = config.database.DB_URI+"/"+config.database.DB_MAIN;

let db_server = require('mssql');

let config = {
    user : 'sa',
    password : 'sql2017DB',
    server : '192.168.1.130\\MSSQLSERVER2017',
    database : 'VVS_NAVIGATOR',
    port    : 1433
};
// db.connect(config,function(err: any){
//     if(err){
//         console.log(err);
//         console.log('Database Not Connected')
//     }
    
// })

const db = new db_server.ConnectionPool(config);



async function dbConTest(){
  try{
    const poolConnect = await db.connect();
    poolConnect.close()
    return poolConnect;
  }
  catch(e){
      return Promise.reject(e);

  }
}


dbConTest().then(
  res => {
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
  })


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

export default db;  