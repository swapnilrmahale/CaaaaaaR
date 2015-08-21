var slider;

/*
function carSelector() {
	// console.log(this.value);
	// location.href='#main';
	// slider.$Pause();
	// console.log($('#vehicle'));
	$('#vehicle').multiselect('deselectAll', false);
	$('#vehicle').multiselect('updateButtonText');
	$('#vehicle').multiselect('select', [ this.value ]);
	// $('#main').animatescroll({scrollSpeed:2000,easing:'easeOutElastic'});
	scrollTo('#main', 'easeOutBack');
}
*/
function abc(slideIndex, fromIndex) {
	if (slideIndex == 0) {
		/*
		$(".select-car").each(function() {
			$(this).on("click", carSelector);
		});
		*/
		$('aside ul li').tooltip(); 
	}
}


/*function scrollTo(dest, effect) {
	console.log('Scrolling...');
	$(dest).animatescroll({
		scrollSpeed : 3000,
		easing : effect
	});
}*/


$(function() {

	/*$('body').animatescroll();*/

	$('.menu').on('click', function() {
		/*scrollTo($(this).attr('href'), 'easeOutBack');*/
		$('header nav').attr('background-color', 'black');
		return true;
	});
	
	$('aside ul li').tooltip(); 
	
	/*
	$('aside ul').each(function() {
		$(this).on('click mouseover focus', function(event) {
			console.log("Focus : " + event.type);
			slider.$Pause();
		}).on('mouseout mouseleave',function(event){
			console.log("Blur : " + event.type);
			slider.$Start();
		});
		
	});
	*/
	
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
	/*
		
	$(".dropdown-menu li a").click(function() {
		$("#city-selector").text($(this).text());
	});

	$('#driveThrough').on('click', function() {
		scrollTo('#slider-container', 'easeInBack');
	});

	var datetimepickerOption = {
		format : 'ddd DD-MM-YYYY HH:mm',
		viewMode : 'months',
		stepping : 15
	};

	$('.multi-dropdown').multiselect({
		buttonWidth : '200',
		enableFiltering : true
	});

	$('#date-from').datetimepicker(datetimepickerOption);
	$('#date-from').data("DateTimePicker").minDate(
			moment().add(1, 'd').format(datetimepickerOption.format));

	$('#date-to').datetimepicker(datetimepickerOption);
	$('#date-to').data("DateTimePicker").disable()

	$('#date-from').on("dp.change", function(e) {
		console.log('setting min date for to picker');
		$('#date-to').data("DateTimePicker").minDate(e.date);
		$('#date-to').data("DateTimePicker").enable();
	});
	*/
});