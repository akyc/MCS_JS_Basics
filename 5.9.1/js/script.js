let allNums = [];
for (let i = 1; i < 100000; i++){
    if (i%6 == 0){
        allNums.push(i);
    }
}
document.querySelector('.count').innerHTML = allNums;