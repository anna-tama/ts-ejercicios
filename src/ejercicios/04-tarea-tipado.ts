
interface SuperHeroe {
    nombre: string,
    edad: number,
    direccion: Direccion,
    mostrarDireccion: ()=> string 

}

interface Direccion  {
    calle:string, 
    pais: string,
    ciudad: string
}

const superHeroe: SuperHeroe= {
    nombre: 'Tam'
    ,edad: 30
    ,direccion: {
        calle: 'Falsa 123'
        ,pais: 'Arg'
        ,ciudad: 'BA'
    }
    ,mostrarDireccion(){
        return this.nombre + ', '+ this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);