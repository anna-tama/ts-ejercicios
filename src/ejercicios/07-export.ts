import { Producto, calcularISV } from "./06-desestructuracion-funciones";

const carritoCompras: Producto [] = [
    {
        desc: 'Telefono1'
        ,precio: 100
    },
    {
        desc: 'Telefono2'
        ,precio: 150
    }
];

const [total,isv] = calcularISV(carritoCompras);


console.log('Total:', total)
console.log('ISV:', isv)