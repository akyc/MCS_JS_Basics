console.log("You are at " + window.location);

function sayHi() {
    return 'Привет, студент!';
}

console.log(sayHi());
//alert(sayHi());
document.body.innerHTML = sayHi();
document.write(sayHi());

function sayName(name){
    return 'Привет ' + name;
}

console.log(sayName('Андрей'));