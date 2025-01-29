// const numeros = [20, 5, 10, 15, 1, 5, 51, 30, 41, 61, 2, 3];
// const numerosPares = numeros.filter((numero)=> numero % 2 === 0);
// const numerosDobrados = numerosPares.map((numero)=> numero * 2);
// const somaDosNumerosDobrados = numerosDobrados.reduce((acumulador, valor)=> acumulador + valor);
// console.log(somaDosNumerosDobrados);

const numeros = [20, 5, 10, 15, 1, 5, 51, 30, 41, 61, 2, 3];
const NumerosParesDobradosSomados = numeros
    .filter((numero)=> numero % 2 === 0)
    .map((numero)=> numero * 2)
    .reduce((acumulador, valor)=> acumulador + valor);

console.log(NumerosParesDobradosSomados);