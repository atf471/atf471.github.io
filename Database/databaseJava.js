var id = 0;

function addToDo() {
	var task = document.getElementById("input").value;
	var span = document.createElement("span");
	var newDiv = document.createElement("div");
	span.innerHTML=task;
	span.className = "chore";
	var toDoList = document.getElementById("plans");
	newDiv.appendChild(checks(id));
	newDiv.appendChild(span);
	toDoList.appendChild(newDiv);
	id++;
}

function checks(id) {
	var checkbox = document.createElement("input"); 
    checkbox.type = "checkbox";
    checkbox.id = id;
    checkbox.className = "box";
    return checkbox;
}

function deleteChecks() {
 	var things = document.getElementsByClassName("box");
 	var taskz = document.getElementsByClassName("chore");
 	for (var i=0; i < checks.length; i++) {
 		var dog = things[i];
 		var cat = taskz[i];
 		if (dog.checked) {
 			dog.parentNode.removeChild(dog);
 			cat.parentNode.removeChild(cat);
 		}
 	}
 }

