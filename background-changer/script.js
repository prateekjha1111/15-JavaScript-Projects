
const colors = ["green", "red", "rgba(133,122,200)", "#F15025"];
let body = document.querySelector("body");
let clickButton = document.querySelector(".btn");
let colorName = document.querySelector(".bg-hex");

clickButton.addEventListener("click", function(){
  body.style.backgroundColor = colors[chooseColor()];
});

let chooseColor = ()=>{
  let colorIndex = Math.floor(Math.random() * 4);
  colorName.textContent = colors[colorIndex];
  return colorIndex;
};