var TypeObj = function(){   //和类型有关的对象
	//基本数据类型: Undefined, Null, Boolean(布尔值), Number(数值), String(字符串)
	//引用类型: Object(对象), Array(数组), Function(函数), Date, RegExp.
	var toString = Object.prototype.toString;
	var class2Type = {  //用赖判定对象
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
		return class2Type[toString.call(obj)] === "Undefined";
	};
	this.isNull = function(obj){  //是否是null
		return class2Type[toString.call(obj)] === "Null";
	};
	this.isBoolean = function(obj){  //是否是true或false
		return class2Type[toString.call(obj)] === "Boolean";
	};
	this.isNumber = function(obj){  //是否是数字
		return class2Type[toString.call(obj)] === "Number";
	};
	this.isString = function(obj){  //是否是字符串
		return class2Type[toString.call(obj)] === "String";
	};	
	
	this.isObject = function(obj){   //是否是对象
		return class2Type[toString.call(obj)] === "Object";
	};
	this.isArray = function(obj){  //是否是数组
		return class2Type[toString.call(obj)] === "Array";
	};		
	this.isFunction = function(obj){  //是否是函数
		return class2Type[toString.call(obj)] === "Function";
	};
	this.isDate = function(obj){  //是否是Date
		return class2Type[toString.call(obj)] === "Date";
	};
	this.isRegExp = function(obj){  //是否是RegExp
		return class2Type[toString.call(obj)] === "RegExp";
	};
	this.isError = function(obj){  //是否是Error
		return class2Type[toString.call(obj)] === "Error";
	};

	this.isArrayLike = function(obj){
		return typeof obj.length == "number";
	};

	this.isWindow = function(obj){  //是否是window
		return obj != null && obj == obj.window;
	};
	this.isDocument = function(obj){  //是否是document
		return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
	}

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