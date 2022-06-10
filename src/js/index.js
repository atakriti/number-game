let container = document.querySelector(".container");
let span = document.querySelector("span");
let empty = "";
let strong = document.querySelector(".timer1");
function level1() {
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
        span.innerHTML = "Wrong!";
        span.style.color = "red";
      }
      if (!empty == random) {
        alert("hello");
      }
    });
  }
}
level1();


// setInterval(() => {
//    strong.innerHTML = hi--
//     if (h3.innerHTML == 0) {
//         h3.remove()
//         // timerVar = 5
//     }

// },1000)
// setInterval(() => {
//     h3.innerHTML = new Date().toLocaleTimeString()
// }, 1000);
