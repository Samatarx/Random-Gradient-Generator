const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const background = document.body.style;
const textColor = document.querySelector(".hexcode");
const textColor2 = document.querySelector(".hexcode2");
const angle = document.querySelector(".angle");
const button = document.querySelector(".btn");

//Selects a random number from the hex array defined above
function getRandom() {
  return Math.floor(Math.random() * hex.length);
}

//This function creates a randomly generated colour gradient once the button is pressed
button.addEventListener("click", function () {
  let hexcol = "#";
  let hexcol2 = "#";

  //Returns a random value from the getRandom() function and then combines 6 values with the # to form a hex code
  for (var i = 0; i < 6; i++) {
    hexcol += hex[getRandom()];
    hexcol2 += hex[getRandom()];
  }

  //randomly selects a number between 1-360 to be used as the gradient angle
  const gradient = Math.floor(Math.random() * 360);

  //Changes the background color to match the randomly generated colours
  background.backgroundImage = `linear-gradient(${gradient}deg, ${hexcol} , ${hexcol2})`;

  //Changes the text color to match the randomly generated colours
  textColor.style.color = hexcol;
  textColor2.style.color = hexcol2;

  //Changes the text string to match the randomly generated colours and angles
  textColor.innerHTML = hexcol;
  textColor2.innerHTML = hexcol2;
  angle.innerHTML = gradient;

  // This area changes the text area and provides the CSS properties in a easy to copy format
  document.querySelector("textarea").innerHTML = `background-image: 
 linear-gradient(${gradient}deg, ${hexcol}, ${hexcol2});`;

  // I plan adding a feature that converts the hexcode into RGBa with a toggle, but for now the current set up shall suffice
  //  const hexToRgb = hexi =>
  //  hexi.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
  //             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
  //    .substring(1).match(/.{2}/g)
  //    .map(x => parseInt(x, 16))

  //    console.log(hexToRgb(hexcol));
});

//Button copies the textarea into the clipboard
const copytextarea = document.querySelector(".copybtn");

copytextarea.addEventListener("click", function () {
  var copyText = document.getElementById("copy");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("CSS Properties have been copied!");
});

// const converter = document.querySelector("toggle")

// converter.addEventListener("click", function(){

//   if (converter.innerHTML === "Convert to RGBa") {
//     converter.innerHTML = "Convert to Hexcode"
//   } else {
//     converter.innerHTML = "Convert to RGBa"
//   }
// })
