var slider;


$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

function abc(slideIndex, fromIndex) {
	if (slideIndex == 0) {
		$('aside ul li').tooltip(); 
	}
}


function scrollTo(dest, effect) {
	$(dest).animatescroll({
		scrollSpeed : 3000,
		easing : effect
	});
}


$(function() {

	$('body').animatescroll();

	$('.menu').on('click', function() {
		scrollTo($(this).attr('href'), 'easeOutBack');
		$('header nav').attr('background-color', 'black');
		return true;
	});
	
	$('aside ul li').tooltip(); 
	
	$('aside.package-specific').on({
		mouseenter: function () {
			slider.$Pause();     
	    },
	    mouseleave: function () {
			slider.$Play();
	    }
	});

	/*$('.down').on('click', );*/

	var slider_container_options = {
		$AutoPlay : true,
		// $FillMode: 2,
		$DragOrientation : 1,
		$AutoPlayInterval : 4000,
		$PauseOnHover : 0,
		$ArrowKeyNavigation : true,
		$SlideDuration : 500,
		$ArrowNavigatorOptions : {
			$Class : $JssorArrowNavigator$,
			$ChanceToShow : 2
		}
	};

	slider = new $JssorSlider$('slider', slider_container_options);

	slider.$On($JssorSlider$.$EVT_PARK, abc);
	
	/*
    function ScaleSlider() {
        var windowWidth = $(window).width();

        if (windowWidth) {
            var windowHeight = $(window).height();
            var originalWidth = slider.$OriginalWidth();
            var originalHeight = slider.$OriginalHeight();

            if (originalWidth / windowWidth > originalHeight / windowHeight) {
                slider.$ScaleHeight(windowHeight);
            }
            else {
                slider.$ScaleWidth(windowWidth);
            }
        }
        else
            window.setTimeout(ScaleSlider, 30);
    }

    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);

	*/
});