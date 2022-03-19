// Menu zichtbaar via click op hamburger //

let hamburgerMenuStatus = true;

let hamburgerMenu = function () {
    let visible = document.querySelector(".hamburger-menu");
    let slide = document.querySelector(".slide")

    if (hamburgerMenuStatus === true) {
        visible.style.visibility = "visible";
        slide.style.transform = "translateX(300px)";
        slide.style.transition = "ease-in-out 300ms";
        hamburgerMenuStatus = false;
    }

    else if (hamburgerMenuStatus === false) {
        visible.style.visibility = "hidden";
        slide.style.transform = "none";
        slide.style.transition = "ease-in-out 300ms";
        hamburgerMenuStatus = true;
    }
}


// choose the colors from menu //

let homeButton = document.getElementById("home-button");
let redButton = document.getElementById("red-button");
let orangeButton = document.getElementById("orange-button");
let purpleButton = document.getElementById("purple-button");
let greenButton = document.getElementById("green-button");


homeButton.addEventListener('click', function () {
    body.classList.add("body-home");
    body.classList.remove("body-red", "body-orange", "body-purple", "body-green");
    document.getElementById("colortext").innerHTML = "The selected color is: Home (Grey)";
});

redButton.addEventListener('click', function () {
    body.classList.add("body-red");
    body.classList.remove("body-home", "body-orange", "body-purple", "body-green");
    document.getElementById("colortext").innerHTML = "The selected color is: Red";
});

orangeButton.addEventListener('click', function () {
    body.classList.add("body-orange");
    body.classList.remove("body-home", "body-red", "body-purple", "body-green");
    document.getElementById("colortext").innerHTML = "The selected color is: Orange";
});

purpleButton.addEventListener('click', function () {
    body.classList.add("body-purple");
    body.classList.remove("body-home", "body-red", "body-orange", "body-green");
    document.getElementById("colortext").innerHTML = "The selected color is: Purple";
});

greenButton.addEventListener('click', function () {
    body.classList.add("body-green");
    body.classList.remove("body-home", "body-red", "body-orange", "body-purple");
    document.getElementById("colortext").innerHTML = "The selected color is: Green";
});



