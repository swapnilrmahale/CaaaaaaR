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

var _Feature = function(name, oneLiner) {
	this.name = name;
	this.oneLiner = oneLiner;
}

var cFeatures = new Array();
cFeatures.push(new _Feature('Water Bottle', 'Free Water Bottle'));
cFeatures.push(new _Feature('Chocolates', 'One Liner About Chocolates'));
cFeatures.push(new _Feature('XYZ Feature', 'One Liner About XYZ'));

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
pFeatures.push(new _Feature('Mumbai Airport Drop', ''));
pFeatures.push(new _Feature('Mumbai Airport Pickup', ''));
pFeatures.push(new _Feature('Pune Airport Drop', ''));
pFeatures.push(new _Feature('Pune Airport Pickup', ''));
Packages.push(new _Package('1', 'Airport Services', 'img/103.jpg', pFeatures, cFeatures));

pFeatures = [];
pFeatures.push(new _Feature('Lavasa', ''));
pFeatures.push(new _Feature('Khadakwasla Sinhgad', ''));
pFeatures.push(new _Feature('Imagica', ''));
Packages.push(new _Package('2', 'Pune One Day Trips', 'img/103.jpg', pFeatures, cFeatures));

pFeatures = [];
pFeatures.push(new _Feature('Ashtavinayak Darshan', ''));
pFeatures.push(new _Feature('Shirdi & Shanishinganapur', ''));
pFeatures.push(new _Feature('Akkalkot Gangapur Tuljapur', ''));
Packages.push(new _Package('3', 'Pilgrimage Trips', 'img/103.jpg', pFeatures, cFeatures));

pFeatures = [];
pFeatures.push(new _Feature('Mahabaleshwar', ''));
pFeatures.push(new _Feature('Pachgani', ''));
pFeatures.push(new _Feature('Tapola', ''));
pFeatures.push(new _Feature('Satara Kaspathar', ''));
pFeatures.push(new _Feature('Lonawala Khandala', ''));
Packages.push(new _Package('4', 'Weekend Gateaways', 'img/103.jpg', pFeatures, cFeatures));

pFeatures = [];
pFeatures.push(new _Feature('Konkan', ''));
pFeatures.push(new _Feature('Goa', ''));
Packages.push(new _Package('5', 'Long Trips', 'img/103.jpg', pFeatures, cFeatures));

var _Copyright = function(part1, part2) {
	this.part1 = part1;
	this.part2 = part2;
}
var copyright = new _Copyright('Copyright reserve', '2015 Its Me Corporation');

var _Footer = function(copyright) {
	this.copyright = copyright;
}

var Footer = new _Footer(copyright);