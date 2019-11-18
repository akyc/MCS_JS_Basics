/* Помните скрипт про покупки яблок и хлеба?
Теперь перепишите его в виде функции под названием haveEnough
В качестве аргументов используйте все входные параметры этого скрипта, перечислив их в скобках через запятую
Функция должна возвращать “Вам хватает денег на покупки” (если хватает) или “Вам не хватает денег”, если не хватает */

let totalMoney = parseFloat(prompt('Cколько у вас с собой есть денег?')),
    appleCount = parseInt(prompt('Cколько вы купили яблок?')),
    breadCount = parseInt(prompt('Cколько вы купили батонов хлеба?')),
    applePrice = parseFloat(prompt('Cколько стоит одно яблоко?')),
    breadPrice = parseFloat(prompt('Cколько стоит один батон хлеба?'));
    
function haveEnought(totalMoney, appleCount, applePrice, breadCount, breadPrice){
    let totalPrice = appleCount * applePrice + breadCount * breadPrice;
    if (totalMoney >= totalPrice){return 'Вам хватает денег на покупки';
    } else {return 'Вам не хватает денег';}
}

alert(haveEnought(totalMoney, appleCount, applePrice, breadCount, breadPrice));