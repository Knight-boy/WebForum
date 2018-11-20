// var database = require('../utils/database');
// mysql = database.getDbCon();
//
// function User(user){
//     this.id = user.id;
//     this.username = user.username;
//     this.password = user.password;
//     // this.repeatpassword = user.repeatpassword;
//     this.email = user.email;
//     this.telphone = user.telphone;
// }
//
// //保存用户
// User.prototype.save = function(callback){
//     var  user = {
//         id: this.id,
//         username: this.username,
//         password: this.password,
//         // repeatpassword: this.repeatpassword,
//         email: this.email,
//         telphone: this.telphone
//     };
//
//     var sql =`INSERT INTO user(id,username,password,email,telephone) VALUES ?`;
//
//     mysql.query(sql,[user.id,user.username,user.password,user.email,user.telphone],function(err,results,fields){
//         if (err) {
//             return console.error(err.message);
//         } else {
//             console.log('Row inserted: ' + results.affectedRows);
//             //返回用户id
//             return callback(err,fields);
//         }
//     });
// };
//
// //获取用户
// User.get = function(id,callback){
//     var sql = "select * from user where id='"+id+"'";
//     mysql.query(sql,function(err,results,fields){
//         if(err){
//             throw err;
//         }else{
//             callback(err,results[0],fields);
//         }
//     })
// }
//
//
// module.exports = User;