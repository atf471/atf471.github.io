class BlogEntry {
	constructor(title, text) {
		this.title=title;
		this.text=text;
	}
}

function addEntryToBlog() {
  //Create new blog entry
  var name = document.getElementById("blogEntryName").value
  var entry = document.getElementById("blogEntryText").value
  var blogEntry = new BlogEntry(name, entry);
  
 createBlogEntryElement(blogEntry);
 createFooterElement(blogEntry);

 document.getElementById("blogEntryName").value= "";
 document.getElementById("blogEntryText").value= "";

}
  //Add the new entry, name and date to the blog
  function createBlogEntryElement(blogEntry) {
  	var blogDetails = document.getElementById("blogDetails");
  	var node = document.createElement("div");
  	node.className = "blogEntry";
  	node.innerText = blogEntry.text;
  	blogDetails.appendChild(node);
  }

  function createFooterElement(blogEntry) {
  	var blogDetails = document.getElementById("blogDetails");
  	var node = document.createElement("div");
  	node.className = "blogDate";
  	node.innerText = blogEntry.title + " " + Date();
  	blogDetails.appendChild(node);
  }

  //Clear the inputs
  	//Create a div with the class "blogDate" and add your name and date in it 
  //appendChild




