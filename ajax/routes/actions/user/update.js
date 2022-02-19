// 引入数据库模块
const { connection } = require('../../../model')
// 引入封装函数
const { sqlQuery } = require('../../common')

// 更新表中信息
module.exports = (req, res) => {
    var { id, username, password, zhiwu } = req.fields
    // 数据格式校验
    // const { error } = validateLogin(req.fields);
    var str = 'update users set zhiwu="' + zhiwu + '",username="' + username + '",password="' + password + '" where id=' + id
    sqlQuery(str,(results)=>{
        res.send(results)
    })
}