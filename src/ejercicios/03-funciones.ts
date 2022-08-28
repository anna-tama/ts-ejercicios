function sumar(a:number,b:number): number{
    return (a + b);
}

const resultadoSuma = sumar(10,20)

console.log(resultadoSuma)

const sumarFlecha = (a:number,b:number):number => {
    return a + b;
}

// function multiplicar(numero: number,base: number,otroNumero?: number): number{
function multiplicar(numero: number,otroNumero?: number,base=2): number{
    return numero * base;
}

// const resultadoMultiplicacion = multiplicar(5,2)
const resultadoMultiplicacion = multiplicar(5)

console.log(resultadoMultiplicacion)



interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp: ()=>void;
}

function curar(personaje: PersonajeLOR, curarX:number): void{
    personaje.pv +=curarX;
   // console.log(personaje)
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Mauro'
    ,pv: 50
    ,mostrarHp(){
        console.log('Puntos de vida:', this.pv);
    }
}

curar(nuevoPersonaje,20);

nuevoPersonaje.mostrarHp();
