/*
    ===== Código de TypeScript =====
*/

/*Prueba: Hecer una interface para que se acepte el objeto anidado */

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

/*Para resolver los Objetos Anidados Usar interfaces.
Usar interface para tener codigo mas limpio*/
interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 25,
    direccion: {
        calle: 'Bonanza',
        pais: 'USA',
        ciudad: 'Texas'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);