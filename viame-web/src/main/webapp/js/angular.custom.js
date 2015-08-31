/**
* caar Module
*
* Description
*/
var menu = angular.module('menu', []);
var slider = angular.module('slider', []);
var whywe = angular.module('whywe', []);
var contactus = angular.module('contactus', []);
var footer = angular.module('footer', []);

var pages = new Array("#slider-container", "#packages", "#whywe", "#contactus");

menu.controller('MenuController', function($scope){
	console.log(MenuItems);
	$scope.MenuItems = MenuItems;
	$scope.Title = Title;
	$scope.direction = true;
	$scope.currentPage = 0;

	$scope.scroll = function(direction) {
		/*console.log("Start : " + direction + " : " + $scope.currentPage);*/
		if (direction === "up" && $scope.currentPage > 0) {
			$scope.currentPage = $scope.currentPage - 1;
			/*console.log(direction + " : " + $scope.currentPage);*/
			scrollTo(pages[$scope.currentPage], 'easeOutBack');

		} else if (direction === "down" && $scope.currentPage < pages.length - 1) {
			$scope.currentPage = $scope.currentPage + 1;
			/*console.log(direction + " : " + $scope.currentPage);*/
			scrollTo(pages[$scope.currentPage], 'easeOutBack');
		}
		/*console.log("End : " + direction + " : " + $scope.currentPage);*/		
	};
});

slider.controller('SliderController', function($scope){
	console.log(Packages);
	$scope.Packages = Packages;	
});

whywe.controller('WhyWeController', function($scope){
	console.log(WhyWe);	
	$scope.WhyWe = WhyWe;
});

contactus.controller('ContactUsController', function($scope){
	console.log(ContactUs);	
	$scope.ContactUs = ContactUs;
});


footer.controller('FooterController', function($scope){
	$scope.Footer = Footer;
});

var app = angular.module('caar', ['menu', 'slider', 'whywe', 'contactus', 'footer']);