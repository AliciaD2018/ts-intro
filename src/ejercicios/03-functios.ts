/*
    ===== Código de TypeScript =====
*/
function suma (a:number,b:number): number{
    return a + b;
}

const sumarFlecha =(a:number, b:number): number =>{
    return a + b;
}

function multiplicar(numero:number, otroNumero?:number, base:number=2){ //otronumero es opcional por el ?
    return numero * base;
}

const resultado =multiplicar(5,0,10);//devuelve 10 
console.log(resultado)

/*
La interfaz se asegura que el objeto tenga los valores que se le estan indicando.
 Que se cumplan los parametros, que devuelva valores de acuerdo a 
 lo que se le indica
*/
interface PersonajeLOR{
    nombre:string;
    pv:number;//puntos de vida
    mostrarHp:()=> void; //se le pueden definir los tipos dentro de la funcion si fuera necesario
}

function curar(personaje, curarX):void{
    personaje.pv+=curarX

    console.log(personaje);
}

//variables colocar el const siempre, por orden.
const nuevoPersonaje: PersonajeLOR ={
    nombre:'Lola',
    pv:70,
    mostrarHp(){
        console.log('Puntos de Vida',this.pv);
    }
}

curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarHp();

/* Nota: Las interfaces no tienen interpretación en JS pero ayuda
para que TS sepa todas sus propiedades y metodos */