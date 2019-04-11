<?php
//获取session信息
//ob_start();
session_start();
/*
if (isset($_SESSION['user']) && !empty($_SESSION['user'])) {
    echo "登录成功：".$_SESSION['user'];
}else{
    echo "你还没有登录，请登录";
}*/
//setrawcookie("name",$_SESSION['user']);//把服务器中session的值赋值到cookie以便让js调取，使用setrawcookie()函数来代替，它是在设置cookie值的时候没有编码的，所以在设置cookie的时候也不用先用escape函数编码，这时JS也能直接读取cookie的值
?>
<!-- header -->
<script src="js/sendsms.js"></script>
	<div class="header">
			<div class="header-top">
				<div class="container">
					<div class="head-left">
						<ul class="number">
							<li><span><i class="phone"> </i>010-56258262</span></li>
							<li><a href="mailto:swhz@syjzw88.com"><i class="mail"> </i>swhz@syjzw88.com</a></li>	
								<div class="clearfix"> </div>						
						</ul>
					</div>
					<!--<div class="head-right">
						<ul>
							<li><a href="#"><i class="fb"> </i></a></li>
							<li><a href="#"><i class="twt"> </i></a></li>	
							<li><a href="#"><i class="ttt"> </i></a></li>	
							<li><a href="#"><i class="ve"> </i></a></li>	
							<li><a href="#"><i class="in"> </i></a></li>	
							<li><a href="#"><i class="dib"> </i></a></li>	
							<li><a href="#"><i class="fli"> </i></a></li>	
							<li><a href="#"><i class="rss"> </i></a></li>	
							<div class="clearfix"> </div>						
						</ul>
					</div>-->
						<div class="clearfix"> </div>	
				</div>
			</div>
			<div class="header-bottom">
				<div class="container">
					<div class="logo">
						<a href="index.php"><img src="images/logo.png" class="img-responsive" alt="" style="width:100%;"></a>
					</div> 
					<div class="head-nav">
						<span class="menu"> </span>
							<ul class="cl-effect-3">
								<li><a class="index" href="index.php">首页</a></li>
								<li><a class="list_rck" href="list_rck.php">人才库</a></li>
								<li><a class="list_zjz" href="list_zjz.php">找兼职 </a></li>
								<li><a class="about" href="about.php">关于我们</a></li>
								<div class="clearfix"> </div>
							</ul>
								<!-- script-for-nav -->
							<script>
								$( "span.menu" ).click(function() {
								  $( ".head-nav ul" ).slideToggle(300, function() {
									// Animation complete.
								  });
								});
								$(".cl-effect-3 li").click(function(){
									$(this).children("a").addClass("nav_active").siblings(".cl-effect-3 li a").removeClass("nav_active");
								});
							</script>
						<!-- script-for-nav --> 
					</div>
					<div class="header-right1">
						<li class="login_but"><a href="#">登录</a></li>
						<li class="reg_but"><a href="#">注册</a></li>
						<div id="userlogin" style="display:none">
							<div class="userinfo">
								<div class="welcome">
									欢迎您:<strong></strong>
									<a href="logout.php" style="margin-left:10px;padding:2px 6px;background:#666;color:#fff;">注销</a>
								</div>
							</div>
						</div>
					</div>
					<div class="clearfix"> </div>
				</div>
			</div>
	</div>


	<!--登录-->
<div class="dialog_login">
	<div class="login_box">
		<h1>登录</h1>
		<a class="close" href="#" id="login_but">关闭</a> 
		<input type="text" name="phone" placeholder="请填写您的手机号" required data-rule-mobile="true" data-msg-required="请输入手机号" data-msg-mobile="请输入正确格式"/>  
		<input type="password" name="password" placeholder="请填写您的密码" required data-msg-required="登录密码不能为空"/>  
		<input id="login_ajax" type="submit" name="submit" value="登陆" />
	</div>
</div>

