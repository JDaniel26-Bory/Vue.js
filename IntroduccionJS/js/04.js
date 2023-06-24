// Objectos


const product = {
    name : "tablet",
    price : 300,
    avaible : true
}

// console.table(product.name)
// console.table(product.price)

// Destructuring
const { name, avaible } = product

// console.log(name)
// console.log(avaible)

// Object literal enhancement
const autenticado = true
const users = "Juan"

const newObject = {
    autenticado,
    users : users
}

console.log(newObject)