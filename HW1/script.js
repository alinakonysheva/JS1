/* task 1.1 Задать температуру в градусах по Цельсию.
 Вывести в alert соответствующую температуру в градусах по Фаренгейту.
 Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту,
Tc – температура по Цельсию */

let celsiusTemperature = 25;
let celsiusFahrenheit = 1.8 * celsiusTemperature + 32;
alert ("task 1.1. This is Fahrenheit temperature:  "+ celsiusFahrenheit);

/* task 1.2 Работа с переменными.
a) Объявить две переменные: admin и name. Записать в name строку «Василий»;
b) Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).*/
const name = "Василий";
let admin = name;
alert ("task 1.2. This is our admin:  " + admin);

/* task 1.3 *Чему будет равно JS-выражение 1000 + "108"*/
const int3 = 1000;
const string3 = "108";
let mixedTypeVariable = int3 + string3;
alert (" task 1.3. This is result of 1000 + \"108\":  " + mixedTypeVariable);

/* task 1.4 Самостоятельно разобраться с атрибутами тега script (async и defer).
* у тега скрипт есть два атрибута: async и defer. Общее в них то, что при их использовании неважно в каком месте мы
* поставим тег script, легкое содержимое странички будет грузится, а затем скрипты. Разница в том, что при использовании
* defer скрипты будут грузится в том порядке, в которым они вставлены на страничку, а в async будут выдаваться
* по мере прогрузки: от легкого к тяжелому. */
