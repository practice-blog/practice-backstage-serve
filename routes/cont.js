const { query } = require('express')
const express = require('express')
const router = express.Router();
const dbConfig = require('../utils/dbconfig')

router.get('/cont', (req, res) => {
  const sql = 'select * from contents';
  const sqlArr = []
  const callBack = (err, data) => {
    if (err) {
      res.send({
        code: 400,
        msg: '获取失败',
        'list': data
      })
    } else {
      res.send({
        code: 200,
        msg: '获取成功',
        'list': data
      })
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callBack)
})

module.exports = router