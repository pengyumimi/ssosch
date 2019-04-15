//幻灯片列表渲染
	function hdplist(){
		$.ajax({
			url: "admin/controller/hdp_list.php",
			data: "",
			type: "POST",
			dataType: 'json',
			success: function(data) {
				console.log(data);
				if(data) {
					$(".s_pic").html('');
					$(".bigpic").html('');
					for(var key in data){
                        _html = '<li><a value="'+data[key].id+'" href="'+data[key].link+'"><img class="b_img" src="'+data[key].img_src+'" alt=""/></a></li>';
                        _htmlslt = '<li><a href="javascript:void(0);"><img class="s_img intro_img" src="'+data[key].img_src+'"/></a></li>';
					   $(".s_pic").append(_htmlslt);
					   $(".bigpic").append(_html);
                        hdpjs();
                        autoplay();
                        new autoplay()._click();
					}
				}
			}
		});
	};
	

	//首页产品列表渲染
	function indexpro_list(){
		$.ajax({
			url: "admin/controller/indexpro_list.php",
			data: "",
			type: "POST",
			dataType: 'json',
			success: function(data) {
				console.log(data);
				if(data) {
					$(".indexPimg").html('');
          _html1 = '<div class="indexPp"><a href="products.html?id=0"><img src="'+data[0].img_src+'"/><h3>'+data[0].title+'</h3</a></div>';
          _html2 = '<div class="indexPp"><a href="products.html?id=3"><img src="'+data[1].img_src+'"/><h3>'+data[1].title+'</h3</a></div>';
          _html3 = '<div class="indexPp"><a href="products.html?id=2"><img src="'+data[2].img_src+'"/><h3>'+data[2].title+'</h3</a></div>';
          _html4 = '<div class="indexPp"><a href="products.html?id=1"><img src="'+data[3].img_src+'"/><h3>'+data[3].title+'</h3</a></div>';
          _html5 = '<div class="indexPp"><a href="products.html?id=4"><img src="'+data[4].img_src+'"/><h3>'+data[4].title+'</h3</a></div>';
          $(".Pimg1").append(_html1);
          $(".Pimg1").append(_html2);
          $(".Pimg2").append(_html3);
          $(".Pimg2").append(_html4);
          $(".Pimg2").append(_html5);
          //for(var key in data){
           //             _html = '<div class="indexPp"><a href="'+data[key].link+'"><img src="'+data[key].img_src+'"/><h3>'+data[key].title+'</h3</a></div>'
					//	//_html = '<tr><td style=" text-align:center"><input class="vid" type="hidden" value="'+data[key].id+'"/><input class="form-control short t_center inline_block" type="text" value="'+data[key].paixu+'" name="paixu"/></td><td><img class="adminimg_s imgs" src="'+data[key].img_src+'" proportion="16/9" data-toggle="modal" data-target=".avatar-modal" name="img" onclick="imgset(this)"></td><td><input class="form-control inline_block" type="text" value="'+data[key].title+'" name="title"/></td><td><button type="submit" class="btn btn-primary" onclick="saveeditindexpro(this)">修改</button></td></tr>';
					//	$(".indexPimg").append(_html);
					//}
				}
			}
		});
	};
indexpro_list();

//合作伙伴
function hzhb_list(){
    $.ajax({
        url: "admin/controller/hzhb_list.php",
        data: "",
        type: "POST",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if(data) {
                $(".links").html('');
                for (var key in data){
                    var _html = '<a href="'+data[key].link+'"><img title="'+data[key].title+'" src="'+data[key].img_src+'"/></a>';
                    $(".links").append(_html);
                };
            }
        }
    });
};
hzhb_list();

//友情链接
function yqlj_list(){
    $.ajax({
        url: "admin/controller/yqlj_list.php",
        data: "",
        type: "POST",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if(data) {
                $(".yqlinks").html('');
                for (var key in data){
                    var _html = '<a href="'+data[key].link+'"><img title="'+data[key].title+'" src="'+data[key].img_src+'"/><span>'+data[key].title+'</span></a>';
                    $(".yqlinks").append(_html);
                };
            }
        }
    });
};
yqlj_list();

//联系人
function lxr_list(){
    $.ajax({
        url: "admin/controller/lxr_list.php",
        data: "",
        type: "POST",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if(data) {
                $(".foot_text ul").html('');
                for (var key in data){
                    var _html = '<li>'+data[key].job+'：'+data[key].name+'，tel：'+data[key].tel+'</br>phone：'+data[key].phone+' </br>邮箱：'+data[key].email+' </br>QQ:'+data[key].qq+' </li>';
                    $(".foot_text ul").append(_html);
                };
            }
        }
    });
};
lxr_list();

