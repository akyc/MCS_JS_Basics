const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByTagName('myClass');
const byId = document.getElementById('myId');

console.log(byTag, byClass, byId);

const allBySelector = document.querySelectorAll('.coolClass.mine');
const firstBySelector = document.querySelector('div');
console.log(allBySelector, firstBySelector);
const quest = prompt('Что написать на странице?');
byId.innerHTML = `<h2>${quest}</h2>`;
firstBySelector.innerHTML = "firstBySelector div";