<div class="dialog_reg">
	<div class="reg_box reg_1">
		<h1><span id="title_tab"></span>注册</h1>
		<a class="close_reg close" href="#">关闭</a>

			<label class="chose">选择您的身份<i value="1" name="reg1_btn" class="active">摄影师</i><i value="2" name="reg1_btn">化妆师</i><i value="3" name="reg2_btn">个人</i><i value="4" name="reg3_btn">公司</i></label>
			<input class="chose_input" name="type_id" type="text" value="" required data-msg-required="必须选择您的身份"/>

			<div id="sy_info" class="reg_item" name="reg1_btn">
				<input type="hidden" class="sy_info_typeid" value="1"/>
				<input type="text" value="" name="phone"  class="fn-tinput" placeholder="请填写您的手机号" required data-rule-mobile="true" data-msg-required="请输入手机号" data-msg-mobile="请输入正确格式" />
				
				
				<input type="text" value="" name="smscode" class="fn-tinput" placeholder="请填写您的短信验证码" required  data-msg-required="请填写您的短信验证码" data-msg-mobile="请填写您的短信验证码"  />
				<input  class="sendbtn" onclick="return sendsms();" type="button" value="获取短信验证码" style="border:0;color: #fff;background: #ffae55;text-align:center;" />
				
				<input class="fn-tinput" type="password" name="password" value="" placeholder="请填写您的密码" required id="password">
				<input class="fn-tinput" type="password"  name="confirm_password" value="" placeholder="确认两次输入同样的密码" required equalTo="#password">
				<input type="text" value="" name="username" class="fn-tinput" placeholder="请填写您的真实姓名" required data-msg-required="真实姓名不能为空"/>

				<label>选择性别<input name="sex" type="radio" value="男" checked="checked"/>男<input name="sex" type="radio" value="女" />女</label>
				<label>工作方式<input name="work_way" type="radio" value="0" checked="checked"/>兼职<input name="work_way" type="radio" value="1" />全职</label>
				<input type="text" value="" name="age" class="fn-tinput" placeholder="请填写您的年龄" required data-rule-age="true" data-msg-required="年龄不能为空" data-msg-age="年龄请输入数字" />
				<input type="text" name="college" placeholder="请填写您的毕业院校" required data-msg-required="不能为空"/>
				<input type="text" id="birthday" name="birthday" placeholder="请填写您出生日期" required data-msg-required="不能为空"/>
				<input type="text" name="height" placeholder="请填写您的身高" required data-msg-required="不能为空"/>
				<input type="text" name="job" placeholder="请填写您的职业" required data-msg-required="不能为空"/>
				<input type="text" name="qw_area" placeholder="请填写您的期望工作区域" required data-msg-required="不能为空"/>
				<input type="text" name="address" placeholder="请填写您的现在住址" required data-msg-required="不能为空"/>		
				<input id="sy_submit" style="text-align:center;height: 3em;" type="submit" name="submit" value="注册" />
			</div>

			<div id="gr_info" class="reg_item" name="reg2_btn" style="display:none">
				<input type="hidden" class="sy_info_typeid" name="type_id" value="3"/>
				<input type="text" value="" name="phone"  class="fn-tinput" placeholder="请填写您的手机号" required data-rule-mobile="true" data-msg-required="请输入手机号" data-msg-mobile="请输入正确格式" />
				
				
				<input type="text" value="" name="smscode" class="fn-tinput" placeholder="请填写您的短信验证码" required  data-msg-required="请填写您的短信验证码" data-msg-mobile="请填写您的短信验证码"  />
				<input  class="sendbtn" onclick="return sendsms();" type="button" value="获取短信验证码" style="border:0;color: #fff;background: #ffae55;text-align:center;" />
				
				<input class="fn-tinput" type="password" name="password" value="" placeholder="请填写您的密码" required id="password">
				<input class="fn-tinput" type="password"  name="confirm_password" value="" placeholder="确认两次输入同样的密码" required equalTo="#password">
				<input type="text" value="" name="username" class="fn-tinput" placeholder="请填写您的真实姓名（与身份证一致）" required data-msg-required="真实姓名不能为空"/>

				<input type="text" name="idnumber" placeholder="身份证号（与身份证一致）" required data-msg-required="不能为空"/>
				<input type="text" name="email" placeholder="邮箱" required data-msg-required="不能为空"/>
				<input type="text" name="jjlxr" placeholder="紧急联系人" required data-msg-required="不能为空"/>
				<input type="text" name="lxrdh" placeholder="联系人电话" required data-msg-required="不能为空"/>
				<input type="text" name="lxrdz" placeholder="联系地址" required data-msg-required="不能为空"/>
				<input type="text" name="xqms" placeholder="需求描述" required data-msg-required="不能为空"/>
				<input id="gr_submit" style="text-align:center;height: 3em;" type="submit" name="submit" value="注册" />
			</div>

			<div id="gs_info" class="reg_item" name="reg3_btn" style="display:none">
				<input type="hidden" class="sy_info_typeid" name="type_id" value="4"/>
				<input type="text" value="" name="phone"  class="fn-tinput" placeholder="请填写您的手机号" required data-rule-mobile="true" data-msg-required="请输入手机号" data-msg-mobile="请输入正确格式" />
				
				<input type="text" value="" name="smscode" class="fn-tinput" placeholder="请填写您的短信验证码" required  data-msg-required="请填写您的短信验证码" data-msg-mobile="请填写您的短信验证码"  />
				<input  class="sendbtn" onclick="return sendsms();" type="button" value="获取短信验证码" style="border:0;color: #fff;background: #ffae55;text-align:center;" />				
				
				<input class="fn-tinput" type="password" name="password" value="" placeholder="请填写您的密码" required id="password">
				<input class="fn-tinput" type="password"  name="confirm_password" value="" placeholder="确认两次输入同样的密码" required equalTo="#password">
				<input type="text" value="" name="username" class="fn-tinput" placeholder="请填写您的真实姓名" required data-msg-required="真实姓名不能为空"/>

				<input type="text" value="" name="company_jgmc" class="fn-tinput" placeholder="公司机构名称" required data-msg-required="公司机构名称不能为空"/>
				<input type="text" name="email" placeholder="企业邮箱（或者联系邮箱）" required data-msg-required="不能为空"/>
				<input type="text" name="company_zzbm" placeholder="执照编码(与机构名称相符)" required data-msg-required="不能为空"/>
				<input type="text" name="company_hylb" placeholder="行业类别" required data-msg-required="不能为空"/>
				<input type="text" name="company_qyjj" placeholder="企业简介" required data-msg-required="不能为空"/>
				<input type="text" name="company_szd" placeholder="公司所在地" required data-msg-required="不能为空"/>
				<input type="text" name="company_tell" placeholder="公司联系电话(座机)" required data-msg-required="不能为空"/>
				<input id="gs_submit" style="text-align:center;height: 3em;" type="submit" name="submit" value="注册" />
			</div>

	</div>


