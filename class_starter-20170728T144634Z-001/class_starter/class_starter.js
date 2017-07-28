class person {
	constructor(first_name, last_name, address) {
		this.first_name=first_name;
		this.last_name=last_name;
		this.address=address;
	}
	getFullName() {
		document.getElementById("myName").innerHTML= this.first_name + " " + this.last_name;
	}
	getAddress() {
		document.getElementById("myAddress").innerHTML= this.address;
	}
}

var Tom_Cruise= new person("Tom", "Cruise", "859 Scientology Ave");

Tom_Cruise.getFullName();
Tom_Cruise.getAddress();

