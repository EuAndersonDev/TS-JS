//Vamos dobrar os numeros do array usando o map
const numeros = [20, 5, 10, 15, 1, 5, 51, 30, 41, 61, 2, 3];
const numerosDobro = numeros.map((numeros)=> numeros *2);
//console.log(numerosDobro);

/*Para cada elemento:
Retornaremos apenas uma String com o nome da pessoa, removeremos a chave nome do objeto, e vamos adcionar uma chave id em cada objeto */

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasNome = pessoas.map((objeto) => (objeto.nome));
const pessoasIdade = pessoas.map((objeto) => (objeto.idade));
const pessoasComId = pessoas.map((objeto, indice) => objeto.id = indice)
console.log(pessoasNome, pessoasIdade, pessoasComId);
