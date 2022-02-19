
// 实现退出系统 
function logout(){
	// 防止退出登录后还能通过浏览器后退功能返回页面
	var url = location.href;    //将当前页面的地址赋值给变量url
	if(url.indexOf("#")==-1){    //分切变量url，分隔符为“#”
		url+="#";                //如果url后面没有#，那就加入#
		self.location.replace(url);  //刷新页面
	}
	//页面跳转
	window.location.replace("../index.html");
}

// 将a标签跳转的内容放入iframe
// 员工信息管理
function yuangongxinxi(){
	var zhutineirong = document.getElementById('zhuti');
	zhutineirong.style.display='none';
	var ifrm = document.getElementById('ifm');
	ifrm.style.display='block';
	ifrm.src="yuangongxinxi.html";
}

// 实现点击修改弹出一个页面
function update(){
	var update = document.querySelector("#update");
	update.style.display='block';
}

// 点击确定关闭页面
function gengxin(){
	var gengxin = document.querySelector("#update");
	gengxin.style.display='none';
}

// 公告管理
function gonggao(){
	var zhutineirong = document.getElementById('zhuti');
	zhutineirong.style.display='none';
	var ifrm = document.getElementById('ifm');
	ifrm.style.display='block';
	ifrm.src="gonggao.html";
}

// 工资类别管理
function gongzileibie(){
	var zhutineirong = document.getElementById('zhuti');
	zhutineirong.style.display='none';
	var ifrm = document.getElementById('ifm');
	ifrm.style.display='block';
	ifrm.src="gongzileibie.html";
}

// 员工工资管理
function yuangonggongzi(){
	var zhutineirong = document.getElementById('zhuti');
	zhutineirong.style.display='none';
	var ifrm = document.getElementById('ifm');
	ifrm.style.display='block';
	ifrm.src="yuangonggongzi.html";
}

// 员工出勤管理
function yuangongchuqing(){
	var zhutineirong = document.getElementById('zhuti');
	zhutineirong.style.display='none';
	var ifrm = document.getElementById('ifm');
	ifrm.style.display='block';
	ifrm.src="yuangongchuqing.html";
}

// 员工培训管理
function yuangongpeixun(){
	var zhutineirong = document.getElementById('zhuti');
	zhutineirong.style.display='none';
	var ifrm = document.getElementById('ifm');
	ifrm.style.display='block';
	ifrm.src="yuangongpeixun.html";
}
function peixunxiangmu(){
	var zhutineirong = document.getElementById('zhuti');
	zhutineirong.style.display='none';
	var ifrm = document.getElementById('ifm');
	ifrm.style.display='block';
	ifrm.src="peixunxiangmu.html";
}

// 奖惩管理
function yuangongjiangcheng(){
	var zhutineirong = document.getElementById('zhuti');
	zhutineirong.style.display='none';
	var ifrm = document.getElementById('ifm');
	ifrm.style.display='block';
	ifrm.src="yuangongjiangcheng.html";
}

// 工资报表管理
function gongzibaobiao(){
	var zhutineirong = document.getElementById('zhuti');
	zhutineirong.style.display='none';
	var ifrm = document.getElementById('ifm');
	ifrm.style.display='block';
	ifrm.src="gongzibaobiao.html";
}

console.log('JS可以连接上');