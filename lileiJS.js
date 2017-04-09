
//js库, 封装了不同类型的多个函数，用于方便处理
(function(){
	var LileiLib = LileiLib || {};

	//类型相关
	var TypeObj = function(){   //和类型有关的对象
		var toString = Object.prototype.toString;
		var classType = {  //用赖判定对象
			"[object Undefined]": "Undefined",
			"[object Null]": "Null",
			"[object Boolean]": "Boolean",
			"[object Number]": "Number",
			"[object String]": "String",
			"[object Object]": "Object",
			"[object Array]": "Array",
			"[object Function]": "Function",
			"[object Date]": "Date",
			"[object RegExp]": "RegExp",
			"[object Error]": "Error",
		}
		this.isUndefined = function(obj){  //是否是undefiend或未定义
			return classType[toString.call(obj)] === "Undefined";
		};
		this.isNull = function(obj){  //是否是null
			return classType[toString.call(obj)] === "Null";
		};
		this.isBoolean = function(obj){  //是否是true或false
			return classType[toString.call(obj)] === "Boolean";
		};
		this.isNumber = function(obj){  //是否是数字
			return classType[toString.call(obj)] === "Number";
		};
		this.isString = function(obj){  //是否是字符串
			return classType[toString.call(obj)] === "String";
		};

		this.isObject = function(obj){   //是否是对象
			return classType[toString.call(obj)] === "Object";
		};
		this.isArray = function(obj){  //是否是数组
			return classType[toString.call(obj)] === "Array";
		};
		this.isFunction = function(obj){  //是否是函数
			return classType[toString.call(obj)] === "Function";
		};
		this.isDate = function(obj){  //是否是Date
			return classType[toString.call(obj)] === "Date";
		};
		this.isRegExp = function(obj){  //是否是RegExp
			return classType[toString.call(obj)] === "RegExp";
		};
		this.isError = function(obj){  //是否是Error
			return classType[toString.call(obj)] === "Error";
		};

		this.isArrayLike = function(obj){
			return typeof obj.length == "number";
		};

		this.isWindow = function(obj){  //是否是window
			return obj != null && obj == obj.window;
		};
		this.isDocument = function(obj){  //是否是document
			return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
		};

		this.isDOMElement = function(obj){
			return !!(obj && typeof window !== 'undefined' &&
			(obj === window || obj.nodeType));
		};
		this.isXMLDoc = function(elem){  //是否是xml文档
			return elem.documentElement && !elem.body ||
				elem.tagName && elem.ownerDocument && !elem.ownerDocument.body;
		};

		this.clone = function(obj){    //深度克隆
			var buf;
			if(this.isArray(obj)){
				buf = [];
				var i = obj.length;
				while(i--){
					buf[i] = this.clone(obj[i]);
				}
				return buf;
			}else if(this.isObject(obj)){
				buf = {};
				for(var k in obj){
					buf[k] = this.clone(obj[k]);
				}
				return buf;
			}else{
				return obj;
			}
		};

		this.isObjectValueEqual = function(a,b){  //用来判断两个对象是否完全相等
			if(!this.isObject(a) || !isObject(b)){
				return false;
			}
			var aProps = Object.getOwnPropertyName(a);
			var bProps = Object.getOwnPropertyName(b);
			if(aProps.length !== bProps.length){return false;}
			for(var i=0,len=aProps.length; i<len; i++){
				var propName = aProps[i];
				if(a[propName] !== b[propName]){
					return false;
				}
			}
			return true;
		};
				
	};

	//数组
	var ArrObj = function(){   //和数组有关的对象
		this.unique = function(array){
			var n = [];
			for(var i=0,len=array.length; i<len; i++){
				if(n.indexOf(array[i]) === -1){
					n.push(array[i]);
				}
			}
			return n;
		};
		this.uniqueByProperty = function(array,property){  //对象数组根据某一属性过滤
			var result = [], isRepeated;
			for(var i=0,len=array.length; i<len; i++){
				isRepeated = false;
				for(var j=0, len1=result.length; j<len1; j++){
					if (array[i][property] == result[j][property]) {  
						if (array[i][property] == result[j][property]) { 
							isRepeated = true;
							break;
						}
					}
				}
				if(!isRepeated){
					result.push(array[i]);
				}
			}
			return result;
		};
		this.sortByProperty = function(array,property){  //对象数组按照某个属性大小排序
			function compare(pro){
				return function(a,b){
					return a[pro] - b[pro];
				}
			}
			var arr = array.sort(compare(property));
		};
	};
	
	var StrObj = function(){   //和字符串有关的对象
		this.padString = function(str, replaceChar, length){  //拉伸到某长度
			var str = ""+str;
			for(var i=str.length; i<length; i++){
				str = replaceChar+str;
			}
			return str;
		};
		this.findMaxTime = function(str){  //判断字符串中出现次数最多的字符,并统计次数
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
		};
		
	};
	
	var DateTimeObj = function(){   //和日期时间有关的对象
		
	};
	
	var DomObj = function(){   //和dom节点有关的对象
		this.getDomById = function(id){
			return document.getElementById(id);
		};
		this.hasClass = function(obj, cls){  //判断元素是否有此class
			return obj.className.match(new RegExp('(\\s|^)' + cls +'(\\s|$)'))
		};
		this.addClass = function(obj, cls){
			if(!this.hasClass(obj, cls)){
				obj.className += " " + cls;
			}
		};
		this.$ = function(param){   //获取dom节点
			if(typeof param != "string"){return null;}
			param = param.split(" ");
			var result = document;
			for(var i=0, len=param.length; i<len; i++){
				switch(param[i][0]){
					case ".":
						result = result.getElementsByClassName(param[i].substr(1));
						break;
					case "#":
						result = result.getElementById(param[i].substr(1));
						break;
					default:
						result = result.getElementsByTagName(param[i]);
						break;
				}
			}
			return result;
		};
	};
	
	var MathObj = function(){   //和计算有关的对象
		this.linearSearch = function(A, x){   //线性搜索
			for(var i=0,len=A.length; i<len; i++){
				if(A[i] === x){
					return i;
				}
			}
			return -1;
		};
		this.binarySearch = function(A, x){   //二分搜索
			var low = 0, high = A.length-1;
			while(low<=high){
				var mid = Math.floor((low+high)/2);  //下取整
				if(x === A[mid]){return mid;}
				if(x<A[mid]){
					high = mid - 1;
				}else{
					low = mid + 1;
				}
			}
			return -1;
		};
		this.bubbleSort = function(arr){
			var len = arr.length;
			for(var i=0; i<len; i++){
				for(var j=0; j<len-1-i; j++){
					if(arr[j] > arr[j+1]){  //相邻元素比较
						var temp = a[j+1];  //元素交换
						arr[j+1] = arr[j];
						arr[j] = temp;
					}
				}
			}
		};
	};

	var eventObj = function(){
		this.addHandler = function(element, type, handler){  //添加事件处理程序
			if(element.addEventListener){
				element.addEventListener(type, handler, false);
			}else if(element.attachEvent){
				element.attachEvent["on"+type, handler];
			}else{
				element["on"+type] = handler;
			}
		};
		this.getEvent = function(event){  //返回对event对象的引用
			return event ? event : window.event;
		};
		this.getTarget = function(event){  //返回事件的目标
			return event.target || event.srcElement;
		};
		this.preventDefault = function(event){  //取消事件的默认行为
			if(event.preventDefault){
				event.preventDefault();
			}else{
				event.returnValue = false;
			}
		};
		this.removeHandler = function(element, type, handler){  //移除事件处理程序
			if(element.removeEventListener){
				element.removeEventListener(type, handler, false);
			}else if(element.detachEvent){
				element.detachEvent("on"+type, handler);
			}else{
				element["on"+type] = null;
			}
		};
		this.stopPropagation = function(event){  //阻止事件流
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble = true;
			}
		};
	};
	
	LileiLib.typeObj = new TypeObj(); //和类型有关的对象
	LileiLib.arrObj = new ArrObj(); //和数组有关的对象
	LileiLib.strObj = new StrObj();   //和字符串有关的对象
	LileiLib.dateTimeObj = new DateTimeObj(); //和日期时间有关的对象
	LileiLib.domObj = new DomObj();  //和dom节点有关的对象
	LileiLib.mathObj = new MathObj();  //和计算有关的对象
	LileiLib.eventObj = new eventObj();  //和计算有关的对象
	
	window.LileiLib = LileiLib;
	
})();