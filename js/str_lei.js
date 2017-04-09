/****
	字符串有关的对象
	charAt: 返回指定位置的字符。
	concat: 将两个或多个字符的文本组合起来，返回一个新的字符串。
	
	indexOf: 返回字符串中的一个子串第一处出现的索引(从左向右)。	
	lastIndexOf: 返回字符串中的一个子串最后一处出现的索引(从右向左).
	
	substring: 返回字符串的一个子串，传入参数是起始位置和结束位置。
	substr: 返回字符串的一个子串，传入参数是起始位置和长度。
	
	slice: 提取字符串的一部分，并返回一个新字符串
	split: 通过将字符串划分成子串，将一个字符串做成一个字符串数组。
	length: 返回字符串的长度，所谓字符串的长度就是指其包含的字符的个数。
	
	toLowerCase: 将整个字符串转换成小写字母。
	toUpperCase: 将整个字符串转成大写字母。
	
	match: 检查一个字符串匹配一个正则表达式内容，如果没有匹配返回null。
	replace: 用来查找匹配一个正则表达式的字符串，然后使用新字符串替代匹配的字符串
	search: 执行一个正则表达式匹配查找，如果查找成功，返回字符串匹配的索引值，否则返回-1.

****/


MYAPP.strObj = {};

//判断字符串中出现次数最多的字符,并统计次数
MYAPP.strObj.findMaxTime = function(str){
	var json = {};
	for(var i=0; i<str.length; i++){
		if(!json[str.charAt(i)]){
			json[str.charAt(i)] = 1;
		}else{
			json[str.charAt(i)]++;
		}
	}
	var iMax = 0, iIndex = "";
	for(var i in json){
		if(json[i]>iMax){
			iMax = json[i];
			iIndex = i;
		}
	}
	return {
		iMax: iMax,   //出现最多次数字符
		iIndex: iIndex //出现最多的次数
	}
}


