console.log("You are at " + window.location);

const buttons = document.querySelectorAll('button');

for (button of buttons){
    button.style.backgroundColor = 'blue';
}
// for (key in buttons){
//     buttons[key].style.backgroundColor = "red";
// }
console.log(count);
let person = {
    name: 'Andrew',
    surname: 'Zyuzin',
    teacher: false 
}

for (key in person){
    console.log(person[key]);
}