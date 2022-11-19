let arrow = document.querySelector(".fa-solid fa-arrow-right");
let container = document.querySelector(".container");

function arrowBtn() {

    if(!container.classList.contains("hidden")) {
        container.classList.add("hidden");
    } else {
        container.classList.remove("hidden");
    };

};