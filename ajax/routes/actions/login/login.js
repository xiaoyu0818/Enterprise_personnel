// 引入封装函数
const {sqlQuery} = require('../../common')

// 工具
const _ = require('lodash');

module.exports =  (req, res) => {
    // 查找用户
    let {user} = req.fields.username;
    console.log(req.fields.username);

    sqlQuery('select * from users where username=' + user, results => {
        // 如果用户不存在 响应
        if (!results.username) return res.status(400).send({ message: '该账号不存在' });
        // 密码错误 响应
        if (!results.password) return res.status(400).send({ message: '密码输入错误' });
        // 将用户信息存储在session中
        req.session.userInfo = user;
        // 响应
        res.send(_.pick(user, ['id','username', 'password', 'zhiwu']));
    })


};
