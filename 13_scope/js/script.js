console.log("You are at " + window.location);

var a = 'hi';

function myFunk(){
    a = 'hello';
    return a;
}

console.log(a);

function myFunk2(){
    var b = 3;
    console.log(b);
}

myFunk2();

if(true){
    var c = 5;
    let d = 6;
}

console.log(c);
console.log(d);