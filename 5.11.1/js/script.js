let names = [
                [
                    ['куры', 'гуси', 'павлины'],
                    ['сокол', 'орел', 'соловей']
                ],
                [
                    ['собака', 'кошка'],
                    ['обезьяна', 'рысь']
                ]
            ];
            
names.forEach((name) => {
    name.forEach((animals) => {
        animals.forEach((animal) =>{
            console.log(animal);
        });
    })
})