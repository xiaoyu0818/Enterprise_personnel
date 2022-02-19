
// 引入封装函数
const {sqlQuery} = require('../../common')

// 删除员工信息
module.exports=(req, res) => {
	var id = req.query.id
	var str = 'delete from users where id='+id;
	// 删除表中的信息
	sqlQuery(str,(results)=>{
		res.send(results)
	})
	
}