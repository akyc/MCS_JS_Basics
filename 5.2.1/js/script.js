function randomPower(num){
    let a = Math.floor(Math.random()*(10 - 1) + 1);
    return Math.abs(num**a);
}

console.log(randomPower(-2));