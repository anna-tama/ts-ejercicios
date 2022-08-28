//Array con múltiples tipos
let habilidadesMulti : (boolean |string|number) []= ['Anna','Tama',200];

//array de string
let habilidades : string []= ['Anna','Tama'];
habilidades.push('Roma')
console.log(habilidades)


//Interface
interface Personaje{
    nombre: string
    ,hp : number
    ,habilidades: string[]
    ,puebloNatal?: string    //opcional ?
}

//Inicializo un objeto
const personaje: Personaje = {
    nombre: 'Pepito'
    ,hp: 100
    ,habilidades:['Anna','Tama']
}

personaje.puebloNatal = 'Pueblo Paleta'

console.table(personaje);

