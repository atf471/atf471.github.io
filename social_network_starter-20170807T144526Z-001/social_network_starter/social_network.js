/*
INSTRUCTIONS:

1. Create a list of 5 names of girls
2. Store 3 friends for each of these 5 girls
3. When the user enters the name of a girl from the list,
   and clicks "Get Friends" display friends of that girl
*/
/*ENTER CODE HERE*/
var friends = {
	"Angela": ["Christine", " Savannah", " Jesus "],
	"Christine": ["Angela", " Bella", " Josephine "],
	"Bella": ["Angela", " Christine", " Rebekah "],
	"Shreya": ["Angela", " Christine", " Rebecca "],
	"Josephine": ["Angela", " Lina", " Lea "],
}

function getFriends() {
	var name = document.getElementById("nameInput").value;

	if (friends[name] === undefined){
		alert("Name does not exist! Try again.");
	}
	else {
		document.getElementById("friends").innerHTML = friends[name];
	}

}



/*EXTENSION*/


function addFriend() {
	var listGirl = document.getElementById("nameOfGirl").value;
	var addName = document.getElementById("nameOfFriend").value;

	friends[listGirl].push(addName);

	document.getElementById("friends2").innerHTML = " " + friends[listGirl];
}
