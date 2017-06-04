
	function banner_l(select1,select2){
		startTimer();

		/** Main Slider **/
		var timer;
		var slideCount = $(select1).length;//����ͼ����
		var currSlide = $(select1).filter('.curr').index();//��������ͼ��curr���Ԫ�ص�����
		var nextSlide = currSlide + 1;
		var fadeSpeed = 1000;
		
		//Start slides timer functions
		function startTimer() {
			timer = setInterval(function () {//�Զ�����
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
			clearInterval(timer);//ֹͣ�Զ�����
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
    

