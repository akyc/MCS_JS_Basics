console.log("You are at " + window.location);

const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'

if ( player == 0 && computer == 1){
    console.log('player win');
} else if ( player == 1 && computer == 2){
    console.log('player win');
} else if ( player == 2 && computer == 0){
    console.log('player win');
} else {
    console.log('computer win');
}