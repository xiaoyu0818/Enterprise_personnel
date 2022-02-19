// 员工路由
const user = require('express').Router();

// 创建员工
// user.post('/', require('./actions/user/create'));
// 查询所有员工信息
user.get('/', require('./actions/user/find'));
// 根据id删除员工信息
user.delete('/usersDel', require('./actions/user/delete'));
// 根据id修改员工信息
user.put('/updata', require('./actions/user/update'));
// 根据员工id查询员工信息
user.get('/updata', require('./actions/user/findById'));

// 导出路由
module.exports = user;