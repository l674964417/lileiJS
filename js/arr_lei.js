/****
	数组有关的对象
	(1).数组元素添加: push(), unshift(), splice(insertPos,0,[]);
	(2).数组元素的删除: pop(),shift(),splice(deletePos,deleteCount);
	(3).数组的截取和合并: 
		slice(start,[end]) 以数组形式返回数组的一部分
		concat(); 将多个数组连接为一个数组
	(4).数组元素的排序：
		reverse(): 反转元素，
		sort(): 对数组元素排序。
	(5).数组元素的字符串化：
		join(): 返回字符串，这个字符串将数组的每一个元素连接在一起。
		toLocalString,toString,valueOf: 可以看作是join的特殊用法。
****/






MYAPP.arrObj = {};

//数组去重
//最简单的去重法: 遍历数组,值不再心数组就加入该新数组中
MYAPP.arrObj.unique1 = function(array){
	var n = [];  //一个新的临时数组
	for(var i=0; i<array.length; i++){
		if(n.indexOf(array[i]) == -1){
			n.push(array[i]);
		}
	}
	return n;
}
MYAPP.arrObj.unique2 = function(array){
	var n = {}, r=[]; //n为hash表，r为临时数组
	for(var i=0; i<array.length; i++){
		if(!n[array[i]]){  //如果hash表中没有当前项
			n[array[i]] = true;  //存入hash表
			r.push(array[i]);  //把当前数组的当前项push到临时数组里面
		} 
	}
	return r;
}
MYAPP.arrObj.unique3 = function(array){
	var n = [array[0]]; //结果数组
    for(var i = 1; i < array.length; i++) //从第二项开始遍历
    {
        //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
        //那么表示第i项是重复的，忽略掉。否则存入结果数组
        if (array.indexOf(array[i]) == i) n.push(array[i]);
    }
    return n;
}





Array.prototype.unique1 = function(){
	var n = [];
	for(var i=0; i<this.length; i++){
		if(n.indexOf(this[i]) == -1){
			n.push(this[i]);
		}
	}
	return n;
}

Array.prototype.unique2 = function(){
	var n = {},
		r = []; //n为hash表, r为临时数组
	for(var i=0; i<this.length; i++){  //遍历当前数组
		if(!n[this[i]]){  //如果hash表中没有当前项
			n[this[i]] = true;  //存入hash表
			r.push(this[i]);  //把当前数组的当前项push到临时数组里面
		}
	}
	return r;
}

