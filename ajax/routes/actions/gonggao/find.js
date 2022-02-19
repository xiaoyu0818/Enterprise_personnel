// 引入数据库模块
const {connection} = require('../../../model')
// 引入封装函数
const {sqlQuery} = require('../../common')

// 查询公告表中所有信息
module.exports = (req,res)=>{

	sqlQuery('select * from gonggao',(results)=>{
        // 将数据响应给页面
		res.send(results)
	})
}
