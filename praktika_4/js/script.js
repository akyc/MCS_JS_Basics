/* Ваша задача

1. Написать такой JS, который по нажатию на кнопку с классом .request изменит стиль блока .popup на строку flex

2. По нажатию на элемент с классом closePopup — изменит стиль .popup обратно на ‘none’

3. По нажатию на элемент .openMenu изменит свойство left у элемента .menu на значение 0

4. По нажатию на элемент .closeMenu — изменит свойство left у .menu обратно на строку ‘-50vw’ */

let button = document.querySelector('.request');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.closePopup');
let openMenu = document.querySelector('.openMenu');
let menu = document.querySelector('.menu');
let closeMenu = document.querySelector('.closeMenu');

button.addEventListener('click', ()=>{
    popup.style['display'] = 'flex';
});
closePopup.addEventListener('click', ()=>{
    popup.style['display'] = 'none';
});
openMenu.addEventListener('click', ()=>{
    menu.style['left'] = '0';
});
closeMenu.addEventListener('click', ()=>{
    menu.style['left'] = '-50vw';
});