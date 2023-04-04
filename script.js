"use strict"

//Ищем текст заголовки в зеро блоке 
const lead_item = Array.from(document.querySelectorAll('.copy_my_lead'));
console.log(lead_item);

for ( let i = 0; i <lead_item.length; i++) {
const arr = lead_item[i];
const textNode = document.createTextNode(lead_item[i].textContent);
lead_item[i] = textNode.textContent;
};

//вставялем в нужную область
let lead_to_paste = document.querySelectorAll('.lead_paste');
for (let i = 0; i < lead_to_paste.length; i++) {
lead_to_paste[i].textContent = lead_item[i];
};

/////////

//Ищем текст описание зеро блоке 
const descr_item = Array.from(document.querySelectorAll('.copy_my_descr'));
console.log(descr_item);

for ( let i = 0; i <descr_item.length; i++) {
const arr = descr_item[i];
const textNode = document.createTextNode(descr_item[i].textContent);
descr_item[i] = textNode.textContent;
};

//вставялем в нужную область
let descr_to_paste = document.querySelectorAll('.descr_paste');
for (let i = 0; i < descr_to_paste.length; i++) {
descr_to_paste[i].textContent = descr_item[i];
};

////////

//Ищем капчу описание в зеро блоке 
const capt_item = Array.from(document.querySelectorAll('.copy_my_capt'));
console.log(capt_item);

for ( let i = 0; i <capt_item.length; i++) {
const arr = capt_item[i];
const textNode = document.createTextNode(capt_item[i].textContent);
capt_item[i] = textNode.textContent;
};

let capt_to_paste = document.querySelectorAll('.capt_paste');
for (let i = 0; i < capt_to_paste.length; i++) {
capt_to_paste[i].textContent = capt_item[i];
};


const images = Array.from(document.querySelectorAll(".prod_img"));
const img_paste = document.querySelectorAll(".img_paste");

console.log(`Найдено ${images.length} изображений`);

for (let i = 0; i < img_paste.length; i++) {
  const img = document.createElement("img");
  img.src = images[i].src;
  img_paste[i].innerHTML = ""; // удаляем уже имеющееся изображение
  img_paste[i].appendChild(img); // добавляем новое изображение
}

console.log(`Добавлено ${images.length} изображений в слайд-шоу`);