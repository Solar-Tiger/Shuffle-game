const container = document.querySelector(".container");
const text = document.querySelector(".text")
const btn = document.querySelector(".button")
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")

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

const randFunc = [shuffle1, shuffle2, shuffle3];

btn.addEventListener("click", () => {
    randFunc[Math.floor(Math.random() * randFunc.length)]();
});

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

const testing = document.querySelector(".test");
// ---------------------------------------------------------------
// ---------------------------------------------------------------
//                Running 1 function before another
// ---------------------------------------------------------------
// ---------------------------------------------------------------
function test() {
    console.log("I am test")
}
function crash() {
    console.log("I am Crash")
}

setTimeout(test, 2000);
crash()
// ---------------------------------------------------------------
// ---------------------------------------------------------------
//                  Controller function 2 ways
// ---------------------------------------------------------------
// ---------------------------------------------------------------
const controller = function() {
    console.log("PS5 Controller")
}

testing.addEventListener("click", controller)

testing.addEventListener("click", function() {
    console.log("PS5 Controller")
})
// ---------------------------------------------------------------
// ---------------------------------------------------------------
//             Anonymous Function and Arror Function
// ---------------------------------------------------------------
// ---------------------------------------------------------------
setTimeout(function() {
    console.log("Anonymous Function")
}, 3000)

setTimeout( () => {
    console.log("Anonymous Function")
}, 3000)
// ---------------------------------------------------------------
// ---------------------------------------------------------------
//             .addEventListener Callback Function
// ---------------------------------------------------------------
// ---------------------------------------------------------------
testing.addEventListener("click", function() {
    setTimeout(() => 
    console.log("I am Groot"),
        3000)

    typing()
    }
)

const typing = function() {
    console.log("I'm typing a message...")
}