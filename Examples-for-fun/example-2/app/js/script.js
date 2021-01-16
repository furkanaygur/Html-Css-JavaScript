const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade")
const body = document.querySelector("body");

btnHamburger.addEventListener("click", function(){
    if(header.classList.contains("header-open")){
        body.classList.remove("noscroll");
        header.classList.remove("header-open");
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");
        fadeElems.forEach(element => {
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
            
        });

    }
    else {
        body.classList.add("noscroll");
        header.classList.add("header-open");
        overlay.classList.remove("fade-out");
        overlay.classList.add("fade-in");
        fadeElems.forEach(element => {
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        });
    }
});