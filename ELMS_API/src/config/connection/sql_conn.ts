const mysql= require('mysql');

var mysqlcon=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'elms',
    multipleStatements:true
});

mysqlcon.connect((err: Error) => {
    if(!err)
        console.log('DB connection succeded');
    else
        console.log("DB connection failed \n Error : "+ JSON.stringify(err, undefined, 2));
}); 

export default mysqlcon;