
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