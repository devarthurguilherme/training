window.addEventListener("scroll", scrollMenu);

function scrollMenu() {
    const header = document.querySelector("header").classList;
    header.toggle('scrollEffect', window.scrollY > 0)
}

//Accordion
let accordion = document.querySelectorAll(".accordion");
for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function (){
        this.classList.toggle("active");

        let painel = this.nextElementSibling;
        if(painel.style.display === "block") {
            painel.style.display = "none";
        } else {
            painel.style.display = "block";
        }
    })
}


//Caroussel
const customerContainer = document.querySelectorAll(".customerContainer");
const customerCard = document.querySelector(".customerCard")

const rightBtn = document.querySelectorAll(".rightBtn");
const leftBtn = document.querySelectorAll(".leftBtn");

customerContainer.forEach((card, i) => {

    rightBtn[i].addEventListener('click', () => {
        card.scrollLeft += customerCard.offsetWidth;
    });

    leftBtn[i].addEventListener('click', () => {
        card.scrollLeft -= customerCard.offsetWidth;
    });
})