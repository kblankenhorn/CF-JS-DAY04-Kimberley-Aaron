var answer = document.getElementById("answer");

function length() { 
	var firstName = document.getElementById("fname").value;
	var lastName = document.getElementById("lname").value;
	answer.innerHTML = firstName + " " + lastName;
	if (firstName.length + lastName.length > 5) {
		answer.style.color = "green";

  }
  	else {
  		answer.style.color = "red";
  	}
}

	document.getElementById("submit").addEventListener("click", length ,
	false);

