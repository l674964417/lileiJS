/****
	计算有关的对象
	
	Math对象方法：
		abs(x): 返回数的绝对值;
		max(x,y): 返回x和y中的最高值;
		min(x,y): 返回x和y中的最低值;
		ceil(x): 对数进行上舍入;
		floor(x): 对数进行下舍入;
		round(x): 把数四舍五入为最接近的整数;
		random(): 返回0——1之间的随机数;		
		sqrt(x): 返回数的平方根;
		
		sin(x): 返回数的正弦;		
		tan(x): 返回角的正切值;
		acos(x): 返回数的反余弦值;
		asin(x): 返回数的反正弦值;
		atan(x): 以介于-PI/2与PI/2弧度之间的数值来返回x的反正切值
		atan2(y,x): 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。
		cos(x): 返回数的余弦;
		
		exp(x): 返回e的指数;
		log(x): 返回数的自然对数(底为e);
		pow(x,y): 返回x的y次幂;
		
		toSource(): 返回该对象的源代码;
		valueOf(): 返回Math对象的原始值;	
****/

MYAPP.calculateObj = {};
//线性搜索,A为数组,x为要搜索的值
MYAPP.calculateObj.linearSearch = function(A,x){  
	for(var i=0; i<A.length; i++){
		if(A[i] == x){return i;}
	}
	return -1;
};

//二分搜索,A为已经按照升序排列的数组,x为要查询的元素
MYAPP.calculateObj.binarySearch = function(A,x){  
	var low = 0, high=A.length-1;
	while(low<=high){
		var mid = Math.floor((low+high)/2);  //下取整
		if(x == A[mid]){return mid;}
		if(x < A[mid]){
			high = mid-1;
		}else{
			low = mid+1;
		}
	}
	return -1;
};

//冒泡排序
MYAPP.calculateObj.bubbleSort = function(arr){  
	var len = arr.length;
	for(var i=0;i<len;i++){
		for(var j=0; j<len-1-i; j++){
			if(arr[j]>arr[j+1]){    //相邻元素对比
				var temp = a[j+1];  //元素交换
 				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
};





