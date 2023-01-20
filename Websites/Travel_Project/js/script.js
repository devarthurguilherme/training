//Scroll Effect
window.addEventListener("scroll", scrollMenu);

function scrollMenu() {
    const header = document.querySelector("header").classList;
    const sideNav = document.querySelector("#sideNav").classList;
    header.toggle('scrollEffect', window.scrollY > 0)
    sideNav.toggle('scrollEffect', window.scrollY > 0)
}

//Accordion
let accordion = document.querySelectorAll(".accordion");//to verify const
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

//Mobile Menu
const btnResponsiveMenu = document.querySelector("#toggleMenu");
btnResponsiveMenu.addEventListener("click", myMenuResponsive)

function myMenuResponsive() {
    
    const sideNav = document.querySelector("#sideNav");

    if(btnResponsiveMenu.classList.toggle("responsiveActived")) {
        console.log("Menu Responsive Actived")
        sideNav.classList.toggle("responsiveActived")//Add Class
    } else {
        console.log("Menu Responsive Desactived!")
        sideNav.classList.toggle("responsiveActived")//Remove Class
    }

}