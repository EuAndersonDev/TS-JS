//Some todos os numeros de um array


const numeros = [20, 5, 10, 15, 1, 5, 51, 30, 41, 61, 2, 3];
const total = numeros.reduce((acumulador, valor) => acumulador +valor, 0)
console.log(total);