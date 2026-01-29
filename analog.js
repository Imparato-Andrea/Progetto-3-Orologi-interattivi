let hoursHand = document.querySelector(".hours");
let minutesHand = document.querySelector(".minutes");
let secondHand = document.querySelector(".seconds");

function clockUpdater() {
    let now = new Date();

    let secDeg = now.getSeconds() * 6;
    let minDeg = now.getMinutes()*6  + (now.getSeconds() / 60) * 6;
    let hrDeg = (now.getHours()%12)*30 + (now.getMinutes() / 60) * 30;

    hoursHand.style.transform = `rotate(${hrDeg}deg)`;
    minutesHand.style.transform = `rotate(${minDeg}deg)`;
    secondHand.style.transform = `rotate(${secDeg}deg)`;
}

clockUpdater();
setInterval(clockUpdater, 1000);

let arabic = ['1','2','3','4','5','6','7','8','9','10','11','12']
let roman = ['I','II','III','IV','V','VI','VII','IIX','IX','X','XI','XII']
let california = ['I','II','-','4','5','|','7','8','-','X','XI','▼	']


let styleIndex=0

function toggler(){
    let arr = document.querySelectorAll(".num b")
    arr.forEach((num,index) => {
      if (styleIndex === 0) {
        num.textContent = roman[index];  // Set Arabic numerals
         
    } else if (styleIndex === 1) {
        num.textContent = california[index];  // Set Roman numerals
          
    } else if (styleIndex === 2) {
        num.textContent = arabic[index];  // Set California style
          
    }
        
    });
    styleIndex = (styleIndex + 1) % 3;
    
}

function dialChange(){
  let dial = document.querySelector(".dial")
  dial.classList.toggle("changer");
  document.querySelector(".hours").classList.toggle("changerwh")
  document.querySelector(".minutes").classList.toggle("changerwh")
  document.querySelector(".name").classList.toggle("changetxtcolor")
  document.querySelectorAll(".num").forEach((elem)=>elem.classList.toggle("changetxtcolor"))
}


let button = document.querySelector(".btn-light")
button.addEventListener("click", toggler)


let buttontwo = document.querySelector(".btn-light.btndue")
buttontwo.addEventListener("click",dialChange )

let beltOne = document.querySelector(".belt.one");
let beltTwo = document.querySelector(".belt.two");

let color = document.querySelector("#strapColorSelect")

color.addEventListener("change", ()=>{
  beltOne.style.backgroundColor= color.value
  beltTwo.style.backgroundColor= color.value
})