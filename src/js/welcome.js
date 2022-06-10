let level1 = document.querySelector(".level1")
level1.style.display = "block"
let welcomePage = document.querySelector(".welcome-page")
welcomePage.style.display = "none"
let loading = document.querySelector(".loading")
loading.style.display = "none"
function welcome(e) {
    e.preventDefault()
    let inputValue = document.getElementById("welcome-input").value
    if (!inputValue == "") {
        document.querySelector(".userName").innerHTML = inputValue
        welcomePage.style.display = "none"
        loading.style.display = "block"
        setTimeout(() => (loading.style.display = "none"), 5000)
        setTimeout(() => (level1.style.display = "block"), 5000)
        
    }
}
document.getElementById("formWelcome").addEventListener("submit",welcome)