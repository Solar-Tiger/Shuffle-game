const container = document.querySelector(".container")
const btn = document.querySelector(".button")
const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
const right = document.querySelector(".right")
const wrong = document.querySelector(".wrong")
const wrong2 = document.querySelector(".wrong2")
const disnone = document.querySelector(".disnone")
const cube = document.querySelector(".cube")
const cube2 = document.querySelector(".cube2")
const cross = document.querySelector(".cross")
const cross2 = document.querySelector(".cross2")
const text = document.querySelector(".text")

let a
let b

const randFunc = [shuffle1, shuffle2, shuffle3];

btn.addEventListener("click", () => {
    randFunc[Math.floor(Math.random() * randFunc.length)]();
});

function shuffle1() {
        a = undefined
        box1.style.animation = "cubes 3s linear"
        box2.style.animation = "cubes 3s linear"
        box3.style.animation = "cubes 3s linear"
    setTimeout( function() {
        box1.style.display = "none"
        box2.style.display = "none"
        box3.style.display = "none"
    }, 3000)
    setTimeout( function() {
        right.style.display = "flex"
        right.style.animation = "none"
        right.style.opacity = "0"
        wrong.style.display = "flex"
        wrong.style.animation = "none"
        wrong.style.opacity = "0"
        wrong2.style.display = "flex"
        wrong2.style.animation = "none"
        wrong2.style.opacity = "0"
    }, 3100)
    setTimeout( function() {
        right.style.animation = "cross 3s linear forwards"
        wrong.style.animation = "cross 3s linear forwards"
        wrong2.style.animation = "cross 3s linear forwards"
    }, 3300)
    setTimeout( function() {
        right.style.animation = "cross2 3s linear forwards"
        wrong.style.animation = "cross2 3s linear forwards"
        wrong2.style.animation = "cross2 3s linear forwards"
    }, 6400)
    setTimeout( function() {
        right.style.display = "none"
        wrong.style.display = "none"
        wrong2.style.display = "none"
    }, 9500)
    setTimeout( function() {
        box1.style.display = "flex"
        box1.style.animation = "none"
        box1.style.opacity = "0"
        box2.style.display = "flex"
        box2.style.animation = "none"
        box2.style.opacity = "0"
        box3.style.display = "flex"
        box3.style.animation = "none"
        box3.style.opacity = "0"
    }, 9700)
    setTimeout( function() {
        box1.style.animation = "cubes2 3s linear forwards, box1 2.5s linear 3.1s forwards"
        box2.style.animation = "cubes2 3s linear forwards, box2 2.5s linear 3.1s forwards"
        box3.style.animation = "cubes2 3s linear forwards, box3 2.5s linear 3.1s forwards"
    }, 9800)
    b = setTimeout(option1, 9800)
}

function shuffle2() {
        a = undefined
        box1.style.animation = "cubes 3s linear"
        box2.style.animation = "cubes 3s linear"
        box3.style.animation = "cubes 3s linear"
    setTimeout( function() {
        box1.style.display = "none"
        box2.style.display = "none"
        box3.style.display = "none"
    }, 3000)
    setTimeout( function() {
        right.style.display = "flex"
        right.style.animation = "none"
        right.style.opacity = "0"
        wrong.style.display = "flex"
        wrong.style.animation = "none"
        wrong.style.opacity = "0"
        wrong2.style.display = "flex"
        wrong2.style.animation = "none"
        wrong2.style.opacity = "0"
    }, 3100)
    setTimeout( function() {
        right.style.animation = "cross 3s linear forwards"
        wrong.style.animation = "cross 3s linear forwards"
        wrong2.style.animation = "cross 3s linear forwards"
    }, 3300)
    setTimeout( function() {
        right.style.animation = "cross2 3s linear forwards"
        wrong.style.animation = "cross2 3s linear forwards"
        wrong2.style.animation = "cross2 3s linear forwards"
    }, 6400)
    setTimeout( function() {
        right.style.display = "none"
        wrong.style.display = "none"
        wrong2.style.display = "none"
    }, 9500)
    setTimeout( function() {
        box1.style.display = "flex"
        box1.style.animation = "none"
        box1.style.opacity = "0"
        box2.style.display = "flex"
        box2.style.animation = "none"
        box2.style.opacity = "0"
        box3.style.display = "flex"
        box3.style.animation = "none"
        box3.style.opacity = "0"
    }, 9700)
    setTimeout( function() {
        box1.style.animation = "cubes2 3s linear forwards, box4 2.5s linear 3.1s forwards"
        box2.style.animation = "cubes2 3s linear forwards, box5 2.5s linear 3.1s forwards"
        box3.style.animation = "cubes2 3s linear forwards, box6 2.5s linear 3.1s forwards"
    }, 9800)
    b = setTimeout(option2, 9800)
}
function shuffle3() {
        a = undefined
        box1.style.animation = "cubes 3s linear"
        box2.style.animation = "cubes 3s linear"
        box3.style.animation = "cubes 3s linear"
    setTimeout( function() {
        box1.style.display = "none"
        box2.style.display = "none"
        box3.style.display = "none"
    }, 3000)
    setTimeout( function() {
        right.style.display = "flex"
        right.style.animation = "none"
        right.style.opacity = "0"
        wrong.style.display = "flex"
        wrong.style.animation = "none"
        wrong.style.opacity = "0"
        wrong2.style.display = "flex"
        wrong2.style.animation = "none"
        wrong2.style.opacity = "0"
    }, 3100)
    setTimeout( function() {
        right.style.animation = "cross 3s linear forwards"
        wrong.style.animation = "cross 3s linear forwards"
        wrong2.style.animation = "cross 3s linear forwards"
    }, 3300)
    setTimeout( function() {
        right.style.animation = "cross2 3s linear forwards"
        wrong.style.animation = "cross2 3s linear forwards"
        wrong2.style.animation = "cross2 3s linear forwards"
    }, 6400)
    setTimeout( function() {
        right.style.display = "none"
        wrong.style.display = "none"
        wrong2.style.display = "none"
    }, 9500)
    setTimeout( function() {
        box1.style.display = "flex"
        box1.style.animation = "none"
        box1.style.opacity = "0"
        box2.style.display = "flex"
        box2.style.animation = "none"
        box2.style.opacity = "0"
        box3.style.display = "flex"
        box3.style.animation = "none"
        box3.style.opacity = "0"
    }, 9700)
    setTimeout( function() {
        box1.style.animation = "cubes2 3s linear forwards, box7 2.5s linear 3.1s forwards"
        box2.style.animation = "cubes2 3s linear forwards, box8 2.5s linear 3.1s forwards"
        box3.style.animation = "cubes2 3s linear forwards, box9 2.5s linear 3.1s forwards"
    }, 9800)
    b = setTimeout(option3, 9800)
}

