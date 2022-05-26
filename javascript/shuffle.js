const container = document.querySelector(".container");
const btn = document.querySelector(".button")
const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
const right = document.querySelector(".right")
const wrong = document.querySelector(".wrong")
const wrong2 = document.querySelector(".wrong2")
const disnone = document.querySelector(".disnone")
const disnonexy = document.querySelector(".disnonexy")
const disblock = document.querySelector(".disblock")
const disblockxy = document.querySelector(".disblockxy")
const cube = document.querySelector(".cube")
const cube2 = document.querySelector(".cube2")
const cross = document.querySelector(".cross")
const cross2 = document.querySelector(".cross2")

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

disnone.addEventListener("click", function() {
    setTimeout( function() {
        cube.style.display = "none"
        cube2.style.display = "none"
    }, 3000)
        cube.style.animation = "cubes 3s linear"
        cube2.style.animation = "cubes 3s linear"
})
disblock.addEventListener("click", () => {
    cube.style.display = "flex"
    cube2.style.display = "flex"
})
disnonexy.addEventListener("click", () => {
    cross.style.display = "none"
    cross2.style.display = "none"
})
disblockxy.addEventListener("click", () => {
    cross.style.display = "flex"
    cross2.style.display = "flex"
})

const randFunc = [shuffle1, shuffle2, shuffle3];

btn.addEventListener("click", () => {
    randFunc[Math.floor(Math.random() * randFunc.length)]();
});

function shuffle1() {
    box1.style.animation = "fade 4s linear forwards, box1 2.5s linear 16s forwards"
    right.style.animation = "answers 6s linear 4s"
    box2.style.animation = "fade 4s linear forwards, box2 2.5s linear 16s forwards"
    wrong.style.animation = "answers 6s linear 4s"
    box3.style.animation = "fade 4s linear forwards, box3 2.5s linear 16s forwards"
    wrong2.style.animation = "answers 6s linear 4s"
}

function shuffle2() {
    box1.style.animation = "fade 4s linear forwards, box4 2.5s linear 16s forwards"
    right.style.animation = "answers 6s linear 4s"
    box2.style.animation = "fade 4s linear forwards, box5 2.5s linear 16s forwards"
    wrong.style.animation = "answers 6s linear 4s"
    box3.style.animation = "fade 4s linear forwards, box6 2.5s linear 16s forwards"
    wrong2.style.animation = "answers 6s linear 4s"
}
function shuffle3() {
    box1.style.animation = "fade 4s linear forwards, box7 2.5s linear 16s forwards"
    right.style.animation = "answers 6s linear 4s"
    box2.style.animation = "fade 4s linear forwards, box8 2.5s linear 16s forwards"
    wrong.style.animation = "answers 6s linear 4s"
    box3.style.animation = "fade 4s linear forwards, box9 2.5s linear 16s forwards"
    wrong2.style.animation = "answers 6s linear 4s"
}
document.addEventListener("click", e => {
    if (e.target.matches(".button2")) {
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