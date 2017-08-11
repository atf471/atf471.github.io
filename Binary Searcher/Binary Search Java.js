var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayArray() {
	document.getElementById("array").innerHTML = arr.toString();
}

// function arrSort() {
// 	var arrCurrent = arr.sort();
// 	document.getElementById("arrCurrent").innerHTML = "arrCurrent";
// }

function numElements() {
	var targetEl = document.getElementById("target").value;
	var lowIndex = 0;
	var highIndex = arr.length-1;
	var targetIndex = -1;

		while(highIndex >= lowIndex){
			var midIndex = Math.floor((lowIndex+highIndex)/2);
			if (arr[midIndex] == targetEl) {
				targetIndex = midIndex;
				break;
			} 
			else if (arr[midIndex]<targetEl) {
				lowIndex = midIndex+1;
			}
			else {
				highIndex = midIndex-1;
			}
		}

	if (targetIndex != -1) {
		document.getElementById("index").innerHTML = "The index of " + targetEl + " is " +   targetIndex;
	}
	else {
		document.getElementById("index").innerHTML = targetEl + " is not in the array. Try again!"
	}
}