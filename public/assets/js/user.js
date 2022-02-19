// 实现退出系统 
function logout() {
	// 防止退出登录后还能通过浏览器后退功能返回页面
	var url = location.href;    //将当前页面的地址赋值给变量url
	if (url.indexOf("#") == -1) {    //分切变量url，分隔符为“#”
		url += "#";                //如果url后面没有#，那就加入#
		self.location.replace(url);  //刷新页面
	}
	//页面跳转
	window.location.replace("../index.html");
}


// 将a标签跳转的内容放入iframe
// 关于公司
function guanyugongsi() {
	var zhutineirong = document.getElementById('zhengwen');
	zhutineirong.style.display = 'none';
	var ifrm = document.getElementById('zhuti');
	ifrm.style.display = 'block';
	ifrm.src = "guanyugongsi.html";
}

// 公司加班通知
function gongsijiaban() {
	var zhutineirong = document.getElementById('zhengwen');
	zhutineirong.style.display = 'none';
	var ifrm = document.getElementById('zhuti');
	ifrm.style.display = 'block';
	ifrm.src = "gongsijiaban.html";
}

// 公司加薪通知
function gongsijiaxin() {
	var zhutineirong = document.getElementById('zhengwen');
	zhutineirong.style.display = 'none';
	var ifrm = document.getElementById('zhuti');
	ifrm.style.display = 'block';
	ifrm.src = "gongsijiaxin.html";
}

// 工资查询
function gongzichaxun() {
	var zhutineirong = document.getElementById('zhengwen');
	zhutineirong.style.display = 'none';
	var ifrm = document.getElementById('zhuti');
	ifrm.style.display = 'block';
	ifrm.src = "gongzichaxun.html";
}

// 薪资查询
function xinzichaxun() {
	var zhutineirong = document.getElementById('zhengwen');
	zhutineirong.style.display = 'none';
	var ifrm = document.getElementById('zhuti');
	ifrm.style.display = 'block';
	ifrm.src = "xinzichaxun.html";
}

// 出勤查询
function chuqingchaxun() {
	var zhutineirong = document.getElementById('zhengwen');
	zhutineirong.style.display = 'none';
	var ifrm = document.getElementById('zhuti');
	ifrm.style.display = 'block';
	ifrm.src = "chuqingchaxun.html";
}

// 奖惩通告
function jiangchengtonggao() {
	var zhutineirong = document.getElementById('zhengwen');
	zhutineirong.style.display = 'none';
	var ifrm = document.getElementById('zhuti');
	ifrm.style.display = 'block';
	ifrm.src = "jiangchengtonggao.html";
}