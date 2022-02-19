// 公告路由
const gonggao = require('express').Router();

// 创建公告
gonggao.post('/', require('./actions/gonggao/create'));
// 查询所有公告信息
gonggao.get('/', require('./actions/gonggao/find'));
// 根据id删除公告信息
// gonggao.get('/gonggaosDel', require('./actions/gonggao/delete'));
// 根据id修改公告信息
// gonggao.put('/:id', require('./actions/gonggao/update'));
// 根据公告id查询公告信息
// gonggao.get('/:id', require('./actions/gonggao/findById'));

// 导出路由
module.exports = gonggao;