let container = document.querySelector(".container");
let span = document.querySelector(".number");
let empty = "";
let strong = document.querySelector(".timer1");
function level1Fun() {
  for (let i = 0; i < 25; i++) {
    let div = document.createElement("div");
    let random = Math.ceil(Math.random() * 10);
    let divContent = document.createTextNode(random);
    div.appendChild(divContent);
    container.appendChild(div);
    // div.id = i
    

    div.addEventListener("click", (e) => {
      if (empty == "") {
          empty += e.target.innerText;
          span.innerHTML = empty;
          span.style.color = "red"
        //   span.style.fontSize = "2rem"
        // span.innerHTML = empty
      }
      if (empty === e.target.innerText) {
        div.remove();
      } else {
        span.innerHTML = "Wrong!, try again";
        span.style.color = "red";
      }
      if (!empty == random) {
        alert("hello");
      }
    });
  }
}
level1Fun();

let timeVariable = 5
setInterval(() => {
   strong.innerHTML = timeVariable--
    if (strong.innerHTML == 0) {
      strong.remove()
        // timerVar = 5
    }

},1000)



// setInterval(() => {
//     h3.innerHTML = new Date().toLocaleTimeString()
// }, 1000);
