window.addEventListener('scroll', scrollMenu);

function scrollMenu() {
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
}