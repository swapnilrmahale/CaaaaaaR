/**
* caar Module
*
* Description
*/
var menu = angular.module('menu', []);
var slider = angular.module('slider', []);
var footer = angular.module('footer', []);

menu.controller('MenuController', function($scope){
	console.log(MenuItems);
	$scope.MenuItems = MenuItems;
	$scope.Title = Title;	
});

slider.controller('SliderController', function($scope){
	console.log(Packages);
	$scope.Packages = Packages;	
});

footer.controller('FooterController', function($scope){
	$scope.Footer = Footer;
});
`
var app = angular.module('caar', ['menu', 'slider', 'footer']);