</div>
<script src="js/jquery.validate.js"></script>
<script>

//切换注册角色效果tab
$(".chose i").click(function(){
	$(".chose i").removeClass("active");
	$(this).addClass("active");
	var text_a = $(this).text();
	var _val = $(this).attr("value");
	var name_x = $(this).attr("name");
	$("#title_tab").html(text_a);
	$(".reg_item").hide();
	$(".reg_item[name='"+name_x+"']").show();
	$(".reg_item[name='"+name_x+"']").children(".sy_info_typeid").attr("value",_val);//不同注册模块赋值不同的类型
});

//登录验证
$(function(){
    //jquery.validate
	$("#loginForm").validate({
		submitHandler: function() {
			//验证通过后 的js代码写在这里
			var path = "logincheck.php";
			$('#loginForm').action=path;
			$('#loginForm').submit();
		}
	});
});
</script>
<!--数据提交-->
<script>
	//摄影师和化妆师注册
	$("#sy_submit").click(function(){
			var type_id = $(this).parent().children(".sy_info_typeid").val();
			var phone = $(this).parent().children("[name='phone']").val();
			var smscode = $(this).parent().children("[name='smscode']").val();
			var password = $(this).parent().children("[name='confirm_password']").val();
			var username = $(this).parent().children("[name='username']").val();
			var sex = $(this).parent().children().children("[name='sex']:checked").val();
			var work_way = $(this).parent().children().children("[name='work_way']:checked").val();
			var age = $(this).parent().children("[name=age]").val();
			var college = $(this).parent().children("[name=college]").val();
			var birthday = $(this).parent().children("[name=birthday]").val();
			var height = $(this).parent().children("[name=height]").val();
			var job = $(this).parent().children("[name=job]").val();
			var qw_area = $(this).parent().children("[name=qw_area]").val();
			var address = $(this).parent().children("[name=address]").val();
			//alert(age);alert(college);alert(birthday);alert(height);alert(job);alert(qw_area);alert(address);
			//alert(company_info);
			$.ajax({
				type: "POST",
				url: "regcheck.php",
				data:" &type_id="+type_id+"&phone="+phone+"&smscode="+smscode+"&password="+password+"&username="+username+"&sex="+sex+"&work_way="+work_way+"&age="+age+"&college="+college+"&birthday="+birthday+"&height="+height+"&job="+job+"&qw_area="+qw_area+"&address="+address+" ",
				success: function(data){
					console.log(data);
					if(/_success_/.test(data)){
						$(".close_reg").trigger("click");
						alert("注册成功!");
					}else{
						alert( data );
					}
					
				}
			});
	});

	//个人注册
	$("#gr_submit").click(function(){
			var type_id = $(this).parent().children(".sy_info_typeid").val();
			var phone = $(this).parent().children("[name='phone']").val();
			var smscode = $(this).parent().children("[name='smscode']").val();
			var password = $(this).parent().children("[name='confirm_password']").val();
			var username = $(this).parent().children("[name='username']").val();
			var idnumber = $(this).parent().children("[name=idnumber]").val();
			var email = $(this).parent().children("[name=email]").val();
			var jjlxr = $(this).parent().children("[name=jjlxr]").val();
			var lxrdh = $(this).parent().children("[name=lxrdh]").val();
			var lxrdz = $(this).parent().children("[name=lxrdz]").val();
			var xqms = $(this).parent().children("[name=xqms]").val();
			$.ajax({
				type: "POST",
				url: "regcheck.php",
				data:" &type_id="+type_id+"&phone="+phone+"&smscode="+smscode+"&password="+password+"&username="+username+"&idnumber="+idnumber+"&email="+email+"&jjlxr="+jjlxr+"&lxrdh="+lxrdh+"&lxrdz="+lxrdz+"&xqms="+xqms+" ",
				success: function(data){
					console.log(data)
					if(/_success_/.test(data)){
						$(".close_reg").trigger("click");
						alert("注册成功!");
					}else{
						alert( data );
					}
				}
			});
	});

	//公司注册
	$("#gs_submit").click(function(){
			var type_id = $(this).parent().children(".sy_info_typeid").val();
			var phone = $(this).parent().children("[name='phone']").val();
			var smscode = $(this).parent().children("[name='smscode']").val();
			var password = $(this).parent().children("[name='confirm_password']").val();
			var username = $(this).parent().children("[name='username']").val();
			var company_jgmc = $(this).parent().children("[name=company_jgmc]").val();
			var email = $(this).parent().children("[name=email]").val();
			var company_zzbm = $(this).parent().children("[name=company_zzbm]").val();
			var company_hylb = $(this).parent().children("[name=company_hylb]").val();
			var company_qyjj = $(this).parent().children("[name=company_qyjj]").val();
			var company_szd = $(this).parent().children("[name=company_szd]").val();
			var company_tell = $(this).parent().children("[name=company_tell]").val();
			$.ajax({
				type: "POST",
				url: "regcheck.php",
				data:" &type_id="+type_id+"&phone="+phone+"&smscode="+smscode+"&password="+password+"&username="+username+"&company_jgmc="+company_jgmc+"&email="+email+"&company_zzbm="+company_zzbm+"&company_hylb="+company_hylb+"&company_qyjj="+company_qyjj+"&company_szd="+company_szd+"&company_tell="+company_tell+" ",
				success: function(data){
					console.log(data)
					if(/_success_/.test(data)){
						$(".close_reg").trigger("click");
						alert("注册成功!");
					}else{
						alert( data );
					}
				}
			});
	});

	//登录
	$("#login_ajax").click(function(){
			var phone = $(this).parent().children("[name='phone']").val();
			var password = $(this).parent().children("[name='password']").val();
			//alert(phone);alert(password);
			$.ajax({
				type: "POST",
				url: "logincheck.php",
				data:" &phone="+phone+"&password="+password+" ",
				success: function(data){
					console.log(data)
					$("#login_but").trigger("click");
					location.reload();
					alert( data );
				}
			});
	});

</script>
<script src="js/jquery.validate_demo.js"></script>
<link href="css/rome.css" rel="stylesheet" type="text/css" media="all" />
<script src="js/rome.min.js"></script>
<script>
	var moment = rome.moment;
	rome(birthday, { time: false });
	//rome(zcrq, { time: false });
</script>
<!--登录-->
<!-- header -->