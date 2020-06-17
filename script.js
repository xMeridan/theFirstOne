var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";
		
	css.textContent = body.style.background +";";
}

function setColor() {
	showTextContent();
	console.log(color1.value);
	console.log(color2.value);
	color1.value = color1;
	color2.value = color2;
}

setGradient();

color1.addEventListener("input", function() { setGradient(); })
color2.addEventListener("input", setGradient) //Both works
