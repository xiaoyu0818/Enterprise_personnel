// 引入数据库模块
const mysql = require('mysql');

// 建立数据库连接池
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '200818',
	database: 'school'
});
// 连接数据库
connection.connect(err => {
	if (err) {
		console.log(err.message);
		return
	} else {
		console.log("数据库连接成功");
	}
});

module.exports = {
    connection
};