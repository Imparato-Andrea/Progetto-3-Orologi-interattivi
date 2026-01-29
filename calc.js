let timeMode=false;
//let math=false
let updater
let val1 = ""
let val2 = ""
let operator = null
let result

const equalSign = document.querySelector(".equal")
const screen = document.querySelector(".screen");
const display = document.querySelector(".display"); 

function updateClock(){
 timeMode=true
const currentTime = new Date().toLocaleTimeString();
  screen.textContent = currentTime;  // Display current time on screen
  console.log("Time mode activated");}

function mathing(){
  timeMode = false;
  clearInterval(updater)
  console.log("zero")
  screen.textContent = "Math Mode";
  setTimeout(() => {
  screen.textContent = ""
 }, 1000);
}

function zeroing(){
val1 = ""
val2 = ""
operator = null
}

function add (first,second){
  first = parseFloat(first)
  second = parseFloat(second)
  result= first+second
  screen.textContent = ""
  screen.textContent = result
  zeroing()
}

function subtract (first,second){
  first = parseFloat(first)
  second = parseFloat(second)
  result= first-second
  screen.textContent = ""
  screen.textContent = result
  zeroing()
}

function multiply (first,second){
  first = parseFloat(first)
  second = parseFloat(second)
  result= first*second
  screen.textContent = ""
  screen.textContent = result
  zeroing()
}

function divide (first,second){
  if(second==="0"){
    screen.textContent="Error"
    return
  }
  result= first/second
  first = parseFloat(first)
  second = parseFloat(second)
  
  screen.textContent = ""
  screen.textContent = result
  zeroing()
}


let matem = document.querySelector(".math")
matem.addEventListener("click", mathing )


let num = document.querySelectorAll(".number")
num.forEach((elem)=>
elem.addEventListener ("click",(elem)=>{
  if(timeMode){
    return
  }
  console.log(elem.target)

  const value = elem.target.textContent;

   if(!operator){ 
  val1 += value;
  screen.textContent=val1
}
  else{val2 += value
    screen.textContent=val2
  }
  console.log(val1,"and",val2)
  }
  ) ) //end forEach


  equalSign.addEventListener("click", ()=>{
    console.log("uguale")

    if(operator==="+"){
      add(val1,val2)
    }

    else if(operator==="-"){
      subtract(val1,val2)
    }

    else if(operator==="*"){
      multiply(val1,val2)
    }

    else if(operator==="/"){
      divide(val1,val2)
    }
} )



let operators = document.querySelectorAll(".operator")
operators.forEach((op)=>
  op.addEventListener ("click",(e)=>{
    if(timeMode){
      return
    }
    if(screen.textContent!==""){
      
           operator =  e.target.textContent
           screen.textContent= val1 + " " + operator + " " + val2;
           console.log(e.target.textContent)

           if(operator==="AC"){
            screen.textContent=""
           }

           else if(operator ==="Sqrt"){
            screen.textContent= Math.sqrt(val1)
            zeroing()
           }
           else if(operator==="Del"){
            screen.textContent = screen.textContent.slice(0,-1)
           }
    }
      }
    )) 
  



let tempo = document.querySelector(".time")
timeMode=true
tempo.addEventListener('click', () => {
  clearInterval(updater); // Clear any previous intervals
    updater = setInterval(updateClock, 1000); // Start updating time every second
    updateClock(); // Update the clock immediately when clicked
    console.log("Time mode");
});


















