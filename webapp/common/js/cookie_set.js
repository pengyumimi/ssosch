/* 
	cookies 操作封装 
	使用方式：
	cookie.set("uesr","sss",24);//设置为24天过期
	alert(cookie.get("uesr"));//获取cookie
    cookie.delete("user");
*/
var cookie = {
    set:function(key,val,time){//设置cookie方法
        var date=new Date(); //获取当前时间
        var expiresDays=time;  //将date设置为n天以后的时间
        //date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
        date.setTime(date.getTime()+expiresDays*1000); //格式化为cookie识别的时间
        document.cookie=key + "=" + val +";expires="+date.toGMTString();  //设置cookie
    },
    get:function(key){//获取cookie方法
        /*获取cookie参数*/
        var getCookie = document.cookie.replace(/[ ]/g,"");  //获取cookie，并且将获得的cookie格式化，去掉空格字符
        var arrCookie = getCookie.split(";")  //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
        var tips;  //声明变量tips
        for(var i=0;i<arrCookie.length;i++){   //使用for循环查找cookie中的tips变量
            var arr=arrCookie[i].split("=");   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
            if(key==arr[0]){  //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
                tips=arr[1];   //将cookie的值赋给变量tips
                break;   //终止for循环遍历
            };
        };
         return tips;
    },
    delete:function(key,val){ //删除cookie方法
        var date = new Date(); //获取当前时间;
        date.setTime(date.getTime()-100000); //将date设置为过去的时间
        document.cookie=key + "=" + val +";expires="+date.toGMTString();
        //document.cookie = key + "=v;expires=" +date.toGMTString();//设置cookie
        //document.cookie="accessKeyID=0; expires="+date.toGMTString();
        //alert(123);
    },
};

	//cookie单独取值
//	function get_cookie(Name) {
//		var search = Name + "="//查询检索的值
//		var returnvalue = "";//返回值
//		if (document.cookie.length > 0) {
//			sd = document.cookie.indexOf(search);
//			if (sd!= -1) {
//				sd += search.length;
//				end = document.cookie.indexOf(";", sd);
//				if (end == -1)
//				end = document.cookie.length;
//				//unescape() 函数可对通过 escape() 编码的字符串进行解码。
//				returnvalue=unescape(document.cookie.substring(sd, end))
//			}
//		} 
//		return returnvalue;//返回cookie值
//	}
//
//	//cookie使用方式：
//	function use_cookie(){
//		var accessKeyId = get_cookie("accessKeyID");
//		var accessSecurityKey = get_cookie("accessSecurityKey");
//		var dateval = get_cookie("dateval");
//		alert(accessKeyId);
//		alert(accessSecurityKey);
//		alert(dateval);
//	}