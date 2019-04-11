	function imgset(_this){
		_thisimg = $(_this);
		proportion = $(_this).attr("proportion");//设置切图比例
		return proportion;
	};
	//选择图片时验证大小格式 
	$('#avatarInput').on('change', function(e) {
		var filemaxsize = 1024 * 3;//3M
		var target = $(e.target);
		var Size = target[0].files[0].size / 1024;
		if(Size > filemaxsize) {
			alert('图片过大，请重新选择!');
			$(".avatar-wrapper").empty();
			return false;
		}else if(!this.files[0].type.match(/image.*/)) {
			alert('请选择正确的图片!');
			return false;
		}else {
			var filename = document.querySelector("#avatar-name");
			var texts = document.querySelector("#avatarInput").value;
			var teststr = texts; //你这里的路径写错了
			testend = teststr.match(/[^\\]+\.[^\(]+/i); //直接完整文件名的
			filename.innerHTML = testend;
		}
	});
	//保存时按钮
	$(".avatar-save").on("click", function() {
			var img_lg = document.getElementById('imageHead');
			// 截图小的显示框内的内容
			html2canvas(img_lg, {
				allowTaint: true,
				taintTest: false,
				onrendered: function(canvas) {
					canvas.id = "mycanvas";
					//生成base64图片数据
					var dataUrl = canvas.toDataURL("image/jpeg");
					var newImg = document.createElement("img");
					newImg.src = dataUrl;
					imagesAjax(dataUrl);
				}
			});
	});

	//base64图片提交接口
	function imagesAjax(src) {
		$.ajax({
			url: "controller/upload-logo.php",
			data: {
				imgsrc:src
			},
			type: "POST",
			dataType: 'json',
			success: function(data) {
				console.log(data);
				if(data.result == '1') {
					$(_thisimg).attr('src',data.src);//数据库返回图片地址赋值到当前img
				}
			}
		});
	};	