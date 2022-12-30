const { query } = require('express');
var express = require('express');
const dbconfig = require('../utils/dbconfig');
var router = express.Router();
var dbConfig = require('../utils/dbconfig')
// const studentController = require('../controller/students')

/* GET users listing. */
//查
router.get('/all', function (req, res) {
  var sql = "select * from test1";
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      res.send({
        code: 400,
        msg: '获取出错！',
        'list': data
      })
    } else {
      res.send({
        code: 200,
        msg: 'success',
        'list': data
      })
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callBack);
});

router.post('/add', function (req, res) {
  console.log(JSON.stringify(req.body))
  var sqlArr = [];
  const sql = `insert into test1 (id,user_name,user_email,phone) values ('${req.body.id}','${req.body.userName}','${req.body.userEmail}','${req.body.phone}')`
  const callBack = (err, data) => {
    if (err) {
      res.send({
        code: 400,
        msg: '添加失败'
      })
    } else {
      res.send({
        code: 200,
        msg: '添加成功'
      })
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callBack)
})


router.delete('/delete', (req, res) => {
  let { id } = req.query
  console.log("id", id)
  let sql = 'delete from test1 where id = ?'
  let sqlArr = [id]
  const callBack = (err, data) => {
    if (err) {
      res.send({
        code: 400,
        msg: '删除失败'
      })
    } else {
      res.send({
        code: 200,
        msg: '删除成功'
      })
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callBack)
})

router.post('/update', (req, res) => {
  const { userName, id } = req.body
  const sql = 'update test1 set user_name = ? where id = ?'
  const sqlArr = [userName,id]
  const callBack = (err, data) => {
    if (err) {
      console.log(err)
      res.send({
        code: 400,
        msg: '修改失败'
      })
    } else {
      res.send({
        code: 200,
        msg: '修改成功'
      })
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callBack)
})



module.exports = router;