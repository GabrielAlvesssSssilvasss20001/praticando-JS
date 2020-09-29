// Arrow function retornando objetos literais

function soma3Obj(a, b, c) {
    return ({
        valor1: a,
        valor2: b,
        valor3: c,
        soma: a + b + c
    });
}

console.log(soma3Obj(1, 4, -5));

// Arrow functions não permitem hoisting. Uma forma de executar funções dentro do próprio contexto do objeto é referenciando seu contexto pelo 'this':

let objetoContexto = {
    recebeParametro: function recebeParametro(){
        this.mostrarParametro('parametro');
    },
    // atribuir 'default' ao parametro permite que 'default' seja impresso caso nenhum parametro seja passado ao invocar a funcao mostrarParametro
    mostrarParametro: function mostrarParametro(parametro='default'){
        console.log(parametro);
    }
};
console.log();
objetoContexto.mostrarParametro();

// Para evitar que o contexto fosse perdido quando se usasse funções setTimeout, internas à outras funções, que usam o contexto global,
// usa-se arrow functions para assegurar que o contexto referido é o do objeto, e não o global ou um mais interno

let objetoContexto2 = {
    recebeParametro: function recebeParametro(){
        this.mostrarParametro('parametro');

        setTimeout(() => {
            // o this abaixo refere-se ao contexto que envolve a arrow function
            this.mostrarParametro('depois de um tempo');
        }, 1000);
    },
    mostrarParametro: function mostrarParametro(parametro){
        console.log(parametro);
    }
};
console.log();
objetoContexto2.recebeParametro();

// + Objetos literais:

function retornaRandom(){
    let randomNum = (Math.random() * 100).toFixed(0);
    return randomNum;
}

let obj = {
    retornaRandom,
};

console.log(obj.retornaRandom());

// ou 

// let propsDefaultName = 'prop'

// let obj2 = {
//     // Acho que o ES6 não permite definir nome (concatenando strings) e função simultaneamente na criação de um objeto literal, como faz o exemplo abaixo
//     [propsDefaultName + '1']: retornaRandomIgual(){
//         let randomNum = (Math.random() * 100).toFixed(0);
//         return randomNum;
//     },

// };

// console.log(obj2.retornaRandomIgual());
// //

// const randomico = retornaRandom();

// while(true){
//     let valor = prompt("Informe um valor entre 0 e 100:");
//     let tents = 1;
//     if (valor === randomico){
//         console.log("Você acertou!");
//         break;
//     }
//     else{
//         console.log("Tente de novo!");
//         if (valor > randomico) {
//             console.log("Informe um numero menor");
//         }
//         else {
//             console.log("Informe um valor maior");
//         }
//     }
//     valor = prompt("Valor: ");
// }
