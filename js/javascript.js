
var greeting = "Bonjour. Good morning/evening/whatever"
var customername = "Fellow countrymate";
var price = [200+150+10+40+50];
var totalPrice = price-(price*25/100);

var hours = new Date().getHours();
	var message;
	var morning = ('Good morning');
	var afternoon = ('Good afternoon');
	var evening = ('Good evening');

	if (hours >= 0 && hours < 12) {
		message = morning; 

	} else if (hours >= 12 && hours < 17) {
		message = afternoon;

	} else if (hours >= 17 && hours < 24) {
		message = evening;
	}

document.getElementById("customer-name").innerHTML = "Fellow countrymate";
document.getElementById("").innerHTML = "Good " + message;
document.getElementById("price").innerHTML = "Total price is $" + totalPrice;

var products = [
"vishivanka",
"sharovari",
"Baby's blood","vareniki",
"pelmeni"
]
var price = [200, 150, 10, 40, 50];

var productsText = "";
var productsElement = document.getElementById("product-list");

productsText = productsText + "<li class='list-group-item'>" + products[0] + "<span class='badge'>$" + price[0] + "</li>";
for (i=1;i<=4;i++) {
	productsText = productsText + "<li class='list-group-item'>" + products[i] + "<span class='badge'>$" + price[i] + "</li>";
}
productsElement.innerHTML = productsText;