// Menu zichtbaar via mouseover op hamburger //

let hamburgerMenuStatus = true;

const hamburgerMenu = function () {
    const visible = document.querySelector(".hamburger-menu");
    const slide = document.querySelector(".slide")

    if (hamburgerMenuStatus) {
        visible.style.visibility = "visible";
        slide.style.transform = "translateX(300px)";
        slide.style.transition = "ease-in-out 300ms";
        hamburgerMenuStatus = false;
    }

    else if (!hamburgerMenuStatus) {
        visible.style.visibility = "hidden";
        slide.style.transform = "none";
        slide.style.transition = "ease-in-out 300ms";
        hamburgerMenuStatus = true;
    }
}

document.getElementById("hamburger").addEventListener("mouseover", hamburgerMenu);


// choose the colors from menu //

const homeButton = document.getElementById("home-radio");
const redButton = document.getElementById("red-radio");
const orangeButton = document.getElementById("orange-radio");
const purpleButton = document.getElementById("purple-radio");
const greenButton = document.getElementById("green-radio");


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



