var _Title = function(href, title) {
	this.title = title;
	this.href = href;
}
var Title = new _Title('#', 'Its Me Corp');


var _MenuItem = function(href, dName) {
	this.href = href;
	this.dName = dName;
};
var MenuItems = new Array();

MenuItems.push(new _MenuItem('#', 'Home'));
MenuItems.push(new _MenuItem('#packages', 'Packages'));
MenuItems.push(new _MenuItem('#whywe', 'Why We ?'));
MenuItems.push(new _MenuItem('#aboutus', 'About-Us'));
MenuItems.push(new _MenuItem('#contactus', 'Contact-Us'));

var _Feature = function(name, oneLiner) {
	this.name = name;
	this.oneLiner = oneLiner;
}

var cFeatures = new Array();
cFeatures.push(new _Feature('Water Bottle', 'Free Water Bottle'));
cFeatures.push(new _Feature('Chocolates', 'One Liner About Chocolates'));
cFeatures.push(new _Feature('XYZ Feature', 'One Liner About XYZ'));
cFeatures.push(new _Feature('ABC', 'One Liner About ABC'));
cFeatures.push(new _Feature('Another Feature', 'One Liner About Another Feature'));

var _Package = function(id, name, img, pFeatures, cFeatures) {
	this.id = id;
	this.name = name;
	this.img = img;
	this.pFeatures = pFeatures;
	this.cFeatures = cFeatures;
}

var Packages = new Array();

var pFeatures = new Array();
pFeatures.push(new _Feature('Package 1 Feature 1', 'One Liner About Package 1 Feature 1'));
pFeatures.push(new _Feature('Package 1 Feature 2', 'One Liner About Package 1 Feature 2'));
pFeatures.push(new _Feature('Package 1 Feature 3', 'One Liner About Package 1 Feature 3'));
Packages.push(new _Package('1', 'Package 1', 'img/101.jpg', pFeatures, cFeatures));

pFeatures = [];
pFeatures.push(new _Feature('Package 2 Feature 1', 'One Liner About Package 2 Feature 1'));
pFeatures.push(new _Feature('Package 2 Feature 2', 'One Liner About Package 2 Feature 2'));
pFeatures.push(new _Feature('Package 2 Feature 3', 'One Liner About Package 2 Feature 3'));
Packages.push(new _Package('2', 'Package 2', 'img/102.jpg', pFeatures, cFeatures));

pFeatures = [];
pFeatures.push(new _Feature('Package 3 Feature 1', 'One Liner About Package 3 Feature 1'));
pFeatures.push(new _Feature('Package 3 Feature 2', 'One Liner About Package 3 Feature 2'));
pFeatures.push(new _Feature('Package 3 Feature 3', 'One Liner About Package 3 Feature 3'));
Packages.push(new _Package('3', 'Package 3', 'img/201.jpg', pFeatures, cFeatures));

pFeatures = [];
pFeatures.push(new _Feature('Package 4 Feature 1', 'One Liner About Package 4 Feature 1'));
pFeatures.push(new _Feature('Package 4 Feature 2', 'One Liner About Package 4 Feature 2'));
pFeatures.push(new _Feature('Package 4 Feature 3', 'One Liner About Package 4 Feature 3'));
Packages.push(new _Package('4', 'Package 4', 'img/103.jpg', pFeatures, cFeatures));

pFeatures = [];
pFeatures.push(new _Feature('Package 5 Feature 1', 'One Liner About Package 5 Feature 1'));
pFeatures.push(new _Feature('Package 5 Feature 2', 'One Liner About Package 5 Feature 2'));
pFeatures.push(new _Feature('Package 5 Feature 3', 'One Liner About Package 5 Feature 3'));
Packages.push(new _Package('5', 'Package 5', 'img/001.jpg', pFeatures, cFeatures));

var _Copyright = function(part1, part2) {
	this.part1 = part1;
	this.part2 = part2;
}
var copyright = new _Copyright('Copyright reserve', '2015 Its Me Corporation');

var _Footer = function(copyright) {
	this.copyright = copyright;
}

var Footer = new _Footer(copyright);