function option1() {
    a = 1
}
function option2() {
    a = 2
}
function option3() {
    a = 3
}

box1.addEventListener("click", () => {
    if (a === 1) {
        text.innerHTML = "Box 1"
        box1.style.animation = "cubes 3s linear"
        setTimeout( function() {
            box1.style.display = "none"
        }, 3000)
        setTimeout( function() {
            right.style.display = "flex"
            right.style.animation = "none"
            right.style.opacity = "0"
        }, 3000)
        setTimeout( function() {
            right.style.animation = "cross 3s linear forwards"
        }, 3000)
    }
})

box2.addEventListener("click", () => {
    if (a === 1) {
        text.innerHTML = "Box 2"
        box2.style.animation = "cubes 3s linear"
        setTimeout( function() {
            box2.style.display = "none"
        }, 3000)
        setTimeout( function() {
            wrong.style.display = "flex"
            wrong.style.animation = "none"
            wrong.style.opacity = "0"
        }, 3000)
        setTimeout( function() {
            wrong.style.animation = "cross 3s linear forwards"
        }, 3000)
    }
})

box3.addEventListener("click", () => {
    if (a === 1) {
        text.innerHTML = "Box 3"
        box3.style.animation = "cubes 3s linear"
        setTimeout( function() {
            box3.style.display = "none"
        }, 3000)
        setTimeout( function() {
            wrong2.style.display = "flex"
            wrong2.style.animation = "none"
            wrong2.style.opacity = "0"
        }, 3000)
        setTimeout( function() {
            wrong2.style.animation = "cross 3s linear forwards"
        }, 3000)
    }
})

document.addEventListener("click", e => {
    if (e.target.matches(".button2")) {
            box1.style.display = "flex"
            box2.style.display = "flex"
            box3.style.display = "flex"
        setTimeout( function(){
            box1.style.animation = "none"
            box2.style.animation = "none"
            box3.style.animation = "none"
        },500)
        setTimeout( function(){
            box1.style.opacity = "1"
            box2.style.opacity = "1"
            box3.style.opacity = "1"
        }, 800)
        setTimeout( function(){
            box1.style.animation = "box11 1s linear"
            box2.style.animation = "box12 1s linear"
            box3.style.animation = "box13 1s linear"
        }, 1000)
        right.style.display = "none"
        wrong.style.display = "none"
        wrong2.style.display = "none"
        text.innerHTML = "1, 2 or 3?"
    }
})

// ---------------------------------------------------------------
// ---------------------------------------------------------------
//        setTimeout over several fade in/out events
// ---------------------------------------------------------------
// ---------------------------------------------------------------

disnone.addEventListener("click", function() {
    cube.style.animation = "cubes 3s linear"
    cube2.style.animation = "cubes 3s linear"
setTimeout( function() {
    cube.style.display = "none"
    cube2.style.display = "none"
}, 3000)
setTimeout( function() {
    cross.style.display = "flex"
    cross.style.animation = "none"
    cross.style.opacity = "0"
    cross2.style.display = "flex"
    cross2.style.animation = "none"
    cross2.style.opacity = "0"
}, 3100)
setTimeout( function() {
    cross.style.animation = "cross 3s linear forwards"
    cross2.style.animation = "cross 3s linear forwards"
}, 3300)
setTimeout( function() {
    cross.style.animation = "cross2 3s linear forwards"
    cross2.style.animation = "cross2 3s linear forwards"
}, 6300)
setTimeout( function() {
    cross.style.display = "none"
    cross2.style.display = "none"
}, 9400)
setTimeout( function() {
    cube.style.display = "flex"
    cube.style.animation = "none"
    cube.style.opacity = "0"
    cube2.style.display = "flex"
    cube2.style.animation = "none"
    cube2.style.opacity = "0"
}, 9500)
setTimeout( function() {
    cube.style.animation = "cubes2 3s linear forwards"
    cube2.style.animation = "cubes2 3s linear forwards"
}, 9600)
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