var container = document.querySelector(".container");
var text = document.getElementById("text");

container.addEventListener("click", ({target}) => {
    const chance = target.closest(".guess");
    if (chance) {
        console.log(target.textContent)
    }
})

// guess.forEach(guess => {
//     guess.addEventListener("click", random => {
//         if (guess1.clicked == true) {
//             text.innerHTML = "Right"
//         }
//         else if (guess2.clicked && guess3.clicked == true) {
//             text.innerHTML = "Wrong"
//         }
//         else {
//             text.innerHTML = "Bogus"
//         }
//     });
// });

var randFunc = [shuffle1, shuffle2, shuffle3];

document.querySelector(".button").addEventListener("click", () => {randFunc[Math.floor(Math.random() * randFunc.length)]();});

function shuffle1() {
    const box1 = document.getElementById("box1")
    const box2 = document.getElementById("box2")
    const box3 = document.getElementById("box3")

    box1.style.animation = "box1 2.5s linear forwards"
    box2.style.animation = "box2 2.5s linear forwards"
    box3.style.animation = "box3 2.5s linear forwards"

    // document.getElementById("hidden1").style.animation = "hidden1 3s forwards"
    // document.getElementById("hidden2").style.animation = "hidden2 3s forwards"
    // document.getElementById("hidden3").style.animation = "hidden3 3s forwards"
}

function shuffle2() {
    const box1 = document.getElementById("box1")
    const box2 = document.getElementById("box2")
    const box3 = document.getElementById("box3")

    box1.style.animation = "box4 2.5s linear forwards"
    box2.style.animation = "box5 2.5s linear forwards"
    box3.style.animation = "box6 2.5s linear forwards"

    // document.getElementById("hidden1").style.animation = "hidden1 3s forwards"
    // document.getElementById("hidden2").style.animation = "hidden2 3s forwards"
    // document.getElementById("hidden3").style.animation = "hidden3 3s forwards"
}
function shuffle3() {
    const box1 = document.getElementById("box1")
    const box2 = document.getElementById("box2")
    const box3 = document.getElementById("box3")

    box1.style.animation = "box7 2.5s linear forwards"
    box2.style.animation = "box8 2.5s linear forwards"
    box3.style.animation = "box9 2.5s linear forwards"

    // document.getElementById("hidden1").style.animation = "hidden1 3s forwards"
    // document.getElementById("hidden2").style.animation = "hidden2 3s forwards"
    // document.getElementById("hidden3").style.animation = "hidden3 3s forwards"
}