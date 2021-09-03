
/*
    ===== Código de TypeScript =====
*/
/**
 * Desestructuración de Objetos
 */

 interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Rust or Gold',
    detalles: {
        autor: 'Jill Andrews',
        anio: 2015
    }
}

/*Toma todo lo del objeto reproductor*/
const {volumen,segundo,cancion,detalles} = reproductor;
const {autor}=detalles; //una forma limpia de hacerlo para colocar solamente autor en el console.log



console.log('El volumen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('El canción actual de: ', cancion);
console.log('El autor es: ', autor);

/**
 * Desestructuración de Arreglos
 */

 const dbz: string[]=['Lola','Gina','Luna'];
 const [ , , p3]=dbz;
 
 console.log('Personaje 3:', p3);