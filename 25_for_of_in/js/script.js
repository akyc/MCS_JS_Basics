console.log("You are at " + window.location);

const buttons = document.querySelectorAll('button');

for (button of buttons){
    button.style.backgroundColor = 'blue';
}
for (var key in buttons){
    buttons[key].style.backgroundColor = "red";
}
let person = {
    name: 'Andrew',
    surname: 'Zyuzin',
    teacher: false 
}

for (key in person){
    console.log(person[key]);
}