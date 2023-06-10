var mysql= require("mysql")
var pool=mysql.createPool(
    {
        host:'sql.freedb.tech',
        port:3306,
        user:'freedb_flight1',
        password:'qN4*f*YAWW!?A88',
        database:'freedb_flight1',
        multipleStatements:true,
        connectionLimit:100
    })
    module.exports=pool