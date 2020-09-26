// Métodos para criação e manipulação de arrays:
let array1 = [1, 2, 3];
let array2 = new Array(1, 2, 3);
let array3 = Array(1, 2, 3);

// array1.push(4);
// console.log(array1);

// array2.push("1");
// console.log(array2);

// array3.reverse();
// console.log(array3);

// let array4 = array1.concat(array2).concat(array3);
// console.log(array4);
// console.log(array4[3]);

// const tamanho = array4.unshift(0);
// console.log(tamanho, array4);
// const pRemovido = array4.shift();
// console.log(pRemovido, array4);

let array4 = [4, 5, 6];
let arrayAte6 = array1.concat(array4);
console.log(arrayAte6);

array4 = arrayAte6.splice(3);
array1 = arrayAte6.splice(0);

console.log(array1);
console.log(array4);
console.log(arrayAte6);

arrayAte6 = [1, 2, 3, 4, 5, 6];
console.log(arrayAte6);

arrayAte6.splice(2, 4, 4, 5, 6, 7, 'fim_da_lista');
console.log(arrayAte6);

// Métodos de iteração de arrays:

arrayAte6.forEach((value, position, array) => {
    console.log(`O Valor ${value}, pertencente à posição ${position}, pertence à array [${array}]`);
});

let array6nova = arrayAte6.map((valor, index) =>
    valor + 1
)

console.log(array6nova);

arrayNiveis = ['arroz', 'feijao', ['macarrao', 'carne', ['milho', 'ervilha']]];

console.log(arrayNiveis.flat(1));
console.log(arrayNiveis.flat(2));

console.log(arrayNiveis.flatMap(value => [value + ' EM ALTA']));

// arr.keys retorna uma chave para cada elemento do array, permite a iteração com .next e indica o seu fim
// arr.values faz quase o mesmo, mas recuperando os valores do array
// arr.entries, por sua vez, retorna o par [key, value] para cada elemento do array

const moradias = ['casa', 'apartamento', 'tenda', 'moradia móvel', 'barraco', 'acampamento'];

const iteratorMoradias = moradias.entries();

for (let i = 0; i <= moradias.length; i++) {
    console.log(iteratorMoradias.next());
}

// Métodos para busca de elementos em arrays:

//arr.find(value => condition (ex.: value > 2)) retorna o primeiro elemento que satisfaz a condição. findIndex, de maneira similar, retorna o índice desse elemento.

const array62 = arrayAte6.filter(value => value > 7);
console.log(array62);

// indexOf e lastIndexOf retornam as posições da primeira e última ocorrências, respectivamente, de um determinado valor

const ver = moradias.includes('barraco');
console.log(ver);

const ver2 = moradias.some(value => value.length > 10);
console.log(ver2);
console.log(moradias.filter(value => value.length > 10));

const ver3 = moradias.every(value => value.length > 3);
console.log(ver3);

// Métodos de ordenação de elementos de um array:

// sort, reverse, join, reduce