//chess
//1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги
// по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные
// и белые ячейки.
let blackCell = document.getElementsByClassName('black_cell')[0];
let whiteCell = document.getElementsByClassName('white_cell')[0];

function getBlackCell() {
    return blackCell.cloneNode(true)
}
function getWhiteCell() {
    return whiteCell.cloneNode(true)
}


let board = document.getElementsByClassName('board')[0]

for (let i = 0; i <= 7; i++) {
    let oneRow = document.getElementsByClassName('one_row')[0].cloneNode(true);
    for (let j = 0; j <= 7; j++) {
        if ((i + j) % 2 === 0){
            oneRow.appendChild(getBlackCell());
        }
        else {oneRow.appendChild(getWhiteCell())}
    }
    board.appendChild(oneRow)
}

// task 2 Делаем корзину. Есть массив с товарами. Делаем блок с корзиной.
// Выводим каждый товар в этом блоке. Под списком товаров выводим их цену.
class Product {
    name = ''
    price = 0
    constructor (name, price) {
        this.name = name
        this.price = price
    }

}

class Basket {
    productsInBasket = [];
    get total() {
        return this.productsInBasket.map(function (p){return p.price}).reduce(function (price1, price2){return price1 + price2}, 0)
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
const product1 = new Product('iris', 1)
const product2 = new Product('rose', 2)
const product3 = new Product('orchid',3)

let b = new Basket()

b.add(product1)
//console.log(b.total)
b.add(product2)
//console.log(b.total)
b.add(product3)

let listInBasket = document.getElementById('product_list');
b.productNames.forEach(element => {
    let node = document.createElement("LI")
    listInBasket.appendChild(node)
    node.innerText = element})

document.getElementById('pay_amount').innerText = b.total;

