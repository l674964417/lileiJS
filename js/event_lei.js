/****
	event有关的对象
****/

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
}