//网站信息设置
function webset(){
    $.ajax({
        url: "admin/controller/webset.php",
        data: "",
        type: "POST",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if(data) {
				for (var key in data){
					document.title=data[key].title;
					document.keywords=data[key].keywords;
					document.description=data[key].description;
                    $(".ajax_address").html(data[key].address);
                    $(".ajax_tel").html(data[key].tel);
                    $(".ajax_email").html(data[key].email);
                    $(".ajax_url").html(data[key].url);
				};
            }
        }
    });
};
webset();

//媒体采访和商务合作
function swhz(){
    $.ajax({
        url: "admin/controller/swhz_edit.php",
        data: "",
        type: "POST",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if(data) {
				for (var key in data){
                    $(".about_items .item_1 p").html(data[key].txt);
				};
            }
        }
    });
};
//swhz();


//show case
function case_list(){
    $.ajax({
        url: "admin/controller/case_list.php",
        data: "",
        type: "POST",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if(data) {
                $(".case_imgs").html('');
                for(var key in data){
                    var title = data[key].title;
                    var txt = data[key].txt;
                    var listid = data[key].id;
                    var imgs_src = data[key].imgs_src;
                    var imgs_src = imgs_src.split(",");
                    _html = '<div class="row m_bottom_30" id="imgitem'+listid+'"><div class="col-md-12"><ul class="case_list"></ul></div></div>';
                    $(".case_imgs").append(_html);
                    //console.log(_html);

                    for(var img in imgs_src){
                        var imglist = '<li class="col-p20"><img class="thumbnail img-responsive" src="'+imgs_src[img]+'"/></li>';
                        //console.log(imglist+"<br>");
                        $("#imgitem"+listid+"").find(".case_list").append(imglist);
                    }
                }
            }
        }
    });
};


	//编辑幻灯片保存
//	function saveedithdp(_this){
//		var selecter = $(_this).parents("tr");
//		var _id = selecter.find(".vid").val();
//		var _paixu = selecter.find("input[name=paixu]").val();
//		var _img = selecter.find("img[name=img]").attr("src");
//		var _link = selecter.find("input[name=link]").val();
//		data={
//			vid:_id,paixu:_paixu,img_src:_img,link:_link
//		};
//		$.ajax({
//			url: "controller/hdp_edit.php",
//			data: data,
//			type: "POST",
//			dataType: 'json',
//			success: function(data) {
//				console.log(data);
//				if(data.result == '1') {
//					$('.tip').html("<span>" + data.msg + "</span>").fadeIn(0).delay(1500).fadeOut("slow",
//					function() {
//						setTimeout("hdplist()", 200);
//					});
//				}
//			}
//		});
//	};
//	//新增幻灯片
//	$("#addhd_btn").click(function(){
//		html = '<tr><td style="text-align:center"><input class="form-control short t_center inline_block" type="text" value="" name="paixu"/></td><td><img class="adminimg_s imgs" src="../img/img.jpg" proportion="16/9" data-toggle="modal" data-target=".avatar-modal" name="img" onclick="imgset(this)"></td><td><input class="form-control inline_block" type="text" value="" name="link"/></td><td><button type="submit" class="btn btn-primary" onclick="savenewhdp(this)">保存</button><button type="button" class="btn btn-default" onclick="btn_cancel(this)">取消</button></td></tr>';
//		$(this).parents(".panel").find("tbody").append(html);
//	});
//	//保存幻灯片
//	function savenewhdp(_this){
//		var _this = $(_this);
//		var paixu = _this.parents("tr").find("input[name='paixu']").val();
//		var _link = _this.parents("tr").find("input[name='link']").val();
//		var img_src = _this.parents("tr").find("img[name='img']").attr("src");
//		$.ajax({
//			url: "controller/hdp_add.php",
//			data: {
//				"paixu":paixu,"link":_link,"img_src":img_src
//			},
//			type: "POST",
//			dataType: 'json',
//			success: function(data) {
//				console.log(data);
//				if(data.result == '1') {
//					$('.tip').html("<span>" + data.msg + "</span>").fadeIn(0).delay(1500).fadeOut("slow",
//					function() {
//						setTimeout("hdplist()", 200);
//					});
//				}else{
//					alert(data.msg);
//				}
//			}
//		});
//	};
//	//幻灯删除
//	function goid(_this){
//		var delid = $(_this).attr("id");
//		deletelista("controller/hdp_del.php",".del_ok",delid);
//	};
//

