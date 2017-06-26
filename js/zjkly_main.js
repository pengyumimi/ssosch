//吸顶导航
function top_nav(){
	var elem=document.querySelector("header");
	var headroom = new Headroom(elem, {
		"tolerance": 1,
		"offset": 200,
		"classes": {
			"initial": "headroom",
			"pinned": "headroom--pinned",
			"unpinned": "headroom--unpinned"
		}
	});
	headroom.init();
}
top_nav();

//下拉导航效果
//
$(".nav_l li").hover(
	function() {
		var w_n = $(this).width() + 28;
		$(this).find("ul").width(w_n);
		$(this).find("ul").slideDown(100);
	},
	function() {
		$(this).find("ul").slideUp(300);
	}
);

