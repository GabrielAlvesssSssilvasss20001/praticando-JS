// Destructing é o processo de retirar elementos de arrays, objetos e afins e armazená-los em variáveis
 // -> Não altera os objetos originais!

const listaCarros = ['Palio', 'Celta', 'Onyx', 'Fiesta'];

let [carro1, carro2, carro3, carro4] = listaCarros;

console.log(carro4);

/* Variáveis a mais, sem valores relacionados, ficariam com o valor undefined. Valores excedentes na lista de referência também não geram problemas.
Já ao tentar se referir a um sub-conjunto de uma lista que não existe, um erro é retornado: */

    // let [carro, carroii, carroiii, /* Esse acesso retornará o primeiro elemento da string 'Fiesta' */ [carroiv], /* Esse acesso retornará um erro: */ [carrov]] = listaCarros;

    // console.log(carroiv, carrov);

// Em objetos:
const objEx = {
    carroNovo: 'Fusion 2020',
    carrosBonsAntigos: {
        carros: 'Fusca',
        carros2: 'Chevete',
        modelos: ['Rural Willys', 'Chevrolet', {nome: 'Perua aka Combi',}],
    }
};

// Procura o valor do parâmetro carroNovo e atribui à uma variável externa de mesmo nome:

let {carroNovo} = objEx;
// ou let {carroNovo: carroVariavel} = objEx;

console.log(carroNovo);

// Objeto de um objeto:

let {carrosBonsAntigos: {carros: bomEVelhoFusca}} = objEx;

console.log(bomEVelhoFusca);

// Arrays dentro de objetos:

let {carrosBonsAntigos: {modelos: [model1, model2] }} = objEx;

console.log(model1);

// Objetos dentro de arrays:

let {carrosBonsAntigos: {modelos: [mdl1, mdl2, /* Aqui: */ {nome: model3}] }} = objEx;

console.log(model3);

// Recebendo argumentos de listas ou objetos dentro de uma função usando destructing:

function media2Notas([a], {nota: b}){
    return `A média é: ${(a + b)/2}`;
}

console.log(media2Notas([7.4], {nota: 6.6}));