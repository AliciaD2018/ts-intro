/*
    ===== Código de TypeScript =====
*/
function queTipoSoy <T>(argumento:T){ //Tipo T es para aceptar cualquier valor es para indicar el tipo Generico
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7]);

let soyExplicito=queTipoSoy<number>(100);