const hexCodes = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
let clickButton = document.querySelector(".btn");
let colorName = document.querySelector(".bg-hex");
let links = document.querySelectorAll("a");

clickButton.addEventListener("click", ()=>{
  const getRandom = ()=>{
    return Math.floor(Math.random() * 16);
  };
  let color = '#';
  for(let i=0; i<6; i++){
    color += hexCodes[getRandom()];
  }

  document.querySelector("body").style.backgroundColor = color;
  colorName.textContent = color;
  links.forEach((link)=>{
    link.addEventListener("mouseover", function(){
      link.style.color = color;
    });
    link.addEventListener("mouseleave", function(){
      link.style.color = "black";
    })
  });
});

