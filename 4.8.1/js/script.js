/* Помните скрипт про покупки яблок и хлеба?
Теперь перепишите его в виде функции под названием haveEnough
В качестве аргументов используйте все входные параметры этого скрипта, перечислив их в скобках через запятую
Функция должна возвращать “Вам хватает денег на покупки” (если хватает) или “Вам не хватает денег”, если не хватает */

function haveEnought(totalMoney, appleCount, applePrice, breadCount, breadPrice){
    let totalPrice = appleCount * applePrice + breadCount * breadPrice;
    if (totalMoney >= totalPrice){return 'Вам хватает денег на покупки';
    } else {return 'Вам не хватает денег';}
}

alert(haveEnought(11, 1, 3, 2, 4));