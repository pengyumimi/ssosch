var maxN = 5;
$(function () {
    var defaults = {
        fileType: ["jpg", "png", "bmp", "jpeg", "gif"],   // 上传文件的类型
        fileSize: 1024 * 1024 * 10                 // 上传文件的大小 10M
    };
    var changeObj;
    var newImgPostData = [];
    var item = {};

    /*点击图片的文本框 change 事件*/
    $(".file").change(function () {
        changeObj = this;
        var idFile = $(this).attr("id");
        var file = document.getElementById(idFile);
        var imgContainer = $(this).parents(".z_photo"); //存放图片的父亲元素
        var fileList = file.files; //获取的图片文件
        var imgArr = [];
        //遍历得到的图片文件
        var numUp = imgContainer.find(".up-section").length; //一次多选的图片数
        var totalNum = numUp + fileList.length;  //已经上传的总图片数

        if (fileList.length > maxN || totalNum > maxN) {
            alert("图片数不可以超过"+maxN+"个，请重新选择");  //一次选择上传超过5个 或者是已经上传和这次上传的到的总数也不可以超过5个
        } else if (numUp < maxN) {
            fileList = validateUp(fileList);
            // console.log(fileList);
            //构建 html 图片
            for (var i = 0; i < fileList.length; i++) {
                var imgUrl = window.URL.createObjectURL(fileList[i]);
                imgArr.push(imgUrl);
                var $section = $("<section class='up-section fl loading'>");
                imgContainer.prepend($section);
                var $img0 = $('<img class="close-upimg del'+i+'" onclick="removeImg(this,'+i+');">');
                $img0.attr("src", "imgupload/delate.png").appendTo($section);
                var $img = $("<img class='up-img up-opcity'>");
                $img.attr("src", imgArr[i]);
                $img.appendTo($section);
                var $p = $("<p class='img-name-p'>");
                $p.html(fileList[i].name).appendTo($section);
                var $input = $("<input id='taglocation' name='taglocation' value='' type='hidden'>");
                $input.appendTo($section);
                var $input2 = $("<input id='tags' name='tags' value='' type='hidden'/>");
                $input2.appendTo($section);
                // console.log(fileList[i]);
                // alert(22);
                buildData(fileList[i],i);
            }

            //异步上传
        }
        setTimeout(function () {
            $(changeObj).parents(".img-box").find(".up-section").removeClass("loading");
            $(changeObj).parents(".img-box").find(".up-img").removeClass("up-opcity");
        }, 450);
        numUp = imgContainer.find(".up-section").length;
        if (numUp >= maxN) {
            $(this).parent().hide();
        }
    });

    //构建数据
    function buildData(file,xuhao) {
        // console.log(file);
        base64Data(file).then(function (result) {
            setTimeout(function() {
                item = {
                    "name":file.name,
                    "size":file.size,
                    "type":file.type,
                    "base64Data": result
                };
                newImgPostData.push(item);
                // console.log(newImgPostData);
                uploadIMgs(item,xuhao);//上传
            }, 1);
        });

    }

    //上传(将文件流数组传到后台)
    function uploadIMgs(thisData,xuhao) {
        // console.log(thisData);
        // 添加图片的上传
        // $(changeObj).parents(".img-box").find(".imgsrcs").remove();
        // console.log(thisData);
        var dataitem = {
            "name":thisData.name,
            "base64Data":thisData.base64Data
        };
        //图片上传ajax
        $.ajax({
            type: "post",
            url: "imgupload/upload-base64img.php",
            dataType: "json",
            data: dataitem,
            beforeSend: function () {},
            success: function (data) {
                $(changeObj).parents(".img-box").prepend('<input type="hidden" class="imgsrcs imgsrcs'+xuhao+'" value='+data.src+'>');
            },
            error: function () {
                console.log("上传失败,刷新重试");
            }
        });

    };

    //图片校验
    function validateUp(files) {
        var arrFiles = [];//替换的文件数组
        for (var i = 0, file; file = files[i]; i++) {
            //获取文件上传的后缀名
            var newStr = file.name.split("").reverse().join("");
            if (newStr.split(".")[0] != null) {
                var type = newStr.split(".")[0].split("").reverse().join("");//文件名后缀
                // console.log(type + "===type===");
                if ($.inArray(type, defaults.fileType) > -1) {
                    // 类型符合，可以上传
                    if (file.size >= defaults.fileSize) {
                        //console.log(file.size);//文件大小
                        alert('您这个"' + file.name + '"文件太大');
                    } else {
                        // 在这里需要判断当前所有文件中
                        arrFiles.push(file);
                    }
                } else {
                    alert('您这个"' + file.name + '"上传类型不符合');
                }
            } else {
                alert('您这个"' + file.name + '"没有类型, 无法识别');
            }
        }
        return arrFiles;
    };

    //file对象转base64格式
    function base64Data(files){
        return new Promise(function(resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(files);
            reader.onload = function (e){
                // console.log(this.result);
                resolve(this.result)
            }
        })
    }

    //图片灯箱
    /*$(".closeimg").on("click",function(event){
        alert(333);
    })*/

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

});

function removeImg(_this,index_i) {
    // console.log(_this,index_i);
    var delParent = $(_this).parent();
    var delSrc = $(_this).parents(".img-box");
    var numUp = delParent.siblings().length;
    var imgsrc = $(delSrc).find(".imgsrcs"+index_i+"").val();
    // console.log(imgsrc);
    //图片删除ajax
    $.ajax({
        type: "post",
        url: "imgupload/upload-base64img.php",
        dataType: "json",
        data: {
            imgsrc : imgsrc,
            posttype: 2
        },
        beforeSend: function () {},
        success: function (data) {
            // console.log(data);
            //如果在限制张数以内，显示添加图片按钮
            if (numUp < maxN+1) {
                delParent.parent().find(".z_file").show();
            }
            // console.log(delParent);
            delParent.remove();
            $(delSrc).find(".imgsrcs"+index_i+"").remove();
        },
        error: function () {
            console.log("删除失败,刷新重试");
        }
    });
};