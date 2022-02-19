// 引入数据库模块
const {connection} = require('./../model')
// 封装mysql函数
 function sqlQuery(sql,callback) {
    connection.query(sql, (err, results) => {
		if (err) {
			return console.log(err.message);
		} 
        callback(results);
	});
}
// 导出
module.exports = {
	sqlQuery
};