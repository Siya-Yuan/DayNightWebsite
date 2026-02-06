
let windowHoverSound = "assets/windowMove.mp3";
let hoverSound = "assets/p4.mp3";
let clickSound = "assets/click.mp3";
let buttonClickSound = "assets/buttonClick.mp3"; //allows sound to overlap if user spams it if we create a new sound instance everytime


//variables to make sound effects
let icon1 = document.querySelector(".icon1");
let icon2 = document.querySelector(".icon2");
let icon3 = document.querySelector(".icon3");
let nightmode = document.querySelector(".nightmode");

let home = document.querySelector(".home");
let notes = document.querySelector(".notes");

let scrollUpBtn2 = document.querySelector("#upBtn");
let scrollDownBtn2 = document.querySelector("#downBtn");

let windowHover = document.querySelector(".window");


//hover
icon1.addEventListener("mouseenter", HoverSound);
icon2.addEventListener("mouseenter", HoverSound);
icon3.addEventListener("mouseenter", HoverSound);
nightmode.addEventListener("mouseenter", HoverSound);

home.addEventListener("mouseenter", HoverSound);
notes.addEventListener("mouseenter", HoverSound);

windowHover.addEventListener("mouseenter", HoverWindowSound);

//click
nightmode.addEventListener("click", ClickSound);
scrollUpBtn2.addEventListener("click", ButtonPressSound);
scrollDownBtn2.addEventListener("click", ButtonPressSound);

//button click 
function HoverWindowSound() {
    let abc = new Audio(windowHoverSound);
    abc.volume = 0.3;
    abc.play();
}

function HoverSound (){
    let abc = new Audio(hoverSound);

    abc.play();
}

function ClickSound () {
    let abc = new Audio(clickSound);
    abc.play();
}

function ButtonPressSound() {
    //buttonClickSound.currentTime = 0;
    let abc = new Audio(buttonClickSound);
    //buttonClickSound.play();
    abc.play();
}



//Scroll buttons
let scrollUpBtn = document.getElementById("upBtn");
let scrollDownBtn = document.getElementById("downBtn");
let windowPage = document.getElementById("windowPage");


//toggle day and night button
let modeBtn = document.getElementById("toggleBtn");

//darkmode images
let kas1 = document.getElementById("kas1");
let kas2 = document.getElementById("kas2");
let kas3 = document.getElementById("kas3");

let taskbarKas = document.getElementById("taskbarKas");

let sky = document.getElementById("sky");

//darkmode text
let modeText = document.getElementById("modeText");

//saving toggle state
if (localStorage.getItem("darkmode") == "true") {
    document.body.classList.add("darkmode");


}


scrollUpBtn.addEventListener("click", scrollUpFunction);
scrollDownBtn.addEventListener("click", scrollDownFunction)

modeBtn.addEventListener("click", toggleFunction);

function scrollUpFunction (){
    windowPage.scrollBy( {
        top: -70,
        behavior: 'smooth'
    })
}

function scrollDownFunction () {
    windowPage.scrollBy( {
        top: 70,
        behaviour: 'smooth'
    })
}

function toggleFunction() {
    var element = document.body;
    element.classList.toggle("darkmode");

    


    if (element.classList.contains("darkmode")) {
        kas1.src = "assets/nightkas1.png";
        kas2.src = "assets/nightkas2.png";
        kas3.src = "assets/nightkas3.png";
        sky.src = "assets/moon.png";

        taskbarKas.src = "assets/kasTask2.png";
        

        modeText.textContent = "Nighttime";
       // windowText.textContent = "did it work";

    } else {
        kas1.src = "assets/daytimeKas1.png";
        kas2.src = "assets/daytimeKas2.png";
        kas3.src = "assets/daytimeKas3.png";
        sky.src = "assets/finalSun.png";

        taskbarKas.src = "assets/realkas.png";

        modeText.textContent = "Daytime";
      // windowPage.textContent = "did it work";

    }
    let darkmodeON = element.classList.contains("darkmode");
    localStorage.setItem("darkmode", darkmodeON);
}

document.addEventListener("DOMContentLoaded", () => {
    let darkmodeON = localStorage.getItem("darkmode") === "true";

    if (darkmodeON) {
        document.body.classList.add("darkmode");

        kas1.src = "assets/nightkas1.png";
        kas2.src = "assets/nightkas2.png";
        kas3.src = "assets/nightkas3.png";
        sky.src = "assets/moon.png";
        taskbarKas.src = "assets/kasTask2.png";
        modeText.textContent = "Nighttime";
       // windowPage.textContent = "did it wgjhgj";
    }
})