interface Reproductor {
    volumen: number
    ,segundo: number
    ,cancion: string
    ,detalles: Detalles
}

interface Detalles {
    autor: string,
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90
    ,segundo: 36
    ,cancion: 'Reise Reise'
    ,detalles : {
        autor : 'Rammstein'
        ,anio: 2010
    }
}

console.log('El volumen actual de:', reproductor.volumen)
console.log('El autor es:', reproductor.detalles.autor)

//desestructurar código
const {volumen, segundo, cancion, detalles } = reproductor
const {autor} =  detalles

// console.log('El volumen actual de:', volumen)
// console.log('El autor es:', autor)

const dbz: string [] = ['Goku', 'Vegeta', 'Trunks']
const [p1,p2,p3] = dbz;
//const [,,p3] = dbz; si quiero solo el 3

console.log('Personaje 1', dbz[0])
console.log('Personaje 1', p1)
console.log('Personaje 2', dbz[1])
console.log('Personaje 1', p2)
console.log('Personaje 3', dbz[2])
console.log('Personaje 1', p3)

