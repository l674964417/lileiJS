/****
	ajax有关的对象
	
	1.ajax过程：
		(1).创建XMLHttpRequest对象,也就是创建一个异步调用对象.
		(2).创建一个新的HTTP请求，并制定该HTTP请求的方法、URL及验证信息.
		(3).设置响应HTTP请求状态变化的函数.
		(4).发送HTTP请求.
		(5).获取异步调用返回的数据.
		(6).使用JavaScript和DOM实现局部刷新.
	
	2.GET和POST的区别：
		GET: 一般用于信息获取，使用URL传递参数,对所发送信息的数量也有限制.
		POST：一般用于修改服务器上的资源，对所发送的信息没有限制。
		GET方式需要使用Request.QueryString来取得变量的值，而POST方式通过Request.Form来获取变量的值，
		也就是说Get是通过地址栏来传值，而Post是通过提交表单来传值
	3.在以下情况下请使用POST请求：
		无法使用缓存文件（更新服务器上的文件或数据库）
		向服务器发送大量数据（POST 没有数据量限制）
		发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠
		
	4.HTTP状态码：
		100  Continue  继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息
		200  OK   正常返回信息
		201  Created  请求成功并且服务器创建了新的资源
		202  Accepted  服务器已接受请求，但尚未处理
		301  Moved Permanently  请求的网页已永久移动到新位置。
		302 Found  临时性重定向。
		303 See Other  临时性重定向，且总是使用 GET 请求新的 URI。
		304  Not Modified  自从上次请求后，请求的网页未修改过。

		400 Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
		401 Unauthorized  请求未授权。
		403 Forbidden  禁止访问。
		404 Not Found  找不到如何与 URI 相匹配的资源。

		500 Internal Server Error  最常见的服务器端错误。
		503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。
****/


MYAPP.ajaxObj = {};
//参数格式：{url: "", method: "GET", data: "", succss: func, failed: func}
MYAPP.ajaxObj.ajax = function(params) {
	var url = params.url;
	var method = params.method || "GET";
	var data = params.data || "";
	var async = params.async !== false;
	var success = params.success || function(){};
	var failed = params.failed || function(){};
	var maskId = typeof params.maskId != "undefined" ? params.maskId : parseInt((new Date()).getTime()+""+parseInt(Math.random()*1000));
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) {// 已收到响应
			if (xmlHttp.status == 200 ) {// 请求成功
				success(xmlHttp);
			}else{
				if(xmlHttp.responseText && xmlHttp.responseText.length>0){
					success(xmlHttp);
				}else{
					failed(xmlHttp);
				}
			}
		}
	};
	xmlHttp.maskId = maskId;
	xmlHttp.open(method, url, async);
	if (method.toLowerCase() == "post") {
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xmlHttp.send(data);
	} else {
		xmlHttp.send(null);
	}
	return xmlHttp;
};


//解决缓存问题
//open("GET", 'demo.php?rand=+Math.random', true);

