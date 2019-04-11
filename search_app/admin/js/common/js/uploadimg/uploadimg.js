var imgSrc = []; //图片路径
var imgFile = []; //文件流
var imgName = []; //图片名字
var imgBase64 = []; //图片Base64数据
var thisObj = ''; //图片Base64数据
//选择图片
function imgUpload(obj) {
    thisObj = obj.inputId;
    // console.log(thisObj);
	var oInput = '#' + obj.inputId;
	var maxnum = obj.num;
	// 上传按钮
	$(oInput).on("change", function() {
            var fileImg = $(oInput)[0];
            var fileList = fileImg.files;
            var changeNum = fileList.length;
            var newImgSrc = [];
            var newImgBase64 = [];
            console.log(fileList.length);
            console.log(imgBase64.length);

			if(fileList.length > maxnum ){
				$('.tip').html("图片最多上传"+maxnum+"张").stop(true, false).fadeIn(0).delay(1000).fadeOut("slow");
				return false;
			}else{
				for(var i = 0; i < fileList.length; i++) {
					var imgSrcI = getObjectURL(fileList[i]);
					// console.log(imgSrcI);
					imgName.push(fileList[i].name);
					imgSrc.push(imgSrcI);
					newImgSrc.push(imgSrcI);
					//console.log(imgSrc);
					imgFile.push(fileList[i]);
					//console.log(fileList[i]);//获得file对象
					//先将图片进行base64位转换，然后倒序构建imgBase64数组，相当于异步执行then中的代码
					// console.log(fileList[i]);
					base64Data(fileList[i]).then(function(result){
						// console.log(imgBase64);
						imgBase64.push(result);
						newImgBase64.push(result);
					})
				}
			}

            setTimeout(function () {
				addNewContent($(oInput).parent(),newImgSrc,newImgBase64);
                uploadIMgs();
            }, 200);

        //uploadnow(obj);
	});
}

//图片展示
function addNewContent(obj,newImgSrc,newImgBase64) {
	// console.log(newImgBase64);
	for(var a = 0; a < newImgSrc.length; a++) {
		$(obj).before('<div class="imgContainer"><img title=' + imgName[a] + ' src=' + newImgSrc[a] + ' imgtype=' + imgFile[a].type + ' imgsize=' + imgFile[a].size + ' base64data=' + newImgBase64[a] + ' onclick="imgDisplay(this)"><p onclick="removeImg(this)" class="imgDelete">X</p></div>');
	}
}

//删除
function removeImg(_this) {
	var delindex = $(_this).parent().index();
	$(_this).parent().remove();
    imgBase64.splice(delindex, 1);
    // console.log(1);
    document.getElementById("upBox").reset()
    // console.log($("#"+thisObj).parents("form"));
    // $("#"+thisObj).parents("form")[0].reset();//这里清空表单，防止删除图片不能再次上传上次传过的图片
    // console.log(imgBase64);
}

//上传(将文件流数组传到后台)
function uploadIMgs() {
    // 添加图片的上传
    var imgData = [];
    var item = {
        "name":"",
        "size":"",
        "type":"",
        "base64Data":""
    };
    $("#imgBox .imgContainer").each(function (index) {
        item = {
            "name":$(this).children("img").attr("title"),
            "size":$(this).children("img").attr("imgsize"),
            "type":$(this).children("img").attr("imgtype"),
            "base64Data":$(this).children("img").attr("base64data")
        };
        imgData.push(item);
    });
    // console.log(imgData);

    $.ajax({
        type: "post",
        url: "/admin/controller/upload-base64img.php",
        dataType: "json",
        data: {'imgData':imgData},
        beforeSend: function () {
        },
        success: function (data) {
            // console.log("返回值");
            // console.log(data);
            $("#imgsrcs").val(data.src);
        },
        error: function () {
            $('.tip').html("上传失败,刷新重试").stop(true, false).fadeIn(0).delay(1000).fadeOut("slow");
        }
    });

}

//图片灯箱
function imgDisplay(obj) {
	var src = $(obj).attr("src");
	var imgHtml = '<div style="width: 100%;height: 100vh;overflow: auto;background: rgba(0,0,0,0.5);text-align: center;position: fixed;top: 0;left: 0;z-index: 1000;"><img src=' + src + ' style="margin-top: 100px;width: 70%;margin-bottom: 100px;"/><p style="font-size: 50px;position: fixed;top: 30px;right: 30px;color: white;cursor: pointer;" onclick="closePicture(this)">×</p></div>';
	$('body').append(imgHtml);
}
//关闭
function closePicture(obj) {
	$(obj).parent("div").remove();
}

//图片预览路径 blob
function getObjectURL(file) {
	var url = null;
	if(window.createObjectURL != undefined) { // basic
		url = window.createObjectURL(file);
	} else if(window.URL != undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file);
	} else if(window.webkitURL != undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file);
	}
	return url;
}

//file对象转base64格式
function base64Data(files){
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onload = function (e){
            //console.log(this.result);
            resolve(this.result)
        }
    })
}

