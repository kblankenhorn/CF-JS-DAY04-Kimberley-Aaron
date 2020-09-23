class Hotel {
	hotelName;
	numberOfNights;
	address;
	image;

	constructor(a, b, c, d) {
		this.hotelName = a;
		this.numberOfNights = b;
		this.address = c;
		this.image = d;
	}

	printHotelName() {
		console.log('${this.hotelName} ${this.numberOfNights} ${this.address} ${this.image}');
	}


}

var hotelNights = Math.floor(Math.random() * 10) + 1;
console.log(hotelNights);


function checkAvailability() {
	var requested = document.getElementById("hotelNights").value;
	console.log(requested);
	hotel1 = new Hotel("Hilton", requested, "111 abc", "<img src='https://cdn.pixabay.com/photo/2020/09/19/15/43/townscape-5584820_960_720.jpg'>");
	var outputRes = `<br> Hotel: ${hotel1.hotelName} <br> Nights: ${hotel1.numberOfNights} <br> Location: ${hotel1.address} <br> ${hotel1.image}`;
	console.table(hotel1);
	if (requested >= hotelNights) {
		document.getElementById("result").innerHTML = outputRes;
		document.getElementById("book").style.visibility = "visible";
	}
	else {
		document.getElementById("result").innerHTML = outputRes + "<br> fully booked";
	}
}

document.getElementById("submit").addEventListener("click", checkAvailability,
	false);