//	indexpro_list();
//	//编辑首页产品
//	function saveeditindexpro(_this){
//		var selecter = $(_this).parents("tr");
//		var _id = selecter.find(".vid").val();
//		var _paixu = selecter.find("input[name=paixu]").val();
//		var _img = selecter.find("img[name=img]").attr("src");
//		var _title = selecter.find("input[name=title]").val();
//		data={
//			vid:_id,paixu:_paixu,img_src:_img,title:_title
//		};
//		$.ajax({
//			url: "controller/indexpro_edit.php",
//			data: data,
//			type: "POST",
//			dataType: 'json',
//			success: function(data) {
//				console.log(data);
//				if(data.result == '1') {
//					$('.tip').html("<span>" + data.msg + "</span>").fadeIn(0).delay(1500).fadeOut("slow",
//					function() {
//						setTimeout("indexpro_list()", 200);
//					});
//				}
//			}
//		});
//	};
//	
//	//新增合作伙伴
//	$("#addhzhb_btn").click(function(){
//		html = '<tr><td style="text-align:center"><input class="form-control short t_center inline_block" type="text" value="" name="paixu"/></td><td><img class="adminimg_s imgs" src="../img/img.jpg" proportion="16/9" data-toggle="modal" data-target=".avatar-modal" name="img" onclick="imgset(this)"></td><td><input class="form-control inline_block" type="text" value="" name="title"/></td><td><input class="form-control inline_block" type="text" value="" name="link"/></td><td><button type="submit" class="btn btn-primary" onclick="savenewhzhb(this)">保存</button><button type="button" class="btn btn-default" onclick="btn_cancel(this)">取消</button></td></tr>';
//		$(this).parents(".panel").find("tbody").append(html);
//	});
//	//保存合作伙伴
//	function savenewhzhb(_this){
//		var _this = $(_this);
//		var paixu = _this.parents("tr").find("input[name='paixu']").val();
//		var _link = _this.parents("tr").find("input[name='link']").val();
//		var _title = _this.parents("tr").find("input[name=title]").val();
//		var img_src = _this.parents("tr").find("img[name='img']").attr("src");
//		$.ajax({
//			url: "controller/hzhb_add.php",
//			data: {
//				"paixu":paixu,"link":_link,"img_src":img_src,"title":_title
//			},
//			type: "POST",
//			dataType: 'json',
//			success: function(data) {
//				console.log(data);
//				if(data.result == '1') {
//					$('.tip').html("<span>" + data.msg + "</span>").fadeIn(0).delay(1500).fadeOut("slow",
//					function() {
//						setTimeout("hzhb_list()", 200);
//					});
//				}else{
//					alert(data.msg);
//				}
//			}
//		});
//	};
//	//合作伙伴列表渲染
//	function hzhb_list(){
//		$.ajax({
//			url: "controller/hzhb_list.php",
//			data: "",
//			type: "POST",
//			dataType: 'json',
//			success: function(data) {
//				console.log(data);
//				if(data) {
//					$(".hzhb_list").html('');
//					for(var key in data){
//						_html = '<tr><td style=" text-align:center"><input class="vid" type="hidden" value="'+data[key].id+'"/><input class="form-control short t_center inline_block" type="text" value="'+data[key].paixu+'" name="paixu"/></td><td><img class="adminimg_s imgs" src="'+data[key].img_src+'" proportion="16/9" data-toggle="modal" data-target=".avatar-modal" name="img" onclick="imgset(this)"></td><td><input class="form-control inline_block" type="text" value="'+data[key].title+'" name="title"/></td><td><input class="form-control inline_block" type="text" value="'+data[key].link+'" name="link"/></td><td><button type="submit" class="btn btn-primary" onclick="saveedithzhb(this)">修改</button><button type="button" class="btn btn-default" id="'+data[key].id+'" data-toggle="modal" data-target=".myModal" onclick="goid_hzhb(this);">删除</button></td></tr>';
//						$(".hzhb_list").append(_html);
//					}
//				}
//			}
//		});
//	};
//	hzhb_list();
//	//编辑合作伙伴保存
//	function saveedithzhb(_this){
//		var selecter = $(_this).parents("tr");
//		var _id = selecter.find(".vid").val();
//		var _paixu = selecter.find("input[name=paixu]").val();
//		var _title = selecter.find("input[name=title]").val();
//		var _img = selecter.find("img[name=img]").attr("src");
//		var _link = selecter.find("input[name=link]").val();
//		data={
//			vid:_id,paixu:_paixu,title:_title,img_src:_img,link:_link
//		};
//		$.ajax({
//			url: "controller/hzhb_edit.php",
//			data: data,
//			type: "POST",
//			dataType: 'json',
//			success: function(data) {
//				console.log(data);
//				if(data.result == '1') {
//					$('.tip').html("<span>" + data.msg + "</span>").fadeIn(0).delay(1500).fadeOut("slow",
//					function() {
//						setTimeout("hdplist()", 200);
//					});
//				}
//			}
//		});
//	};
//	
//	//合作伙伴删除
//	function goid_hzhb(_this){
//		var delid = $(_this).attr("id");
//		deletelista("controller/hzhb_del.php",".del_ok",delid);
//	};
//	
//	 //新增友情链接==================
//	$("#addyqlj_btn").click(function(){
//		html = '<tr><td style="text-align:center"><input class="form-control short t_center inline_block" type="text" value="" name="paixu"/></td><td><img class="adminimg_s imgs" src="../img/img.jpg" proportion="16/9" data-toggle="modal" data-target=".avatar-modal" name="img" onclick="imgset(this)"></td><td><input class="form-control inline_block" type="text" value="" name="title"/></td><td><input class="form-control inline_block" type="text" value="" name="link"/></td><td><button type="submit" class="btn btn-primary" onclick="savenewyqlj(this)">保存</button><button type="button" class="btn btn-default" onclick="btn_cancel(this)">取消</button></td></tr>';
//		$(this).parents(".panel").find("tbody").append(html);
//	});
//	//保存友情链接
//	function savenewyqlj(_this){
//		var _this = $(_this);
//		var paixu = _this.parents("tr").find("input[name='paixu']").val();
//		var _link = _this.parents("tr").find("input[name='link']").val();
//		var _title = _this.parents("tr").find("input[name=title]").val();
//		var img_src = _this.parents("tr").find("img[name='img']").attr("src");
//		$.ajax({
//			url: "controller/yqlj_add.php",
//			data: {
//				"paixu":paixu,"link":_link,"img_src":img_src,"title":_title
//			},
//			type: "POST",
//			dataType: 'json',
//			success: function(data) {
//				console.log(data);
//				if(data.result == '1') {
//					$('.tip').html("<span>" + data.msg + "</span>").fadeIn(0).delay(1500).fadeOut("slow",
//					function() {
//						setTimeout("yqlj_list()", 200);
//					});
//				}else{
//					alert(data.msg);
//				}
//			}
//		});
//	};
//	//友情链接列表渲染
//	function yqlj_list(){
//		$.ajax({
//			url: "controller/yqlj_list.php",
//			data: "",
//			type: "POST",
//			dataType: 'json',
//			success: function(data) {
//				console.log(data);
//				if(data) {
//					$(".yqlj_list").html('');
//					for(var key in data){
//						_html = '<tr><td style=" text-align:center"><input class="vid" type="hidden" value="'+data[key].id+'"/><input class="form-control short t_center inline_block" type="text" value="'+data[key].paixu+'" name="paixu"/></td><td><img class="adminimg_s imgs" src="'+data[key].img_src+'" proportion="16/9" data-toggle="modal" data-target=".avatar-modal" name="img" onclick="imgset(this)"></td><td><input class="form-control inline_block" type="text" value="'+data[key].title+'" name="title"/></td><td><input class="form-control inline_block" type="text" value="'+data[key].link+'" name="link"/></td><td><button type="submit" class="btn btn-primary" onclick="saveedityqlj(this)">修改</button><button type="button" class="btn btn-default" id="'+data[key].id+'" data-toggle="modal" data-target=".myModal" onclick="goid_yqlj(this);">删除</button></td></tr>';
//						$(".yqlj_list").append(_html);
//					}
//				}
//			}
//		});
//	};
//	yqlj_list();
//	//编辑友情链接保存
//	function saveedityqlj(_this){
//		var selecter = $(_this).parents("tr");
//		var _id = selecter.find(".vid").val();
//		var _paixu = selecter.find("input[name=paixu]").val();
//		var _title = selecter.find("input[name=title]").val();
//		var _img = selecter.find("img[name=img]").attr("src");
//		var _link = selecter.find("input[name=link]").val();
//		data={
//			vid:_id,paixu:_paixu,title:_title,img_src:_img,link:_link
//		};
//		$.ajax({
//			url: "controller/yqlj_edit.php",
//			data: data,
//			type: "POST",
//			dataType: 'json',
//			success: function(data) {
//				console.log(data);
//				if(data.result == '1') {
//					$('.tip').html("<span>" + data.msg + "</span>").fadeIn(0).delay(1500).fadeOut("slow",
//					function() {
//						setTimeout("hdplist()", 200);
//					});
//				}
//			}
//		});
//	};
//	
//	//友情链接删除
//	function goid_yqlj(_this){
//		var delid = $(_this).attr("id");
//		deletelista("controller/yqlj_del.php",".del_ok",delid);
//	};
