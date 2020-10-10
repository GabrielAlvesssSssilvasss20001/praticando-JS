// Símbolos são indicadores únicos que não pertencem a um tipo definido. Podem ser usados para indicar que variáveis únicas não devem ser alteradas e para percorrer estruturas de dados:

let array = ['value1', 'value2', 'value3', 'value4'];

const iterador = array[Symbol.iterator]();

while (1) {
    let {value, done} = iterador.next();

    if (done) {
        break;
    }

    console.log(value);
}

// No ES6, por padrão, arrays possuem uma propriedade que define seus itens como iteráveis usando Symbol.iterator:

for (let value of array) {
    console.log(value);
}

// Já objetos, por padrão, não são iteráveis. Para mudar isso, pode-se  adicionar propriedades ao objeto utilizando Symbols, tornando-o, por exemplo, iterável:

let objt = {
    nomes: ['Sponge', 'Bob', 'Square', 'Pants'],
    idades: [18, 22, undefined, undefined],

    [Symbol.iterator]() {

        // As funções fornecidas por Symbol podem ser padronizadas:

        let it = 0;

        return {
            next: () => {
                it++;

                return {
                    tuple: {
                        nome: this.nomes[it - 1],
                        idade: this.idades[it - 1],
                        done: it > this.nomes.length,
                    }
                };
            }
        };
    }
};

const i = objt[Symbol.iterator]();

console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());

// Generator é um mecanismo que utiliza a interface dos iterators para iterar quaisquer trechos de código, usando a palavra reservada yield:

const objII = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of objII) {
    console.log(value);
}

// let arrayII = ['a', 'b', 'c', 'd'];

// function* waitForPress() {    
//     console.log('pressionou a primeira vez');
//     yield;
//     console.log('pressionou a segunda vez');
//     yield;
//     console.log('pressionou a três vez');
//     yield;
//     console.log('pressionou a quarta vez');
// };

// let it2 = waitForPress();

// while (true) {
//     let i = 1;
//     let car = prompt('pressione qualquer caractere antes de pressionar enter');
//     if ((car !== '') && (i<=4)) {
//         console.log(it2.next());
//     }
//     else {
//         break;
//     }
// };