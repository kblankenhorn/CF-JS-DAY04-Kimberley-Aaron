class Hotel {
	hotelName;
	numberOfNights;
	address;
	image;

	constructor(a,b,c,d){
		this.hotelName = a;
		this.numberOfNights = b;
		this.address = c;
		this.image = d;
	}

	printHotelName(){
		console.log('${this.hotelName} ${this.numberOfNights} ${this.address} ${this.image}');
	}


}

var hotelNights = Math.floor(Math.random() * 10) + 1;
console.log(hotelNights);


function checkAvailability() {
	var requested = document.getElementById("hotelNights").value;
	console.log(requested);
	var hotel1 = new Hotel("hilton", requested, "111 abc", "img");
	console.log(hotel1);
	if (hotelNights > requested){
		document.getElementById("result").innerHTML = hotel1.hotelName;
		document.getElementById("book").style.visibility = "visible";
	}
	else {
		document.getElementById("result").innerHTML = hotel1 + "fully booked";
	}
}

document.getElementById("submit").addEventListener("click", checkAvailability,
	false);