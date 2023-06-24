const product = {
    name : "tablet",
    price : 300,
    avaible : true
}

const client = {
    name: 'Juan D',
    premium: true
}

// const newObject = Object.assign(client, product)

// console.log(newObject)

const newObject = {
    product,
    client
}

console.log(newObject)