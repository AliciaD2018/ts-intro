
/*
    ===== Código de TypeScript =====
*/
export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'Ipad Air',
    precio: 600
}

/*Calcula el Impuesto sobre Venta */
export function calculaISV(productos: Producto[]): [number,number] { //devuelve cualquier tipo requerido para este caso un array con los datos
    let total = 0;

    productos.forEach(({ precio }) => { //tambien se puede dejar como producto en vez de {precio} y seria los mismo. El usar precio así es parte de la desestructuración.
        total += precio;
    })
    return [total,total * 0.15];
}

const articulos = [telefono, tableta];

const [total, isv] = calculaISV(articulos); //se esta desestructurando directamente el producto, las propiedades que interesan.

console.log('Total: ' + total);
console.log('ISV: ' + isv);
