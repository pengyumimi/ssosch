$(".username").html(username);//write username

//删除操作

function deletelist(ajaxurl,selecter,data_name){
	    $(selecter).click(function() {
	        $.ajax({
	            type: "post",
	            url: ajaxurl,
	            data: {
	                delid: data_name
	            },
	            dataType: "json",
	            success: function(msg) {
	                console.log(msg);
	                if (msg.result === 1) {
                        $('.myModal').modal('hide');
                        hdplist();
	                    alert("成功删除");
	                } else if (msg.result === 0) {
	                    $('.tip').html("<span>" + msg.msg + "</span>").fadeIn(0).delay(1500).fadeOut("slow",
	                    function() {
	                        //setTimeout("refresh()", 800);
	                    });
	                } else {
	                    $('.tip').html(msg.msg).fadeIn(0).delay(1000).fadeOut("slow");
	                }
	            }
	        });
	    });
}

//取消操作
function btn_cancel(_this){
    $(_this).parents("tr").remove();
};