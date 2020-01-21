// let allNums = [];
// for (let i = 1; i < 100000; i++){
//     if (i%6 == 0){
//         allNums.push(i);
//     }
// }
// document.querySelector('.count').innerHTML = allNums;

// for (let i = 1; i < 100000; i++){
//     if (i%6 === 0){
//         document.querySelector('.count').innerHTML += i + ', ';
//     }
// }

 let allNums = [];
 for (let i = 6; i < 100000; i += 6){
    allNums.push(' '+i);
 }
 document.querySelector('.count').innerHTML = allNums;