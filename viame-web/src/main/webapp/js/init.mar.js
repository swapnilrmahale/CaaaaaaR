var _Title = function(href, title) {
	this.title = title;
	this.href = href;
}
var Title = new _Title('#', 'ViAs Travels');


var _MenuItem = function(href, dName) {
	this.href = href;
	this.dName = dName;
};
var MenuItems = new Array();

MenuItems.push(new _MenuItem('#slider-container', 'Home'));
MenuItems.push(new _MenuItem('#packages', 'Packages'));
MenuItems.push(new _MenuItem('#whywe', 'Why We ?'));
MenuItems.push(new _MenuItem('#contactus', 'Contact-Us'));

var ContactNumber = "Call Us @ 020-244-24-213";

var _Feature = function(name, oneLiner) {
	this.name = name;
	this.oneLiner = oneLiner;
}

var cFeatures = new Array();
cFeatures.push(new _Feature('Water Bottle', 'Free Water Bottle Per Passenger'));
cFeatures.push(new _Feature('Mom Made Chocolates', 'Specially baked a pack of Mom Made Chocolates'));
cFeatures.push(new _Feature('Tissue Paper', 'A Pack of Tissue Papers'));
cFeatures.push(new _Feature('Garbage Bin Bags', 'We know you care for the environment'));
cFeatures.push(new _Feature('Magazine and News Paper', 'Magazines and News Paper'));
cFeatures.push(new _Feature('Tolls Included<sup>*</sup>', '* For Selected Packages Tolls are included in Package Price'));

var _Package = function(id, name, img, pFeatures) {
	this.id = id;
	this.name = name;
	this.img = img;
	this.pFeatures = pFeatures;
}

var packagesList = new Array();

var pFeatures = new Array();
pFeatures.push(new _Feature('Mumbai Airport Drop', ''));
pFeatures.push(new _Feature('Mumbai Airport Pickup', ''));
pFeatures.push(new _Feature('Pune Airport Drop', ''));
pFeatures.push(new _Feature('Pune Airport Pickup', ''));
packagesList.push(new _Package('1', 'Airport Services', 'img/103.jpg', pFeatures));

pFeatures = [];
pFeatures.push(new _Feature('Lavasa', ''));
pFeatures.push(new _Feature('Khadakwasla Sinhagad', ''));
pFeatures.push(new _Feature('Imagica', ''));
packagesList.push(new _Package('2', 'Pune One Day Trips', 'img/103.jpg', pFeatures));

pFeatures = [];
pFeatures.push(new _Feature('Ashtavinayak Darshan', ''));
pFeatures.push(new _Feature('Shirdi & Shanishinganapur', ''));
pFeatures.push(new _Feature('Akkalkot Gangapur Tuljapur', ''));
packagesList.push(new _Package('3', 'Pilgrimage Trips', 'img/103.jpg', pFeatures));

pFeatures = [];
pFeatures.push(new _Feature('Mahabaleshwar', ''));
pFeatures.push(new _Feature('Pachgani', ''));
pFeatures.push(new _Feature('Tapola', ''));
pFeatures.push(new _Feature('Satara Kaspathar', ''));
pFeatures.push(new _Feature('Lonawala Khandala', ''));
packagesList.push(new _Package('4', 'Weekend Gateaways', 'img/103.jpg', pFeatures));

pFeatures = [];
pFeatures.push(new _Feature('Konkan', ''));
pFeatures.push(new _Feature('Goa', ''));
packagesList.push(new _Package('5', 'Long Trips', 'img/103.jpg', pFeatures));

var _Packages = function(packagesList, cFeatures) {
	this.packagesList = packagesList;
	this.cFeatures = cFeatures;
}

var Packages = new _Packages(packagesList, cFeatures);

var _WhyWe = function(bullets) {
	this.bullets = bullets
}

var bullets = new Array();
bullets.push("Book a car with us and we guarantee you convenience, quality and comfort to its best.");
bullets.push("For local trips, we have unique and flexible packages");
bullets.push("Customer satisfaction is our true motive.");
bullets.push("We have a team of most well behaved and courteous drivers");
bullets.push("One Water bottle per person travelling with us because we want you to take care of yourself during the journey");
bullets.push("One Mom Made chocolate pouche per person travelling with us because we want your journey to be sweet");
bullets.push("Trash/Garbage bags because we care for the environment as well");
bullets.push("Tissue napkins because we also care for the cars cleanliness");

var WhyWe = new _WhyWe(bullets);

var _Copyright = function(part1, part2) {
	this.part1 = part1;
	this.part2 = part2;
}

var _Organisation = function (name, addresslines, landline) {
	this.name = name;
	this.addresslines = addresslines;
	this.landline = landline;
}
var addresslines = new Array();
addresslines.push("पर्वती दर्शन , <br>");
addresslines.push("पुणे - ४११ ००९ <br>");

var Organisation = new _Organisation("विअस  Travels", addresslines, "०२०-२४४-२४-२१३");

var _Contact = function(id, organisation, name, email, mobile) {
	this.id = id;
	this.organisation = organisation;
	this.name = name;
	this.email = email;
	this.mobile = mobile;
}

var Contacts = new Array();

Contacts.push(new _Contact("contact1", Organisation, "रंजित", "ranjit@vias.co.in", "+९१-८६००८६६५९३"));
Contacts.push(new _Contact("contact2", Organisation, "सोनम", "sonam@vias.co.in", "+९१-९८२२४२९३५७"));

var Copyright = new _Copyright('Copyright reserved', '2015 ViAs Travels');

var _Footer = function(copyright) {
	this.copyright = copyright;
}

var Footer = new _Footer(Copyright);