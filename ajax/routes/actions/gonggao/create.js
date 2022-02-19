
// 引入封装函数
const {sqlQuery} = require('../../common')

// 添加信息
module.exports = (req,res)=>{
    var {biaoti,neirong} = req.fields;
	var sql =`insert into gonggao values ('${biaoti}','${neirong}')`;
	sqlQuery(sql,results=>{
		res.send(results)
	})
}
