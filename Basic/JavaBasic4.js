//basic 1
//to simplify our code, we create a var answer to replace document....
var answer = document.getElementById("answer");

function length() { //we take the given values from the form and compare their lengths
	var firstName = document.getElementById("fname").value;
	var lastName = document.getElementById("lname").value;
	var age = document.getElementById("age").value;
	answer.innerHTML = firstName + " " + lastName + " " + age;			//at the end we return the given values
	if (firstName.length + lastName.length > 5) {	//if the first and second name lengths exeed 5, their colors will change green 
		answer.style.color = "green";

	}
	else {	//default statement of the text color is red 
		answer.style.color = "red";
	}
}


//again we simplify our code with a var
var jobResult = document.getElementById("jobResult");

console.log(jobResult);
function bgColor() {	//we want to give all job titles that are longer the 2 characters in length a background color of grey
	var jobName = document.getElementById("job").value;
	console.log(jobName);
	jobResult.innerHTML = jobName;
	if (jobName.length <= 2) {	//unless they are smaller then 2
		jobResult.style.backgroundColor = "purple";
	} else {
		jobResult.style.backgroundColor = "grey";
	}
}
//first event listener for function length
document.getElementById("submit").addEventListener("click", length,
	false);
//second event listener for function bgColor
document.getElementById("submit").addEventListener("click", bgColor,
	false);