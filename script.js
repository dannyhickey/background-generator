var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");



function changeColour()
{
       body.style.background =
     "linear-gradient(to right, "
      + color1.value 
      + ", " 
      + color2.value

      css.textContent = body.style.background + ";"; 
}

color1.addEventListener("input", changeColour);

color2.addEventListener("input", changeColour);

const obj = {
  name: 'john'
}

obj.name;

const ojjj = {
  name: 'richie'
}

