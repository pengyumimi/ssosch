var swNum = 50; //设置swiper 轮播图初始列数
window.onresize = function resizef(){
    var ww = document.documentElement.clientWidth;
    var hh = document.documentElement.clientHeight;
    console.log();
    if (ww>1200){
        //设置大于1200分辨率时显示侧边栏，缩小内容窗口
        swNum = 150;
    };
    if (ww<1199){
        //设置小于1199分辨率时隐藏侧边栏，扩大内容窗口，删除phone_btn标记
        swNum = 50;
    };
};
onresize();
//粒子效果
particlesJS('particles-js', {
    particles: {
        color: '#fff', //圆球颜色
        shape: 'circle', // "circle", "edge" or "triangle"
        opacity: 1,
        size: 4,
        size_random: true,
        nb: swNum,//数量
        line_linked: {
            enable_auto: true,
            distance: 80,
            color: '#fff', //线条颜色
            opacity: 1,
            width: 1,
            condensed_mode: {
                enable: false,
                rotateX: 500,
                rotateY: 500
            }
        },
        anim: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        enable: true,
        mouse: {
            distance: 300
        },
        detect_on: 'canvas', // "canvas" or "window"
        mode: 'grab',
        line_linked: {
            opacity: .6
        },
        events: {
            onclick: {
                enable: false,
                mode: 'push', // "push" or "remove"
                nb: 4
            }
        }
    },
    /* Retina Display Support */
    retina_detect: true
});

//动画按钮
$(".s2-list-box .item").hover(function () {

    $(this).find(".item-cont p").toggleClass("animated fadeInUp");
});

$(".close").click(function(){
    $(".img-box").fadeOut(300);
});

//开始查询
$(".searchBtn").click(function () {
    $(this).addClass("animated pulse");

    var modal_name = $(".search-input").val();
    if (yanz_must(modal_name, $(".search-input"))) {
        var params = {
            modal_name: modal_name
        };
        $.ajax({
            type: "POST",  //提交方式
            url: "admin/controller/search.php",
            dataType: 'json',
            data: params,//数据，这里使用的是Json格式进行传输
            success: function (result) {//返回数据根据结果进行相应的处理
                if (result && result.length > 0) {
                    console.log(result);
                    var imgsrc  = result[0].img_src.slice(6);
                    $(".imgData").attr("src",imgsrc);
                    $(".bianhao").html(result[0].title);
                    $(".img-box").fadeIn(300);
                } else {
                    $('.tip').html("未找到结果！").stop(true, false).fadeIn(0).delay(1000).fadeOut("slow");
                }
            }
        });
    } else {
        // alert('请正确填写信息');
        return false;
    }
});

// 验证必填项目和长度
function yanz_must(_val, selecter) {
    var maxlength = selecter.attr("maxlength");
    if(_val.length == 0){
        selecter.siblings('.errortip').html("此项为必填").css('visibility', 'visible').fadeOut(100).fadeIn(100);
        return false;
    }else if (_val.length > maxlength) {
        selecter.siblings('.errortip').html("输入长度应小于"+maxlength+"").css('visibility', 'visible').fadeOut(100).fadeIn(100);
        return false;
    } else {
        selecter.siblings('.errortip').css('visibility', 'hidden');
        return true;
    }
}