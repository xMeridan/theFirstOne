 // var button = document.getElementsByTagName("button");

 // // button[0].addEventListener("click", function() {console.log("CLICK!!!!");})
 // button[0].addEventListener("mouseenter", function() {console.log("CLICK!!!!");})
 // button[0].addEventListener("mouseleave", function() {console.log("Boh!!!!");})


 var button = document.getElementById("enter");
 var input = document.getElementById("userInput");
 var ul = document.querySelector("ul");
 var deleteButton = document.getElementsByClassName("deleteButton");

//Event Listeners --------------------------------------------------------------------
//click eventlistener
button.addEventListener("click", addInput); //Callback function, cause function runs automaticly and we passing a reference without running ()
ul.addEventListener("click", toogleClass);

for (var i=0; i<deleteButton.length;i++) {
	deleteButton[i].addEventListener("click", deleteEntry)
}

//keypress eventlistener
input.addEventListener("keypress", function(event) {
	if (event.which === 13 || event.code === 13)
	{
		addInput();
	}
});

//functions-------------------------------------------------------------------------

function inputLength() {
	return input.value.length;
}

function createListElement() {
			//create Element
	 	var li = document.createElement("li");
	 	//create text in element
	 	li.appendChild(document.createTextNode(input.value));
	 	//put element in the actual view
	 	ul.appendChild(li);
	 	//clears input
	 	input.value = "";
}

//add input to list
function addInput() {
 	if(inputLength() > 0) {
 		createListElement();
 	}
}
 	
//To add line trough or remove
function toogleClass(event){
	if (event.target.getAttribute("class") == "done") {
		event.target.setAttribute("class", "");
	}
	else {
		event.target.setAttribute("class", "done");
	}
}

//Delete Entry from list
function deleteEntry(event) {
	// ul.getElementsByTagName("li").remove();
	event.target.remove();
}