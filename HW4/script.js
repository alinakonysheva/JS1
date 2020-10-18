//task 1 Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, надо получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function parseRank(){
    let userNumber = parseInt(prompt('task 1. введите, пожалуйста, число в промежутке [0..999]: ', '123'));
    let parseOfUserNumber = {
        'units': 0,
        'tens': 0,
        'hundreds': 0,
    };
    if (userNumber < 10){
        parseOfUserNumber.units = userNumber;
        return parseOfUserNumber
  }
    else if (((userNumber - userNumber % 10) / 10) < 10) {
        parseOfUserNumber.units = userNumber % 10;
        parseOfUserNumber.tens = (userNumber - userNumber % 10) / 10;
        return parseOfUserNumber
    }
    else if ((userNumber/ 100) >= 1) {
        parseOfUserNumber.units = userNumber % 10
        parseOfUserNumber.hundreds = (userNumber - userNumber % 100) / 100
        parseOfUserNumber.tens = ((userNumber - parseOfUserNumber.units - (parseOfUserNumber.hundreds) * 100) / 10)
        return parseOfUserNumber
    }
    else {alert('введите, пожалуйста, число в промежутке [0..999]')}
}

console.log(parseRank())

//task 2 Продолжить работу с интернет-магазином:
//В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
//   Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.

class product {
    name = ''
    price = 0
    constructor (name, price) {
        this.name = name
        this.price = price
    }

}

class basket {
    productsInBasket = [];
    get total() {
        return this.productsInBasket.map(function (p){return p.price}).reduce(function (a, b){return a + b}, 0)
    }
    add (p) {
        this.productsInBasket.push(p)
    }
    remove (p){
        delete this.productsInBasket[this.productsInBasket.indexOf(p)]
    }
    get productNames(){
        return this.productsInBasket.map(function (p){return p.name})
    }
}
const product1 = new product('iris', 1)
const product2 = new product('rose', 2)
const product3 = new product('orchid',3)

let b = new basket()

console.log(b.total)
console.log(b.productsInBasket)
b.add(product1)
console.log(b.total)
b.add(product2)
console.log(b.total)
b.add(product3)
console.log(b.total)
console.log(b.productNames)
b.remove(product1)
console.log(b.productNames)
console.log(b.total)

// * Подумать над глобальными сущностями.
// К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины,
// но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру
// для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.

// если правильно поняла в чем суть задания, то для product из интернет-магазина и каталога я бы сделала такую структуру:

/*class product {
    name = ''
    price = 0
    discount = 0
    vendorCode = 0
    available = True
    image = ''
    manufacturer = ''
    weight = 0
    size = 0
    color = ''
    characteristics = ''
    searchWords=''
    place = ''
    stockBalance = ''
    ...
    constructor (name, price) {
        this.name = name
        this.price = price
        ...
 getData()
 changeData()
 removeData()
 addToStock()

    }*/