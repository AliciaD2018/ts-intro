
/*
    ===== Código de TypeScript =====
*/
let habilidades: string[] =['bash','counter','healing'];
habilidades.push('');

interface Personajes{
    nombre:string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personajes = {
    nombre: 'strider',
    hp:100,
    habilidades:['bash','counter','healing']
}

personaje.puebloNatal='pueblo bonanza';

console.table(personaje);