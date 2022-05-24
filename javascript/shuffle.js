var container = document.querySelector(".container");
var text = document.querySelector(".text")
var btn = document.querySelector(".button")
var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
var box3 = document.getElementById("box3")

container.addEventListener("click", e => {
    if (e.target.matches(".box1")) {
        text.innerHTML = "Box 1"
    }
    if (e.target.matches(".box2")) {
        text.innerHTML = "Box 2"
    }
    if (e.target.matches(".box3")) {
        text.innerHTML = "Box 3"
    }
})

var randFunc = [shuffle1, shuffle2, shuffle3];

btn.addEventListener("click", (fade) => {
    if (fade.target.matches(".button")) {
        box1.style.animation = "box1fade 5s"
    }
})
btn.addEventListener("click", () => {randFunc[Math.floor(Math.random() * randFunc.length)]();});

function shuffle1() {
    box1.style.animation = "box1 2.5s linear forwards"
    box2.style.animation = "box2 2.5s linear forwards"
    box3.style.animation = "box3 2.5s linear forwards"
}

function shuffle2() {
    box1.style.animation = "box4 2.5s linear forwards"
    box2.style.animation = "box5 2.5s linear forwards"
    box3.style.animation = "box6 2.5s linear forwards"
}
function shuffle3() {
    box1.style.animation = "box7 2.5s linear forwards"
    box2.style.animation = "box8 2.5s linear forwards"
    box3.style.animation = "box9 2.5s linear forwards"
}
document.addEventListener("click", e => {
    if (e.target.matches(".button2")) {
        text.innerHTML = "Right or Wrong?"
        box1.style.animation = "box11 2s linear"
        box2.style.animation = "box12 2s linear"
        box3.style.animation = "box13 2s linear"
    }
})