let moneyWithYou = prompt('Cколько у вас с собой есть денег?'),
    applePayed = prompt('Cколько вы купили яблок?'),
    breadPayed = prompt('Cколько вы купили батонов хлеба?'),
    appleCost = parseFloat(applePayed) * parseFloat(prompt('Cколько стоит одно яблоко?')),
    breadCost = parseFloat(breadPayed) * parseFloat(prompt('Cколько стоит один батон хлеба?'));

document.write(moneyWithYou >= appleCost + breadCost);