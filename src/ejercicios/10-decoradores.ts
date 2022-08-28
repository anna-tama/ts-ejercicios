//DECORATORS
//Habilitar en el  tsconfig
//"experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */


function  classDecorator<T extends {new (...args:any[]): {}}>(
    constructor: T
){
    return class extends constructor{
        newProperty = 'new property'
        hello = 'override'
    }
}

@classDecorator
class MiSuperClase{
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.log('Hola Mundo')
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();
