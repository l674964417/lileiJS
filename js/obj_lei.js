var objObj = function(){   //和类型有关的对象
	var toString = Object.prototype.toString;
	this.isObject = function(obj){
		return toString.call(obj) === "[object Object]";
	};
	this.keys = function(obj){  //检索obj拥有的非继承属性名称
		if(!this.isObject(obj)){return [];}
		var keys = [];
		for(var key in obj){
			if(obj.hasOwnProperty(key)){
				keys.push(key);
			}
		}
		return keys;
	};
	this.allKeys = function(obj){  //检索obj拥有的和继承的所有属性名称
		if(!this.isObject(obj)){return [];}
		var keys = [];
		for(var key in obj){
			keys.push(key);
		}
		return keys;
	};
	this.values = function(obj){  //返回obj所有的属性值
		var keys = this.keys(obj);
		var length = keys.length;
		var values = Array(length);
		for(var i=0; i<length; i++){
			values[i] = obj[keys[i]];
		}
	};
	this.pairs = function(obj){  //把一个对象转变为一个[key, value]形式的数组。
		var keys = this.keys(obj);
		var length = keys.length;
		var pairs = Array(length);
		for(var i=0; i<length; i++){
			pairs[i] = [keys[i], obj[keys[i]]];
		}
		return pairs;
	};
	this.invert = function(obj){ //返回副本,使其键（keys）和值（values）对换
		var result = {};
		var keys = this.keys(obj);
		for(var i=0, length=keys.length; i<length; i++){
			result[obj[keys[i]]] = keys[i];
		}
		return result;
	};
	
};