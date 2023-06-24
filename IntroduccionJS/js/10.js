const tecnology = ['Vue.js', 'JavaScript', 'Node.js', 'HTML', 'CSS']

// tecnology.push('Git') // añade elementos al final del arreglo
// tecnology.unshift // añade elementos al inicio del arreglo

// tecnology.pop() // Elimina elemetos del final del arreglo
// tecnology.shift() // Elimina del inicio del arreglo

// tecnology.splice(2) 

const tecnology2 = tecnology.filter( function(tech) {
    return tech !== 'HTML'
})

console.table(tecnology2)