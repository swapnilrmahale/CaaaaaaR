var slider;
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

function scrollTo(dest, effect) {
	console.log('Scrolling...');
	$(dest).animatescroll({
		scrollSpeed : 2000,
		easing : effect
	});
}

function abc(slideIndex, fromIndex) {
	if (slideIndex == 0) {
		$(".select-car").each(function() {
			$(this).on("click", carSelector);
		});
	}
}

$(function() {

	$('body').animatescroll();

	$('.menu').on('click', function() {
		scrollTo($(this).attr('href'), 'easeOutBack');
		$('header nav').attr('background-color', 'black');
		return true;
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
});