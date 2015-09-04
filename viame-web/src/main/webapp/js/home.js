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

$(window).on('hashchange', function(e){
    var origEvent = e.originalEvent;
    $('.menu').removeClass('active');
    $("a[href$='"+location.hash+"']").addClass('active');
});

$(function() {

	$('body').animatescroll();

	$("a[href$='#slider-container']").addClass('active');

	$('.menu').on('click', function() {
		scrollTo($(this).attr('href'), 'easeOutBack');
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
	
});