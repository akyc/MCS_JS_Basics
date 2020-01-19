//const form = document.querySelector('form');

const form = document.forms[0];
const insert = document.querySelector('.total');

console.log(form);

form.onsubmit = function(e) {
    e.preventDefault();
    let a = (form.elements.angle.value * Math.PI)/180;
    insert.innerHTML = Math.sin(a);
    console.log(a);
}   