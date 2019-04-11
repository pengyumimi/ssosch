<!-- footer-top -->
<div class="footer-top">
	<div class="container">
		<div class="col-md-4 foo-left">
			<a href="index.html"><img src="images/logo.png" class="img-responsive" alt=""></a><p>本公司极力提倡“真实、可靠、保障”为兼职人员和雇主实现顺畅沟通，交易渠道。
本网站是为自由摄影师、化妆师，向企业或个人提供招聘兼职的第三方平台。主要从事摄影类网上兼职信息发布、人才选择等，打造一个既能在线寻找摄影类兼职人才又能快速发布需求找到合适就职人员的平台以满足双发需求。我们的兼职信息和兼职人员，都是经过多方审核以确保真实。雇主可根据个人情况发布需求兼职，又可以线上了解找寻兼职人员来找到应聘者，让找兼职变得省时、省心、省力。</p>
		</div>
		<div class="col-md-4 foo-left">
			<h3>底部信息</h3>
			<h6>联系邮箱</h6>
			<p>swhz@syjzw88.com</p>
			<h6>客服电话</h6>
			<p>010-56258262</p>
		</div>
		<div class="col-md-4 foo-left">
			<h3>友情链接</h3>
			<ul>
				<li class="active"><a href="http://p.aiyaopai.com/">YAOPAI</a></li>
				<li><a href="#">蒙娜丽莎</a></li>
				<li><a href="#">蜂鸟网</a></li>
				<li><a href="http://p.aiyaopai.com/">POCO摄影社区</a></li>
				<li><a href="http://p.aiyaopai.com/">【太平洋摄影部落】</a></li>
				<li><a href="http://p.aiyaopai.com/">网易摄影_爱摄影,和你一样!</a></li>
				<li><a href="http://p.aiyaopai.com/">新摄影 - 中国摄影门户</a></li>
				<div class="clearfix"> </div>
			</ul>
		</div>
		<div class="clearfix"> </div>
	</div>
</div>
<!-- footer-top -->
<!-- footer-bottom -->
<div class="footer-bottom">
	<div class="container">
		<p>Copyright &copy; 2017.版权所有,翻版必究.网站备案号:京ICP备16014333号</p>
	</div>
</div>
<script>
$(document).ready(function () {
	$(".login_but").click(function(){
		$(".dialog_login").fadeIn(100);
	});
	$(".close").click(function(){
		$(".dialog_login").fadeOut(100);
	});
	$(".reg_but").click(function(){
		$(".dialog_reg").fadeIn(100);
	});
	$(".join_but").click(function(){
		$(".dialog_reg").fadeIn(100);
	});
	$(".close_reg").click(function(){
		$(".dialog_reg").fadeOut(100);
	});
});
</script>
<script>

	function getCookie(name){
		var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
		if(arr != null) return unescape(arr[2]); 
		return null;
	};

	// 判断是否已经登录
	var cook = getCookie("name");
	if(!cook)
	{
		$("#userlogin").hide();
	}else{
		$(".login_but,.reg_but").hide();
		$("#userlogin").show();
		$(".welcome strong").html(cook);
	}
	//检测登录状态
	$('.index_userBut').click(function(){
		if(!cook){
			alert('您还没有登录，请先登录');
			return false;
		}else{
			//啥也不做
		};
	});
	//注销
	function logout(){
		setCookie(name, 1, -1);
	};
</script>
<!-- footer-bottom -->