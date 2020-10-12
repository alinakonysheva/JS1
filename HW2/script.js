/* task 1 Почему код дает именно такие результаты?

var a = 1, b = 1, c, d;

c = ++a; alert(c); // 2

Потому что сначала увеличиваем на единицу, потом выводим.

d = b++; alert(d); // 1

Потому что сначала выводим, потом увеличиваем b на один.

c = (2+ ++a); alert(c); // 5

мы прибавляем к 2 увеличенную на один a. В предыдущем задании мы уже увеличили a до двух,
в этом увеличили ее еще на 1, получается,что к двум мы прибавили 3, выходит 5.

d = (2+ b++); alert(d); // 4

мы прибавляем к 2 еще не увеличенную b.
В предыдущем задании мы уже увеличили b до двух, получается 2 + 2 = 4,
и затем мы увеличиваем b еще на один, получается 3.

мы два раза увеличивали a на единицу, поэтому:

alert(a); // 3

мы два раза увеличивали b на единицу, поэтому:

alert(b); // 3
*/

/* task 2 Чему будет равен x?*/
var a = 2;
var x = 1 + (a *= 2);
alert(`task 2. x = ${x}, a = ${a}, потому что этим выражением x = 1 + (a *= 2) мы присвоили х: 2*2 + 1`)

/* task 3
* Объявить две целочисленные переменные — a и b и
* задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.*/
let aTask3 = parseInt(prompt('task 3. введите а: ', '1'))
let bTask3 = parseInt(prompt('task 3. введите b: ', '1'))
switch (true) {
    case aTask3 >= 0 && bTask3 >= 0:
        alert(`task 3. a - b = ${aTask3 - bTask3}`);
        break;
    case aTask3 < 0 && bTask3 < 0:
        alert(` task 3. a * b = ${aTask3 * bTask3}`);
        break;
    case  (aTask3 >= 0 && bTask3 < 0)||(aTask3 < 0 && bTask3 >= 0):
        alert(`task 3. a + b = ${aTask3 + bTask3}`);
        break;
    default:
        alert('task 3. Введите, пожалуйста, числа.');
        break;
}
/* task 4 Присвоить переменной а значение в промежутке [0..15].
 С помощью оператора switch организовать вывод чисел от a до 15*/

let aTask4 = parseInt(prompt('task 4. введите, пожалуйста, значение а  в промежутке [0..15]: ', '15'))
switch (aTask4) {
    case 0:
        alert('0');
    case 1:
        alert('1');
    case 2:
        alert('2');
    case 3:
        alert('3');
    case 4:
        alert('4');
    case 5:
        alert('5');
    case 6:
        alert('6');
    case 7:
        alert('7');
    case 8:
        alert('8');
    case 9:
        alert('9');
    case 10:
        alert('10');
    case 11:
        alert('11');
    case 12:
        alert('12');
    case 13:
        alert('13');
    case 14:
        alert('14');
    case 15:
        alert('15');
        break;
    default:
        alert('Введите, пожалуйста, число.');
        break;
}

/* task5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
 Обязательно использовать оператор return.*/

function sum(x,y) {
    let number = x + y;
    return number;
}
function subtraction(x,y) {
    let number = x - y;
    return number;
}
function multiplication(x,y) {
    let number = x * y;
    return number;
}
function division(x,y) {
    let number = x / y;
    return number;
}

/* task 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
 где arg1, arg2 – значения аргументов, operation – строка с названием операции.
  В зависимости от переданного значения операции выполнить одну из арифметических операций
   (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
 */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case sum:
            return sum(arg1,arg2);
        case subtraction:
            return subtraction(arg1,arg2);
        case multiplication:
            return multiplication(arg1,arg2);
        case division:
            return division(arg1,arg2);
    }
}

alert(`task 6: mathOperation(3, 5, multiplication) = ${mathOperation(3, 5, multiplication)}`)

/*task 7 *Сравнить null и 0. Попробуйте объяснить результат.*/

alert(`task 7 null === 0. ${null === 0}`)
alert(`task 7 null == 0. ${null == 0}`)
alert(`task 7 null < 0. ${null < 0}`)
alert(`task 7 null > 0. ${null > 0}`)
alert(`task 7 null >= 0 ${null >= 0}`)
// это очень странно:) со строгим неравенством понятно: null не больше и не меньше 0. Строгое равенство (===) не выполняется
// потому что типы разные. Наверное  >= 0 true потому что <0 false. А почему == false -- неясно.

/* task 8 С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow),
 где val – заданное число, pow – степень.
*/

// для целой и неотрицательной pow

function power(val, pow){
    if (pow == 0) {
        return 1
    }
    if (pow >= 1) {
        return val * power (val, pow - 1);
    }

}

alert(`task 8: ${power(2, 10)}`)