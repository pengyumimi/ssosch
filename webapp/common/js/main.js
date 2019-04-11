//获取用户信息，如果没有登录需要登录
var localserId = JSON.parse(sessionStorage.getItem('userid'));
var localserType = JSON.parse(sessionStorage.getItem('usertype'));
if(!localserId){
    window.location.href = "login.html";
}
/*else if(localserType == 2){
    window.location.href = "index.html";
}else if(localserType == 3){
    window.location.href = "task.html";
}*/


//手机号格式验证
function yanz_phone(_val, selecter) {
    var phonereg = /^1[3|4|5|7|8][0-9]\d{8}$/;
    if (_val.length == 0) {
        selecter.siblings(".errortip").html("手机号不能为空").css("visibility", "visible").fadeIn(100);
        return false;
    } else if (!phonereg.test(_val)) {
        selecter.siblings(".errortip").html("手机号格式不正确").css("visibility", "visible").fadeIn(100);
        return false;
    } else if (_val.length != 11) {
        selecter.siblings(".errortip").html("手机号限定长度为11位").css("visibility", "visible").fadeIn(100);
        return false;
    } else {
        selecter.siblings(".errortip").css("visibility", "hidden");
        return true;
    }
}
//邮箱验证
function yanz_email(_val, selecter) {
    if(_val.length == 0) {
        selecter.siblings(".errortip").html("邮箱不能为空").css("visibility", "visible").fadeIn(100);
        return false;
    }else if(!_val.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)){
        selecter.siblings(".errortip").html("邮箱格式不正确").css("visibility", "visible").fadeIn(100);
        return false;
    }else{
        selecter.siblings(".errortip").css("visibility", "hidden");
        return true;
    }
}
// 验证必填项目和长度
function yanz_must(_val, selecter) {
    var maxlength = selecter.attr("maxlength");
    if(_val.length == 0){
        selecter.siblings('.errortip').html("此项为必填").css('visibility', 'visible').fadeIn(100);
        return false;
    }else if (_val.length > maxlength) {
        selecter.siblings('.errortip').html("输入长度应小于"+maxlength+"").css('visibility', 'visible').fadeIn(100);
        return false;
    } else {
        selecter.siblings('.errortip').css('visibility', 'hidden');
        return true;
    }
}

// 验证空
function yanz_null(_val, selecter) {
    var maxlength = selecter.attr("maxlength");
    if(_val == 0 || _val == null){
        selecter.siblings('.errortip').html("此项为必填").css('visibility', 'visible').fadeIn(100);
        return false;
    }else {
        selecter.siblings('.errortip').css('visibility', 'hidden');
        return true;
    }
}

// 验证手机号码
$("#phone").on('change', function (e) {
    var val = e.target.value;
    yanz_phone(val, $(this));
});
// 验证邮箱
$("#email").on('change', function (e) {
    var val = e.target.value;
    yanz_email(val, $(this));
});
// 验证必填项目和长度
$("#name,#company,#postion").on('change', function (e) {
    var val = e.target.value;
    yanz_must(val, $(this));
});

