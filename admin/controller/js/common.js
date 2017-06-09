$(".username").html(username);//write username

//删除操作
function deletelist(ajaxurl,selecter,data_name){
	$(".del_btn").click(function() {
	    _id = $(this).attr("id");
	    $(selecter).click(function() {
	        $.ajax({
	            type: "post",
	            url: ajaxurl,
	            data: {
	                roleid: _id
	            },
	            dataType: "json",
	            success: function(msg) {
	                console.log(msg);
	                if (msg.result === 1) {
	                    $('.tip').html("<span>" + msg.msg + "</span>").fadeIn(0).delay(800).fadeOut("slow",
	                    function() {
	                        $(".close-1-tip").trigger("click");
	                        setTimeout("refresh()", 800);
	                    });
	                } else if (msg.result === 0) {
	                    $('.tip').html("<span>" + msg.msg + "</span>").fadeIn(0).delay(1500).fadeOut("slow",
	                    function() {
	                        setTimeout("refresh()", 800);
	                    });
	                } else {
	                    $('.tip').html(msg.msg).fadeIn(0).delay(1000).fadeOut("slow");
	                }
	            }
	        });
	    });
	});
}