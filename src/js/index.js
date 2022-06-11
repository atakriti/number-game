let container = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let span = document.querySelector(".number");
let span2 = document.querySelector(".number2");
let empty = "";
let empty2 = "";
let strong = document.querySelector(".timer1");
let strong2 = document.querySelector(".timer2");
let movedElement = document.querySelector(".movedElement")
let movedElement2 = document.querySelector(".movedElement2")
// ===================
let level1 = document.querySelector(".level1")
level1.style.display = "none"
let level2 = document.querySelector(".level2")
// level2.style.display = "none"
let welcomePage = document.querySelector(".welcome-page")
welcomePage.style.display = "none"
let loading = document.querySelector(".loading")
loading.style.display = "none"



let nextBtn = document.querySelector("#next")
let nextBtn2 = document.querySelector("#next2")
let timeOut = document.querySelector(".timeOut")
timeOut.style.display = "none"
// ======================= level one Function ======================
function level1Fun() {
  for (let i = 0; i < 25; i++) {
    let div = document.createElement("div");
    let random = Math.ceil(Math.random() * 10);
    let divContent = document.createTextNode(random);
    div.appendChild(divContent);
    container.appendChild(div);
    

    div.addEventListener("click", (e) => {
      if (empty == "") {
          empty += e.target.innerText;
          span.innerHTML = empty;
          span.style.color = "red"
        
      }
      if (empty === e.target.innerText) {
  movedElement.appendChild(div)        
       
      } else {
        span.innerHTML = "Wrong!, try again";
        span.style.color = "red";
      }
  
    });
    
  }

  nextBtn.addEventListener("click", () => {
    document.querySelector(".level1").style.display = "none"
    document.querySelector(".loading").style.display = "block"
    setTimeout(() => (document.querySelector(".loading").style.display = "none"), 5000)
    setTimeout(() => (document.querySelector(".level2").style.display = "block"), 5000)
  })
}
level1Fun();
// =================================== end level1 =====================
// ============================ timecounter ================
let timeVariable = 5

function timerFunction() {
  
    strong.innerHTML = timeVariable--
   
  
  if (strong.innerHTML == 0) {
    strong.remove()
     timeOut.style.display = "block"
     setTimeout(() => (timeOut.style.display = "none"),5000)
       // timerVar = 5
   }
 
}
function timerCall() {
  if (level1.style.display === "block") {
    timerFunction()
  }
}

setInterval(timerCall, 1000)
// ==================== end timecounter ===================
// ==================== level2 =================================
function level2Fun() {
  for (let i = 0; i < 50; i++){
    let div = document.createElement("div")
    let random = Math.ceil(Math.random() * 10)
    let divContent = document.createTextNode(random)
    div.appendChild(divContent)
    container2.appendChild(div)

    div.addEventListener("click", (e) => {
      if (empty2 == "") {
        empty2 += e.target.innerText;
        span2.innerHTML = empty2;
        span2.style.color ="red"
      }
      if (empty2 === e.target.innerText) {
        movedElement.appendChild(div)
        console.log(movedElement)
      } else {
        span2.innerHTML = "Wrong!, try again";
        span2.style.color = "red";
      }
    })
  }

  // nextBtn2.addEventListener("click", () => {
  //   document.querySelector(".level2").style.display = "none"
  //   document.querySelector(".loading").style.display = "block"
  //   setTimeout(() => (document.querySelector(".loading").style.display = "none"), 5000)
  // // here comes the level 2    
  // })
}
level2Fun();
// ==================== end Level2 ==========================
// ===================== welcome function ======================
function welcome(e) {
  e.preventDefault()
  let inputValue = document.getElementById("welcome-input").value
  if (!inputValue == "") {
      document.querySelector(".userName").innerHTML = inputValue[0] + inputValue.slice(1)
      welcomePage.style.display = "none"
      loading.style.display = "block"
      setTimeout(() => (loading.style.display = "none"), 5000)
      setTimeout(() => (level1.style.display = "block"), 5000)
      
  }
}
document.getElementById("formWelcome").addEventListener("submit",welcome)