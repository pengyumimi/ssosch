$(".username").html(username);//write username
//user api
$.ajax({
	type:"post",
	url:"controller/user.php",
	data:{list:1},
	dataType: "json",
	success: function(data){
		//console.log(data);
		/*if (data) {
			for (k in data){
				$(".cat_id_radio").append('<span class="mr20" onclick="new_redio(this)"><label class="com-icon redio-btn w30" id="'+data[k].id+'"></label>'+data[k].notice_name+'</span>');
			};
		}else{
			$('.error').fadeIn(0).delay(1000).fadeOut("slow");
		}*/
	}
});

