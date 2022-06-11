let container = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let container3 = document.querySelector(".container3");
let span = document.querySelector(".number");
let span2 = document.querySelector(".number2");
let span3 = document.querySelector(".number3");
let empty = "";
let empty2 = "";
let empty3 = "";
let strong = document.querySelector(".timer1");
let strong2 = document.querySelector(".timer2");
let strong3 = document.querySelector(".timer3");
let movedElement = document.querySelector(".movedElement")
let userNameResult = document.querySelector(".userNameResult")
let resultSpan = document.querySelector(".resultSpan")

// let movedElement2 = document.querySelector(".movedElement2")
// ===================
let level1 = document.querySelector(".level1")
level1.style.display = "none"
let level2 = document.querySelector(".level2")
level2.style.display = "none"
let level3 = document.querySelector(".level3")
level3.style.display  ="none"
let welcomePage = document.querySelector(".welcome-page")
// welcomePage.style.display = "none"
let loading = document.querySelector(".loading")
loading.style.display = "none"

let loading2 = document.querySelector(".loading2")
loading2.style.display = "none"

let loading3 = document.querySelector(".loading3")
loading3.style.display = "none"

let loading4 = document.querySelector(".loading4")
loading4.style.display = "none"




let result = document.querySelector(".result")
result.style.display = "none"
// ======================== instructions =====================
let close = document.querySelector(".close")
let instructions = document.querySelector(".instructions")
// instructions.style.display = "none"
// ================= end instructions ===================

let yesBtn = document.getElementById("yesBtn")
let nextBtn = document.querySelector("#next")
let nextBtn2 = document.querySelector("#next2")
let nextBtn3 = document.querySelector("#next3")
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
    document.querySelector(".level1").remove()
    loading2.style.display = "block"

    setTimeout(() => {
     loading2.style.display = "none"

    }, 5000)
    
    setTimeout(() => (document.querySelector(".level2").style.display = "block"), 5000)
  })
}
level1Fun();
// =================================== end level1 =====================
// ============================ timecounter ================
let timeVariable = 12

function timerFunction() {
  
    strong.innerHTML = timeVariable--
   
  
  if (strong.innerHTML == 0) {
    strong.remove()
     timeOut.style.display = "block"
     setTimeout(() => (timeOut.style.display = "none"),1000)
     setTimeout(() => (container.style.display = "none"),1000)
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
  for (let i = 0; i < 40; i++){
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

      } else {
        span2.innerHTML = "Wrong!, try again";
        span2.style.color = "red";
      }
    })
  }

  nextBtn2.addEventListener("click", () => {
    document.querySelector(".level2").remove()
    loading3.style.display = "block"
    setTimeout(() => (loading3.style.display = "none"), 5000)
    setTimeout(() => (document.querySelector(".level3").style.display = "block"), 5000)

  })
}
level2Fun();
// ==================== end Level2 ==========================
// =============== level2 timer ==============
let timeVariable2 = 12

function timerFunction2() {
  
    strong2.innerHTML = timeVariable2--
   
  
  if (strong2.innerHTML == 0) {
    strong2.remove()
     timeOut.style.display = "block"
    setTimeout(() => (timeOut.style.display = "none"), 2000)
    setTimeout(() => (container2.style.display = "none"),2000)

    
       // timerVar = 5
   }
 
}
function timerCall2() {
  if (level2.style.display === "block") {
    timerFunction2()
  }
}

setInterval(timerCall2, 1000)
// ============================================
// ============================== level 3 =====================
function level3Fun() {
  for (let i = 0; i < 70; i++){
    let div = document.createElement("div")
    let random = Math.ceil(Math.random() * 10)
    let divContent = document.createTextNode(random)
    div.appendChild(divContent)
    container3.appendChild(div)
    div.addEventListener("click", (e) => {
      if (empty3 == "") {
        empty3 += e.target.innerText;
        span3.innerHTML = empty3;
        span3.style.color = "red"
      }
      if (empty3 === e.target.innerText) {
        movedElement.appendChild(div)
        resultSpan.innerHTML = movedElement.innerHTML.length

      } else {
        span3.innerHTML = "Wrong!, try again";
        span2.style.color = "red";
      }
    })
  }
  nextBtn3.addEventListener("click", () => {
    document.querySelector(".level3").remove()
   loading4.style.display = "block"
    setTimeout(() => (loading4.style.display = "none"), 5000)
    setTimeout(() => (result.style.display = "block"), 5000)

  })
}
level3Fun()
// =========================== end level3 ==================
// =============== level2 timer ==============
let timeVariable3 = 15

function timerFunction3() {
  
    strong3.innerHTML = timeVariable3--
   
  
  if (strong3.innerHTML == 0) {
    strong3.remove()
     timeOut.style.display = "block"
    setTimeout(() => (timeOut.style.display = "none"), 2000)
    setTimeout(() => (container3.style.display = "none"),2000)
    
       // timerVar = 5
   }
 
}
function timerCall3() {
  if (level3.style.display === "block") {
    timerFunction3()
  }
}

setInterval(timerCall3, 1000)
// ============================================
// ===================== welcome function ======================
function welcome(e) {
  e.preventDefault()
  let inputValue = document.getElementById("welcome-input").value
  if (!inputValue == "") {
      document.querySelector(".userName").innerHTML = inputValue
      userNameResult.innerHTML = inputValue
      welcomePage.style.display = "none"
      loading.style.display = "block"
      setTimeout(() => (loading.style.display = "none"), 5000)
    setTimeout(() => (level1.style.display = "block"), 5000)
  }
}
document.getElementById("formWelcome").addEventListener("submit", welcome)

// ========================= Result ======================
yesBtn.addEventListener("click", () => {
  // result.remove()
  // welcomePage.style.display = "block"
  document.location.reload(true)
})


// =================== close btn ==============
close.addEventListener("click", () => {
  instructions.remove()
})