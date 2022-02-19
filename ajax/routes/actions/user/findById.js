// 引入数据库模块
const {connection} = require('../../../model')
// 引入封装函数
const {sqlQuery} = require('../../common')

module.exports =(req, res) => {
	var id = req.query.id;
	var str = 'select * from users where id='+id;
	// 根据id查找表中的信息
    sqlQuery(str,(results)=>{
        res.send(results)
    })
}