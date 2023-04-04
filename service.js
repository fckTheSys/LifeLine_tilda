"use strict";

let burgerMenu = document.querySelector('.burger_menu');
let navList = document.querySelector('.nav_list');
let buyBtn = document.querySelector('.buy_btn');
let retailList = document.querySelector('.retailers_list');
let overlayOpen = document.querySelector('.overlay');

buyBtn.addEventListener("click", () => {
    retailList.classList.toggle("open");
    buyBtn.classList.toggle("open");
    burgerMenu.classList.remove("open");
    navList.classList.remove("open");
    overlayOpen.classList.toggle("open");

});

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("open");
    navList.classList.toggle("open");
    retailList.classList.remove("open");
    buyBtn.classList.remove("open");
    overlayOpen.classList.toggle("open");
});

let lnk = document.querySelectorAll(".nav-link, .retail_item").forEach(n => n.addEventListener("click", () => {
   burgerMenu.classList.remove("open");
   navList.classList.remove("open");
   overlayOpen.classList.remove("open");
   retailList.classList.remove("open");
}));


let animItems = document.querySelectorAll('.slide_in');
console.log(animItems);

window.addEventListener('scroll', showItems);

showItems();

function showItems() {
    const triggerBottom = window.innerHeight / 2;
    animItems.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('slide');
        }
        else
            box.classList.remove('slide');
    });
};

let activePoints = document.querySelectorAll('.open');
console.log(activePoints);


function hideAll() {
    let activePoints = document.querySelectorAll('.open');
    const number_el = activePoints.length
    activePoints.forEach(elements => {
        if (number_el > 0) {
           elements.classList.remove('open');
        }
    });
};
 
console.log(activePoints.length);


overlayOpen.addEventListener('click', hideAll);
console.log('hello world');