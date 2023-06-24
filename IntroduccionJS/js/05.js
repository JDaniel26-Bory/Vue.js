
const product = {
    name : "tablet",
    price : 300,
    avaible : true
}

// Object.freeze(product)
// Object.seal(product)

// Reescribir un valor
product.name = "Monitor Curvo"

// Añadir un valor
product.imagen = "imagen.jpg"

// const { avaible, price, ...product2 } = product

console.log(product)