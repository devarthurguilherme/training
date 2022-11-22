/* Side Navigation */
let arrow = document.querySelector(".fa-solid fa-arrow-right");
let container = document.querySelector(".container");

function arrowBtn() {

    if(!container.classList.contains("hidden")) {
        container.classList.add("hidden");
    } else {
        container.classList.remove("hidden");
    };

};
/* End of Side Navigation */
/* Gallery */
let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");

for(let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        for(let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
}
/* End of Gallery */