// 引入数据库模块
const {connection} = require('../../../model')
// 引入封装函数
const {sqlQuery} = require('../../common')

// 查询数据库中的所有数据
module.exports = (err, res) => {
	var str = 'select * from users';
	// 查询表中的信息
	sqlQuery(str,(results)=>{
		// 将数据响应给页面中
		res.send(results)
	})
}