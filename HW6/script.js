class Product {
    name = ''
    price = 0
    img = "#"
    constructor (name, price, img) {
        this.name = name
        this.price = price
        this.img = img

    }
    getAddInBasketButton () {
        const button = document.createElement('div')
        button.classList.add('button')
        button.innerHTML = 'Buy it'

        button.addEventListener('click', () => {
            const Basket1 = new Basket()
            Basket1.add(this)
        })

        return button
    }
getMainTemplate () {
        //деструктурирующее присваивание:
        const {name, price, img} = this
        const wrapper = document.createElement('div')

    wrapper.innerHTML = `<div><div class="product_image"><img src="${img}" alt="photo ${img}"></div>
<div class="product_info"><span>Flower: ${name}</span></div>
<div class="product_info"><span>Price: ${price}</span></div>
</div>`
    wrapper.classList.add('product')
    wrapper.appendChild(this.getAddInBasketButton())
    return wrapper
}
    getTemplateForBasket () {
        const {name, price, img} = this
        const wrapper = document.createElement('div')
        wrapper.innerHTML = `<span>${name}: ${price} x <input value="${count}" /> = ${price * count}</span>`
        wrapper.classList.add('product_in_basket')
        const input = wrapper.querySelector('input')
        input.addEventListener('input', event => {
            const value = event.target.value
            if (value) {
                this.count = +value
                const Basket1 = new Basket()
                if (this.count) {
                    Basket1.render()}
                else {
                    Basket1.remove(this)
                }}})
            wrapper.appendChild(this.getMinusButton())
        return wrapper
    }

        getMinusButton () {
            const button = document.createElement('div')
            button.classList.add('button')
            button.innerHTML = '-'

            button.addEventListener('click', () => {
                const Basket1 = new Basket()
                Basket1.remove(this)
                console.log(Basket1)
            })

            return button
        }
            incr () {
                this.count++
            }

            decr () {
                this.count--
            }
        }
class List {
    products = []
    constructor(products = []) {
        this.products = products
    }
    findProduct(p) {
        return this.products.filter(prod => prod.name === p.name)[0]
    }

    add (prod) {
        const exist = this.findProduct(prod)
        if (exist){exist.inc()
        }
        else {
            this.products.push(prod)
        }
        this.products.push(prod)
        this.render()
    }
    remove (prod) {
        const exists = this.findProduct(prod)
        if (!exists) {
            return
        }

        if (exists.count > 1) {
            exists.dec()
        } else {
            this.products = this.products.filter(good => prod.name !== good.name)
        }
        this.render()
    }

}

class Basket extends List {
    constructor (products) {
        //pattern singleton, класс может иметь только один экземпляр:
        if (Basket._instance) {
            return Basket._instance
        }
        super(products);
        this.init()

        Basket._instance = this
    }
    init () {
        const block = document.createElement('div')
        block.classList.add('basket')


        const button = document.createElement('div')
        button.innerHTML = 'Basket'
        button.classList.add('basket_button')


        const chosenList = document.createElement('div')
        chosenList.classList.add('basket_list')
        chosenList.innerHTML = 'Your basket is empty'
        button.addEventListener('click', () => {chosenList.classList.toggle('shown')})
        block.appendChild(button)
        block.appendChild(chosenList)

        const placeToRender = document.querySelector('header')
        if (placeToRender){
            placeToRender.appendChild(block)
        }
       this.render()
    }
    getSumTemplate () {
        const sum = this.products.reduce((sum, prod) => {
            return sum + prod.price * prod.count
        }, 0)

        const block = document.createElement('div')
        block.classList.add('basket_sum')
        block.innerHTML = `To pay: ${sum}`

        return block
    }

    getEmptyTemplate () {
        const block = document.createElement('div')
        block.classList.add('empty_basket')
        block.innerHTML = `Basket is empty`

        return block
    }

    render () {
        const placeToRender = document.querySelector('.basket_list')
        if (!placeToRender) {
            return
        }

        placeToRender.innerHTML = ''

        this.products.forEach(item => {
            const template = this.product.getTemplateForBasket()
            placeToRender.appendChild(template)
        })

        if (this.products.length) {
            placeToRender.appendChild(this.getSumTemplate())
        } else {
            placeToRender.appendChild(this.getEmptyTemplate())
        }
    }
}



class ListOfProducts extends List {
    constructor(products) {
        super(products);
    }
    render () {
        const placeToRender = document.querySelector('.list_products')
        if (!placeToRender) {
            return
        }

        placeToRender.innerHTML = ''

        this.products.forEach(item => {
            const template = item.getMainTemplate()
            placeToRender.appendChild(template)
        })
    }
}
const product1 = new Product('iris', 100, 'img/iris.jpg')
const product2 = new Product('rose', 200, 'img/rose.jpg')
const product3 = new Product('orchid',300, 'img/orchid.jpg')


const listOfProducts1 = new ListOfProducts()
listOfProducts1.add(product1)
listOfProducts1.add(product2)
listOfProducts1.add(product3)
//listOfProducts1.render()

const Basket1 = new Basket()


