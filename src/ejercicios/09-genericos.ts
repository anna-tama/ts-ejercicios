// function queTipoSoy(argumento:string){
//     return argumento;
// }

//Genérico
function queTipoSoy<T>(argumento:T){
    return argumento;
}


let soyString = queTipoSoy('Hola Mundo') 
let soyNumeor = queTipoSoy(100) 
let soyArreglo = queTipoSoy([1,2,3,4]) 

let soyExplicito = queTipoSoy<number>(100) 