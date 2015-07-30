function onLoadCallback() {
	console.log('onLoadCallback');
}

function onSignIn() {
	console.log('onSignIn');

  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
}

var slider;
function carSelector() {
	// console.log(this.value);
	location.href='#main';
	//slider.$Pause();
	// console.log($('#vehicle'));
	$('#vehicle').multiselect('select', [this.value]);
}

function abc(slideIndex, fromIndex)
{
	if (slideIndex == 0){
		$(".select-car").each(function(){
			$(this).on("click",carSelector);
		});
	}
}

function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }
  function onFailure(error) {
    console.log(error);
  }
  function renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'width': 200,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }

$(function(){
	
	var slider_container_options = { 
		$AutoPlay: true,
		//$FillMode: 2,
		$DragOrientation: 1,
		$AutoPlayInterval: 4000,
		$PauseOnHover: 0,
		$ArrowKeyNavigation: true,
		$SlideDuration: 500,
		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$,
			$ChanceToShow: 2
		}
	};

	slider = new $JssorSlider$('slider', slider_container_options);

	slider.$On($JssorSlider$.$EVT_PARK, abc);

	$(".dropdown-menu li a").click(function(){
		$("#city-selector").text($(this).text());
	});

	var datetimepickerOption = {
		format: 'ddd DD-MM-YYYY HH:mm',
		viewMode: 'months',
		stepping: 15
	};

	$('.multi-dropdown').multiselect({
		buttonWidth: '200',
		enableFiltering: true
	});

	$('#date-from').datetimepicker(datetimepickerOption);
	$('#date-from').data("DateTimePicker").minDate(moment().add(1,'d').format(datetimepickerOption.format));

	$('#date-to').datetimepicker(datetimepickerOption);
	$('#date-to').data("DateTimePicker").disable()

	$('#date-from').on("dp.change", function(e) {
		console.log('setting min date for to picker');
		$('#date-to').data("DateTimePicker").minDate(e.date);
		$('#date-to').data("DateTimePicker").enable();
	});
});