
let count = document.querySelector("#value");
let buttons = document.querySelectorAll(".btn");
let val = 0;

buttons.forEach((item)=>{
  item.addEventListener("click", ()=>{
    let cls = item.classList;
    if(cls.contains('decrease')){
      val--;
    }
    else if(cls.contains('reset')){
      val = 0;
    }
    else {
      val++;
    }
    count.textContent = val;

    if(val < 0){
      count.style.color = 'red';
    }
    else if(val > 0){
      count.style.color = 'green';
    }
    else {
      count.style.color = 'black';
    }
  });
});