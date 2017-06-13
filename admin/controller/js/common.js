$(".username").html(username);//write username

//删除操作

function deletelista(ajaxurl,selecter,data_name){
	    $(selecter).click(function() {
	        $.ajax({
	            type: "post",
	            url: ajaxurl,
	            data: {
	                delid: data_name
	            },
	            dataType: "json",
	            success: function(data) {
	                console.log(data);
	                if (data.result == 1) {
                        $('.myModal').modal('hide');
                        hdplist();//重新渲染列表
                        $('.tip').html(data.msg).fadeIn(0).delay(300).fadeOut("slow");
                    } else if (data.result == 0) {
	                    $('.tip').html("<span>" + data.msg + "</span>").fadeIn(0).delay(1500).fadeOut("slow",
	                    function() {
	                        //setTimeout("refresh()", 800);
	                    });
	                } else {
	                    $('.tip').html(data.msg).fadeIn(0).delay(1000).fadeOut("slow");
	                }
	            }
	        });
	    });
}

//取消操作
function btn_cancel(_this){
    $(_this).parents("tr").remove();
};