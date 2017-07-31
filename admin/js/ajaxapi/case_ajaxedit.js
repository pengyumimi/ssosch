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
                    var title = data[key].title;
                    var txt = data[key].txt;
                    var listid = data[key].id;
                    var imgs_src = data[key].imgs_src;
                    var imgs_src = imgs_src.split(",");
                    _html = '<div class="caseitem"><h3>'+title+'</h3><ul id="'+listid+'" class="caselist"></ul></div>';
                    $(selecter).append(_html);
                    console.log(_html);

                    for(var img in imgs_src){
                        var imglist = '<li class=""><img src="'+imgs_src[img]+'" proportion="16/9" data-toggle="modal" data-target=".avatar-modal" name="img" onclick="imgset(this)"></li>';
                        console.log(imglist+"<br>");
                        $("#"+listid+"").append(imglist);

                    }


                    //var _html = '<div class="caseitem"><input name="id" type="hidden" value="'+data[key].id+'"><div class="name_item">产品主题</div><input name="title" class="form-control data_show" placeholder="产品主题" value="'+data[key].title+'"><div class="name_item"><p>图一</p><img class="adminimg_s imgs" src="'+data[key].img_src1+'" proportion="16/9" data-toggle="modal" data-target=".avatar-modal" name="img" onclick="imgset(this)"></div><div class="name_item"><p>图二</p><img class="adminimg_s imgs" src="'+data[key].img_src2+'" proportion="16/9" data-toggle="modal" data-target=".avatar-modal" name="img" onclick="imgset(this)"></div><div class="name_item"><p>图三</p><img class="adminimg_s imgs" src="'+data[key].img_src3+'" proportion="16/9" data-toggle="modal" data-target=".avatar-modal" name="img" onclick="imgset(this)"></div><div class="name_item"><p>图四</p><img class="adminimg_s imgs" src="'+data[key].img_src4+'" proportion="16/9" data-toggle="modal" data-target=".avatar-modal" name="img" onclick="imgset(this)"></div><div class="name_item"><p>图五</p><img class="adminimg_s imgs" src="'+data[key].img_src5+'" proportion="16/9" data-toggle="modal" data-target=".avatar-modal" name="img" onclick="imgset(this)"></div><div class="name_item" style="display:block">产品说明</div><textarea name="txt" class="form-control data_show" placeholder="产品说明" value="">'+data[key].txt+'</textarea><button type="submit" class="btn btn-primary" onclick="edit(this)">修改</button></div>';

                }
            }
        }
    });
};
products_list(".caseset","controller/case_list.php");

//编辑产品
function edit(_this){
    var selecter = $(_this).parents(".products_list");
    var _id = selecter.children("input[name=id]").val();
    var _title = selecter.children("input[name=title]").val();
	var _imgs1 = selecter.children().children(".imgs:eq(0)").attr("src");
	var _imgs2 = selecter.children().children(".imgs:eq(1)").attr("src");
	var _imgs3 = selecter.children().children(".imgs:eq(2)").attr("src");
	var _imgs4 = selecter.children().children(".imgs:eq(3)").attr("src");
	var _imgs5 = selecter.children().children(".imgs:eq(4)").attr("src");
    var _txt = selecter.children("textarea[name=txt]").val();
	alert(_imgs1);
    var data={ id:_id,title:_title,img_src1:_imgs1,img_src2:_imgs2,img_src3:_imgs3,img_src4:_imgs4,img_src5:_imgs5,txt:_txt };
    $.ajax({
        url: "controller/products_edit.php",
        data: data,
        type: "POST",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if(data.result == '1') {
                $('.tip').html("<span>" + data.msg + "</span>").fadeIn(0).delay(1500).fadeOut("slow",
                function() { setTimeout('products_list(".productset","controller/products_list.php");', 200);
                });
            }
        }
    });
};