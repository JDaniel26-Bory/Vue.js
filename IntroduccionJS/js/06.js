// Destructuring de 2 o mas objetos

const product = {
    name : "tablet",
    price : 300,
    avaible : true
}

const client = {
    name: 'Juan D',
    premium: true
}

const { name: nameProduct } = product
const { name: nameClient } = client

console.log(nameProduct)
console.log(nameClient)

console.log(product)