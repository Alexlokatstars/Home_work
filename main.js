// Задание 1
const   city = 'Курган',
        country = 'Россия',
        population = 338000;
console.log(city,country,population)
const stadium = 'Стадио есть';

if(stadium == 'Стадиона нет') {
    console.log('Стадиона нет');
} else {
    console.log('Стадион есть');
}

//  Задание 2 

const numb1 = 40;
const numb2 = 70;

let result = (numb1*numb2);

console.log(result);

// Задание 3 

const time = 2,
      speedOfFirst = 95,
      speedOfSecond = 114;

let E = (time*(speedOfFirst+speedOfSecond))
console.log(E)

// Задание 4 

const randomNumber = Math.floor(Math.random() * 100);
if(randomNumber < 20) {
console.log("randomNumber < 20");
} else if (randomNumber > 50) {
console.log ("randomNumber  > 50")
} else {
console.log ("randomNumber > 20, и < 50")
}

// Задание 5 


switch ('randomNumber > 20, и < 50'){
    
    case 'randomNumber <20':
     console.log("randomNumber < 20");
     break;
    case 'randomNumber > 50' :
     console.log('randomNumber > 50'); 
     break;
    case ('randomNumber > 20, и < 50'):
     console.log('randomNumber > 20, и < 50');
     break
}
     