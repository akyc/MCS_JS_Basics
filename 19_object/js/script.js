let person = {
    name : "Андрей",
    surname : "Зюзин",
    age : 30,
    teacher  : true,
    sayHello: function(){return 'Привет ' + this.name}
};

console.log(person.name);
console.log(person.sayHello());

person.canCode = true;
console.log(person);

person.canCode = false;
console.log(person);