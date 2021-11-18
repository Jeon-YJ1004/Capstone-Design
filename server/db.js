const mysql = require('mysql');

const db = mysql.createPool({
    // host: 'dbcapston.cwistkury9lv.ap-northeast-2.rds.amazonaws.com',
    // port: '3306',
    // user: 'admin',
    // password: 'wjsdudwn2080',
    // database: 'dbCapston'
    host:'localhost',
    user:'root',
    password:'wjsdudwn2080!',
    database:'cafe'
});

module.exports = db;