console.log("You are at " + window.location);

const buttons = document.querySelectorAll('button');
const buttonsNew = document.querySelectorAll('.mybutton');
console.log(buttons.length);
console.log(buttonsNew.length);
let counter = 0;
for (button of buttons){
    button.style.backgroundColor = 'blue';
    counter = counter + 1;
}

for (var key in buttonsNew){
    buttonsNew[key].innerHTML = "go!";
    buttonsNew[key].style.background = "red";
    console.log(key);
}
