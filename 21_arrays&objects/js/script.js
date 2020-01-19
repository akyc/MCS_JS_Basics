console.log("You are at " + window.location);

const cools = document.getElementsByClassName('cool');
for (let i = 0; i < cools.length; i++){
    cools[i].innerHTML = 'Я ' + i + '-ый блок!';
}
console.log(cools);