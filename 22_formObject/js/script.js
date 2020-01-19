//const form = document.querySelector('form');

const form = document.forms;
const insert = document.querySelector('.total');

console.log(form);

form.onsubmit = function(e) {
    e.preventDefault();
    insert.innerHTML = form.elements.quantility.value * form.elements.price.value;
}   