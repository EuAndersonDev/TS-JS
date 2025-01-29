//Jeito dificil e porco

// const numeros = [20, 5, 10, 15, 1, 5, 51, 30, 41, 61, 2, 3];
// const numerosFiltrados = numeros.filter(maiorQueTrinta);
// console.log(numerosFiltrados);
// function maiorQueTrinta(numeros){
//    return numeros > 30;
// };

//Jeito facil e limpo
const numeros = [20, 5, 10, 15, 1, 5, 51, 30, 41, 61, 2, 3];
const numerosFiltrados = numeros.filter((numero) => numero > 30);
console.log(numerosFiltrados);
