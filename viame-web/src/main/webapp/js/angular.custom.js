/**
* caar Module
*
* Description
*/
var menu = angular.module('menu', []);
var slider = angular.module('slider', []);
var whywe = angular.module('whywe', []);
var footer = angular.module('footer', []);

var pages = new Array("#slider-container", "#packages", "#whywe", "#aboutus");

menu.controller('MenuController', function($scope){
	console.log(MenuItems);
	$scope.MenuItems = MenuItems;
	$scope.Title = Title;
	$scope.direction = true;
	$scope.currentPage = 0;

	$scope.scroll = function() {
		if (!$scope.direction) {
		
			$scope.currentPage--;
			if ($scope.currentPage === 0) { $scope.direction = true; }
		
		} else if ($scope.direction) {
		
			$scope.currentPage++;
			if ($scope.currentPage === pages.length - 1) { $scope.direction  = false; }
		
		}

		scrollTo(pages[$scope.currentPage], 'easeOutBack');
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


footer.controller('FooterController', function($scope){
	$scope.Footer = Footer;
});

var app = angular.module('caar', ['menu', 'slider', 'whywe', 'footer']);