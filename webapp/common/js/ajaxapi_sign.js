
var flag_phone = 0; //flag 表示手机号判断存在返回的结果值，1为有此手机号，0为没有手机号不可以提交
var flag_password = 0; //flagpass表示密码输入错误的返回值，1为正确，0为错误
//手机号格式验证
function yanz_phone(_val, selecter) {
    var phonereg = /^1[3|4|5|7|8][0-9]{9}$/;
    if (_val.length == 0) {
        selecter.siblings(".errortip").html("手机号不能为空").css("visibility", "visible").fadeOut(100).fadeIn(100);
        selecter.css("background", "#f8ebe9");
        flag_phone = 0;
        return false;
    } else if (_val.length != 11) {
        selecter.siblings(".errortip").html("手机号限定长度为11位").css("visibility", "visible").fadeOut(100).fadeIn(100);
        selecter.css("background", "#f8ebe9");
        flag_phone = 0;
        return false;
    } else if (!phonereg.test(_val)) {
        selecter.siblings(".errortip").html("手机号格式不正确").css("visibility", "visible").fadeOut(100).fadeIn(100);
        selecter.css("background", "#f8ebe9");
        flag_phone = 0;
        return false;
    }else {
        flag_phone = 1;
        selecter.siblings(".errortip").css("visibility", "hidden");
        selecter.css("background", "#f0f1f3");
    }
    return flag_phone;
};

//密码验证
function yanz_pass(_val, selecter) {
    if (_val.length == 0) {
        selecter.siblings(".errortip").html("密码不能为空").css("visibility", "visible").fadeOut(100).fadeIn(100);
        selecter.css("background", "#f8ebe9");
        flag_password = 0;
        return false;
    } else if (_val.length < 6 || _val.length > 16) {
        selecter.siblings(".errortip").html("密码长度为6-16位").css("visibility", "visible").fadeOut(100).fadeIn(100);
        selecter.css("background", "#f8ebe9");
        flag_password = 0;
        return false;
    } else {
        flag_password = 1;
        selecter.siblings(".errortip").css("visibility", "hidden");
        selecter.css("background", "#f0f1f3");
    }
    return flag_password;
};

//登录数据提交
function signin(url, pagedata, _this) {

    var datas = {
        "s_username":pagedata._username,
        "s_password":pagedata._password
    };
    $.ajax({
        type: "post",
        url: url,
        dataType: "json",
        data: datas,
        headers: {
            'Authorization': ''+pagedata._username+''
        },
        beforeSend: function () {
            $(_this).html("登录中..."); //显示loading
            $(_this).prop('disabled', true);
        },
        success: function (data) {
            console.log("返回值");
            if (data.length > 0) {
                data = data[0];
                console.log(data);
                $('.tip').html("登陆成功").stop(true, false).fadeIn(0).delay(1000).fadeOut("slow", function () {
                    sessionStorage.setItem('userid', data.id);
                    sessionStorage.setItem('username', data.username);
                    sessionStorage.setItem('usertype', data.type);
                    if(data.type == 2){
                        window.location.href = "index.html";
                    }else if(data.type == 3){
                        window.location.href = "task.html";
                    }else if(data.type == 4){
                        window.location.href = "index.html";
                    }
                    // window.location.href = "index.html";
                })
            } else {
                $('.tip').html(data.msg).stop(true, false).fadeIn(0).delay(1000).fadeOut("slow");
            }
            $(_this).html("登录"); //显示loading
            $(_this).prop('disabled', false);
        },
        error: function () {
            $('.tip').html("登录失败,刷新重试").stop(true, false).fadeIn(0).delay(1000).fadeOut("slow");
            $(_this).html("登录"); //显示loading
            $(_this).prop('disabled', false);

        }
    });
}