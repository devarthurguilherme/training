window.addEventListener("scroll", scrollMenu);

function scrollMenu() {
    const header = document.querySelector("header").classList;
    header.toggle('scrollEffect', window.scrollY > 0)
}