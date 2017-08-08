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
                    _html = '<div class="caseitem"><h3>'+title+'</h3><ul id="imgitem'+listid+'" class="caselist"></ul></div>';
                    $(selecter).append(_html);
                    //console.log(_html);

                    for(var img in imgs_src){
                        var imglist = '<li class=""><img src="'+imgs_src[img]+'" proportion="16/9" data-toggle="modal" data-target=".avatar-modal" name="img" onclick="imgset(this)"><i class="fa fa-close" aria-hidden="true" onclick="removethis(this)"></i></li>';
                        //console.log(imglist+"<br>");
                        $("#imgitem"+listid+"").append(imglist);
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