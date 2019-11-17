console.log("You are at " + window.location);

/* let myText = function(element, text){
    element.innerHTML = text;
}; */

let myText = (element, text) => {
    element.innerHTML = text;
}

myText(document.body, 'Привет!');