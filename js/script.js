
	function banner_l(select1,select2){
		startTimer();

		/** Main Slider **/
		var timer;
		var slideCount = $(select1).length;//缩略图个数
		var currSlide = $(select1).filter('.curr').index();//遍历缩略图带curr类的元素的索引
		var nextSlide = currSlide + 1;
		var fadeSpeed = 1000;
		
		//Start slides timer functions
		function startTimer() {
			timer = setInterval(function () {//自动播放
				$(select2).eq(currSlide).fadeOut(fadeSpeed);
				$(select2).removeClass('curr');
				$(select1).removeClass('curr');

				$(select2).eq(nextSlide).addClass('curr').fadeIn(fadeSpeed);
				$(select1).eq(nextSlide).addClass('curr');

				currSlide = nextSlide;
				nextSlide = currSlide + 1 < slideCount ? currSlide + 1 : 0;

			}, 6000);
		}

		$(select1).click(function () {
			clearInterval(timer);//停止自动播放
			startTimer();
			currSlide = $(this).index();
			nextSlide = currSlide + 1 < slideCount ? currSlide + 1 : 0;
			$(select2).fadeOut(fadeSpeed);
			$(select2).removeClass('curr');
			$(select1).removeClass('curr');

			$(select2).eq($(this).index()).addClass('curr').fadeIn(fadeSpeed);
			$(this).addClass('curr');
		});
	}
    

