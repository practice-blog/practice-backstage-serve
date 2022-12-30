// var dbConfig = require('../utils/dbconfig')

// // 查
// getStudent = (req, res) => {
//   var sql = "select * from test1";
//   var sqlArr = [];
//   var callBack = (err, data) => {
//     if (err) {
//       res.send({
//         code: 400,
//         msg: '获取出错！',
//         'list': data
//       })
//     } else {
//       res.send({
//         code: 200,
//         msg: 'success',
//         'list': data
//       })
//     }
//   }
//   dbConfig.sqlConnect(sql, sqlArr, callBack);
// }

// module.exports = {
//   getStudent,
// }  