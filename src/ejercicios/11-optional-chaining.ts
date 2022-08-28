interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Tam'
}

const pasajero2: Pasajero = {
    nombre: 'Mauro'
    ,hijos: ['Ragnar']
}

function imprimeHijos(pasajero:Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos)
}

imprimeHijos(pasajero1)