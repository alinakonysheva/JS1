//task 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

// Воспользуемся алгоритмом решето Эратосфена.

//Сначала создадим массив с числами от 0 до 100:
finalNumber = 100
const arrNumbers = [];
for (let i = 0; i <= finalNumber; i++) {
    arrNumbers.push(i);
}
let counter = 2
while (counter <= finalNumber) {
    let cuttingCounter;
    if (arrNumbers[counter] !== 0) {
        cuttingCounter = counter * 2;
        while (cuttingCounter <= finalNumber) {
            arrNumbers.splice(cuttingCounter, 1, 0);
            cuttingCounter = cuttingCounter + counter;
        }

    } counter += 1;
}
const primes = []
// массив получился с нулями, уберем нули, сформируем ответ:
for (let i = 0; i < arrNumbers.length; i++ ){
    if (arrNumbers[i] !== 0 && arrNumbers[i] !== 1) {
        primes.push(i)
    }
}
console.log(`task 1: ${primes}`)
/* task 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
 Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
  Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/
const pricesInBasket = [1, 2, 3, 4];

function countBasketPrice(
    basket) {
let inTotal = 0;
basket.forEach(price => inTotal += price);
    return inTotal
}
let totalSum = countBasketPrice(pricesInBasket)
console.log(`task 2: цены товаров в корзине ${pricesInBasket}, корзина на сумму: ${totalSum}`);

/* task 3* Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
Выглядеть это должно так: for(…){// здесь пусто}*/
console.log(`task3:`)
for(let i = 0; i <= 9; console.log(i++)){}

/* 4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */

console.log(`task4:`)
let pyramidOfX = '';
for (let i=0; i<=19; i++){
    pyramidOfX += 'x'
   for (let j=0; j<=19; j++){
       pyramidOfX += '';}
    console.log(pyramidOfX)
}

