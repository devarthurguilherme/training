/* What do I want? -> A button that transform the page in English Version. 
To create a animation of transition Portuguese to English version */


function changeLanguage() {

    let container = document.querySelector(".container");

    if(container.classList.contains("change")) {
        container.classList.remove("change");
    } else {
        container.classList.add("change");
    }

}