var arr= [11 ,24, 1, 4, 5, 16, 57, 8, 9, 1]; 

function displayArray() {
	document.getElementById("array").innerHTML = arr.toString();
}

function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function sort() {
	 for(var i = 1; i < arr.length; i++) {
	 	var ele = arr[i];
	 	var j = i;
	 	while (j > 0 && arr[j] < arr[j-1]) {
	 		swap(arr, j-1, j);
	 		j = j-1;
	 	}
	 }
	document.getElementById("index").innerHTML = "The array is now sorted! " + arr;
	// alert("The array is now sorted!");
 
}
