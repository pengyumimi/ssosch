//case列表渲染
function products_list(selecter,url){
    $.ajax({
        url: url,
        data: "",
        type: "POST",
        dataType: 'json',
        success: function(data) {
            //console.log(data);
            if(data) {
                $(selecter).html('');
                for(var key in data){
                    var title = data[key].title;
                    var txt = data[key].txt;
                    var listid = data[key].id;
                    var imgs_src = data[key].imgs_src;
                    var imgs_src = imgs_src.split(",");
                    _html = '<div class="caseitem"><h3 style="display:inline-block">'+title+'</h3><button class="btn btn-primary right" style="margin-top:20px" type="submit" id="saveBtn'+listid+'" onclick="saveBtn(this)">保存</button><ul id="imgitem'+listid+'" class="caselist"></ul></div>';
                    var addbimgBtnhtml = '<li onclick="addimg(this)" style="width:100px;" proportion="16/9" data-toggle="modal" data-target=".avatar-modal"><span class="icon-wi-add addimgBtn"></span></li>';//拼接添加单个图片按钮
                    $(selecter).append(_html);
                    //console.log(_html);
                    for(var img in imgs_src){
                        var imglist = '<li class=""><img src="'+imgs_src[img]+'" proportion="16/9" data-toggle="modal" data-target=".avatar-modal" name="img" onclick="imgset(this)"><i class="fa fa-close" aria-hidden="true" onclick="removethis(this)"></i></li>';
                        //console.log(imglist+"<br>");
                        $("#imgitem"+listid+"").append(imglist);

                    }
                    //判断列表个数，如果超过5个不出现添加符号
                    var imgsnum;
                    $("#imgitem1").children().each(function(){
                        imgsnum = $(this).index();
                        return imgsnum;
                    });
                    if(imgsnum < 4) {
                        $("#imgitem" + listid + "").append(addbimgBtnhtml);
                    }


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
            //console.log(data);
            if(data.result == '1') {
                $('.tip').html("<span>" + data.msg + "</span>").fadeIn(0).delay(1500).fadeOut("slow",
                function() { setTimeout('products_list(".productset","controller/products_list.php");', 200);
                });
            }
        }
    });
};

function delthisimg(_id,_index,_url){
    _id = _id.substring(7);//截取到真实id
	var data={delid:_id,index:_index}
	$.ajax({
        url: _url,
        data: data,
        type: "POST",
        dataType: 'json',
        success: function(data) {
            //console.log(data);
            if(data.result == '1') {
                var imgsrcs = data.msg[0].imgs_src;
                //console.log(typeof(imgsrcs));
                var result=imgsrcs.split(",");
                var imgarray=[];
                for(var i=0;i<result.length;i++){
                    imgarray[i] = result[i];//赋值到数组
                };
                imgarray.splice(_index,1);//删除数组中相应的项
                var imgsrcstr = imgarray.join(",");//新数组合并为字符串
                console.log(imgsrcstr);
                update(_id,imgsrcstr,"controller/case_del_update.php");//执行更新操作
                //$('.tip').html("<span>" + data.msg + "</span>").fadeIn(0).delay(1500).fadeOut("slow",
                //function() { setTimeout('products_list(".productset","controller/products_list.php");', 200);
                //});
            }
        }
    });
}

//执行更新操作
function update(_id,_imgs_src,_url){
    var data={delid:_id,imgs_src:_imgs_src};
    $.ajax({
        url: _url,
        data: data,
        type: "POST",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if(data.result == 1){
                products_list(".caseset","controller/case_list.php");
            }
        }
    });
}
//新增单个图片
function addimg(obj){
    var addimgitem = '<li class=""><img src="" proportion="16/9" data-toggle="modal" data-target=".avatar-modal" name="img" onclick="imgset(this)"><i class="fa fa-close" aria-hidden="true" onclick="removethis(this)"></i></li>';
    $(obj).before(addimgitem);
    imgset($(obj).prev().children('img'));//执行上传图片并返回图片路径


    // var Fn2 = function(){
    //     var imgsrc = $(obj).prev().children('img').attr("src");
    //     alert(imgsrc);
    // };
    // Fn2();

    // if(imgnum > 4){
    //     $('.tip').html("每组图片不能超过5张").stop(true,false).fadeIn(0).delay(1000).fadeOut("slow");
    // }else{
    //     $('.tip').html("执行添加图片操作").stop(true,false).fadeIn(0).delay(1000).fadeOut("slow");
    // }
}

//保存修改后的结果
function saveBtn(obj){
    var _id = $(obj).attr("id");
    _id = _id.substring(7);//截取到真实id
    var li_list = $(obj).next(".caselist").children("li");
    var str = "";
    for (var i = 0; i < li_list.length; i++) {
        var src = $(li_list[i]).children("img").attr("src");
        if(src){
            str += src + ",";
        }
    }
    //删除最后一个逗号
    if (li_list.length > 0) {
        str = str.substr(0, str.length - 1);
    }
    //执行保存操作，这里实质是更新操作
    var data={addid:_id,imgs_src:str};
    $.ajax({
        url: "controller/case_add_img.php",
        data: data,
        type: "POST",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            $('.tip').html(data.msg).stop(true,false).fadeIn(0).delay(1000).fadeOut("slow");
            if(data.result == 1){
                products_list(".caseset","controller/case_list.php");
            }
        }
    });
};


//删除当前图片
function removethis(obj){
    var itemid = $(obj).parents("ul").attr("id");
    var index = $(obj).parents("li").index();
    //alert(index);
    var msg = "您真的确定要删除吗？\n\n请确认！";
    if (confirm(msg)==true){
        delthisimg(itemid,index,"controller/case_del_imgs.php");
        return true;
    }else{
        return false;
    }

};