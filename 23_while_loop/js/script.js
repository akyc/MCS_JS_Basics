console.log("You are at " + window.location);

const items = document.getElementsByTagName('li');
let i = 0;
while(i < items.length){
    console.log(items[i], i);
    i++;
}

console.log(items);
