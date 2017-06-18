//产品列表渲染
function products_list(selecter,url){
    $.ajax({
        url: url,
        data: "",
        type: "POST",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if(data) {
                $(selecter).html('');
                for(var key in data){
                    var _html = '<div class="lxr"><input name="id" type="hidden" value="'+data[key].id+'"><div class="name_item">产品主题</div><input name="name" class="form-control data_show" placeholder="产品主题" value="'+data[key].title+'"><div class="name_item">图一</div><img class="adminimg_s imgs" src="'+data[key].img_src1+'" proportion="16/9" data-toggle="modal" data-target=".avatar-modal" name="img" onclick="imgset(this)"><div class="name_item">图二</div><input name="tel" class="form-control data_show" placeholder="图二" value="'+data[key].img_src2+'"><div class="name_item">PHONE</div><input name="phone" class="form-control data_show" placeholder="phone" value="'+data[key].img_src3+'"><div class="name_item">产品说明</div><textarea name="email" rows="10" class="form-control data_show" placeholder="产品说明" value="">'+data[key].txt+'</textarea><button type="submit" class="btn btn-primary" onclick="edit(this)">修改</button></div>';
                    $(selecter).append(_html);
                }
            }
        }
    });
};
products_list("#lxr1","controller/products_list.php");

//编辑联系人
function edit(_this){
    var _url = "controller/lxr_edit.php";
    var selecter = $(_this).parents(".lxr");
    var _id = selecter.children("input[name=id]").val();
    var _name = selecter.children("input[name=name]").val();
    var _job = selecter.children("input[name=job]").val();
    var _tel = selecter.children("input[name=tel]").val();
    var _phone = selecter.children("input[name=phone]").val();
    var _email = selecter.children("input[name=email]").val();
    var _qq = selecter.children("input[name=qq]").val();
    var data={ id:_id,name:_name,job:_job,tel:_tel,phone:_phone,email:_email,qq:_qq
    };
    $.ajax({
        url: _url,
        data: data,
        type: "POST",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if(data.result == '1') {
                $('.tip').html("<span>" + data.msg + "</span>").fadeIn(0).delay(1500).fadeOut("slow",
                function() { setTimeout('lxr_list("#lxr1","controller/lxr_list.php")', 200);
                });
            }
        }
    });
};

//商务合作渲染
function swhz_list(selecter,url){
    $.ajax({
        url: url,
        data: "",
        type: "POST",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if(data) {
                //$(selecter).html('');
                for(var key in data){
                    var _html = '<div class="hz"><input name="id" type="hidden" value="'+data[key].id+'"><input name="title" class="form-control data_show" placeholder="输入主题" value="'+data[key].title+'"><textarea class="form-control swhz" name="txt" rows="3" placeholder="输入主题内容">'+data[key].txt+'</textarea><button type="submit" class="btn btn-primary" onclick="edithz(this)">修改</button></div>';
                    $(selecter).append(_html);
                }
            }
        }
    });
};
swhz_list(".hzlist","controller/swhz_list.php");
//编辑商务合作
function edithz(_this){
    var _url = "controller/swhz_edit.php";
    var selecter = $(_this).parents(".hz");
    var _id = selecter.children("input[name=id]").val();
    var _title = selecter.children("input[name=title]").val();
    var _txt = selecter.children("textarea[name=txt]").val();
    var data={ id:_id,title:_title,txt:_txt };
    $.ajax({
        url: _url,
        data: data,
        type: "POST",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if(data.result == '1') {
                $('.tip').html("<span>" + data.msg + "</span>").fadeIn(0).delay(1500).fadeOut("slow",
                function() { setTimeout('lxr_list("#lxr1","controller/lxr_list.php")', 200);
                });
            }
        }
    });
};

//网站设置渲染
function web_set(selecter,url){
    $.ajax({
        url: url,
        data: "",
        type: "POST",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if(data) {
                //$(selecter).html('');
                for(var key in data){
                   var _html = '<div class="web_set"><input name="id" type="hidden" value="'+data[key].id+'"><div class="name_item">网站名称</div><input name="title" class="form-control data_show" placeholder="显示网站名称" value="'+data[key].title+'"><div class="name_item">网站描述</div><input name="description" class="form-control data_show" placeholder="网站描述" value="'+data[key].description+'"><div class="name_item">网站SEO关键字</div><input name="keywords" class="form-control data_show" placeholder="网站SEO关键字" value="'+data[key].keywords+'"><div class="name_item">公司地址</div><input name="address" class="form-control data_show" placeholder="网站SEO关键字" value="'+data[key].address+'"><div class="name_item">网站网址</div><input name="url" class="form-control data_show" placeholder="网站SEO关键字" value="'+data[key].url+'"><div class="name_item">TEL</div><input name="tel" class="form-control data_show" placeholder="tel" value="'+data[key].tel+'"><div class="name_item">PHONE</div><input name="phone" class="form-control data_show" placeholder="phone" value="'+data[key].phone+'"><div class="name_item">EMAIL</div><input name="email" class="form-control data_show" placeholder="邮箱" value="'+data[key].email+'"><div class="name_item">QQ</div><input name="qq" class="form-control data_show" placeholder="qq" value="'+data[key].qq+'"><button type="submit" class="btn btn-primary" onclick="editset(this)">修改</button></div>';
                    $(selecter).append(_html);
                }
            }
        }
    });
};
web_set(".websitset","controller/web_set.php");
//编辑网站设置
function editset(_this){
    var selecter = $(_this).parents(".web_set");
    var _id = selecter.children("input[name=id]").val();
    var _title = selecter.children("input[name=title]").val();
    var _description = selecter.children("input[name=description]").val();
    var _keywords = selecter.children("input[name=keywords]").val();
    var _address = selecter.children("input[name=address]").val();
    var _url = selecter.children("input[name=url]").val();
    var _tel = selecter.children("input[name=tel]").val();
    var _phone = selecter.children("input[name=phone]").val();
    var _email = selecter.children("input[name=email]").val();
    var _qq = selecter.children("input[name=qq]").val();
    var data={ id:_id,title:_title,description:_description,keywords:_keywords,address:_address,url:_url,tel:_tel,phone:_phone,email:_email,qq:_qq };
    $.ajax({
        url: "controller/web_edit.php",
        data: data,
        type: "POST",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if(data.result == '1') {
                $('.tip').html("<span>" + data.msg + "</span>").fadeIn(0).delay(1500).fadeOut("slow",
                function() { 
                    setTimeout('web_set(".websitset","controller/web_set.php");', 200);
                });
            }
        }
    });
};