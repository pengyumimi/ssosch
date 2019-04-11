var maxN = 5;
$(function () {
    var defaults = {
        fileType: ["jpg", "png", "bmp", "jpeg"],   // 上传文件的类型
        fileSize: 1024 * 1024 * 10                  // 上传文件的大小 10M
    };

    /*点击图片的文本框*/
    $(".file").change(function () {
        var idFile = $(this).attr("id");
        var file = document.getElementById(idFile);
        var imgContainer = $(this).parents(".z_photo"); //存放图片的父亲元素
        var fileList = file.files; //获取的图片文件
        var input = $(this).parent();//文本框的父亲元素
        var imgArr = [];
        //遍历得到的图片文件
        var numUp = imgContainer.find(".up-section").length;
        var totalNum = numUp + fileList.length;  //总的数量

        if (fileList.length > maxN || totalNum > maxN) {
            alert("图片数不可以超过"+maxN+"个，请重新选择");  //一次选择上传超过5个 或者是已经上传和这次上传的到的总数也不可以超过5个
        } else if (numUp < maxN) {
            // console.log(fileList);
            fileList = validateUp(fileList);
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
                // console.log($img);
            }
        }
        setTimeout(function () {
            $(".up-section").removeClass("loading");
            $(".up-img").removeClass("up-opcity");
        }, 450);
        numUp = imgContainer.find(".up-section").length;
        if (numUp >= maxN) {
            $(this).parent().hide();
        }
    });

    //图片灯箱
    /*$(".closeimg").on("click",function(event){
        alert(333);
    })*/

    var newImgPostData = [];
    var item = {};
    var b64 = [];

    function validateUp(files) {
        var arrFiles = [];//替换的文件数组
        for (var i = 0, file; file = files[i]; i++) {
            // console.log(i);
            // console.log(file);
            item = {
                "name":file.name,
                "size":file.size,
                "type":file.type,
                "base64Data":''
            };
            newImgPostData.push(item);
            // console.log(item);
            base64Data(file).then(function (result) {
                setTimeout(function() {
                    b64.push(result);
                    // console.log(b64);
                    for(var j=0;j<b64.length;j++){
                        newImgPostData[j].base64Data = b64[j];
                    };
                    // console.log(newImgPostData);
                }, 1);
            });

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
        uploadIMgs(newImgPostData);//上传
        return arrFiles;
    };

    //上传(将文件流数组传到后台)
    function uploadIMgs(thisData) {
        // 添加图片的上传
        $(".imgsrcs").remove();
        setTimeout(function() {
            // console.log(thisData);
            for (var i = 0; i < thisData.length; i++) {
                var dataitem = {
                    "name":thisData[i].name,
                    "base64Data":thisData[i].base64Data
                }
                saveData(i);
                function saveData(i) {
                    //图片上传
                    $.ajax({
                        type: "post",
                        url: "imgupload/upload-base64img.php",
                        dataType: "json",
                        data: dataitem,
                        beforeSend: function () {
                        },
                        success: function (data) {
                            // console.log("图片上传返回值");
                            // console.log(data);
                            $(".img-box").prepend('<input type="hidden" id="imgsrcs'+i+'" class="imgsrcs" value='+data.src+'>')
                            // $(".imgsrcs").val(data.src);
                        },
                        error: function () {
                            console.log("上传失败,刷新重试");
                        }
                    });
                }
            }
        }, 800);

    };

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
                // console.log(this.result);
                resolve(this.result)
            }
        })
    }

});

function removeImg(_this,index_i) {
    delParent = $(_this).parent();
    var numUp = delParent.siblings().length;
    //如果在限制张数以内，显示添加图片按钮
    if (numUp < maxN+1) {
        delParent.parent().find(".z_file").show();
    }
    // console.log(delParent);
    delParent.remove();
    $("#imgsrcs"+index_i+"").remove();
};