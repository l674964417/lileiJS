
//判断闰年
Date.prototype.isLeapYear = function(){
	return (0==this.getYear()%4 && ((this.getYear()%100 != 0) || (this.getYear()%400 == 0))); 
}

//日期时间对象
MYAPP.dateTimeObj = {};

MYAPP.dateTimeObj.dateFormat = function(dateObj, format){
	//var weekDays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	var weekDays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
	var date = {
		"M+": dateObj.getMonth()+1,
		"d+": dateObj.getDate(),
		"h+": dateObj.getHours(),
		"m+": dateObj.getMinutes(),
		"s+": dateObj.getSeconds(),
		"w+": weekDays[dateObj.getDay()],
		"S+": dateObj.getMilliseconds()
	};
	if (/(y+)/i.test(format)) {
		format = format.replace(RegExp.$1, (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in date) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		}
	}
	return format;
}
