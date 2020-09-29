// arguments p/ criar objeto com os argumentos passados

function sum(args){
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

// Agora, utilizando rest operator

function sumRest(...args) {
    return args.reduce((acc, value) => acc + value, 0);
};

console.log(sum(2, 3, 5, 8, 13, 21));

// Coletando parte dos argumentos com rest e executando as 4 operações:

function opRest(operador, initial, ...args) {
    switch (operador) {
        case '+':
            return args.reduce((initial, value) => initial + value, initial);
        case '-':
            return args.reduce((initial, value) => initial - value, initial);
        case '*':
        case 'x':
        case 'X':
            return args.reduce((initial, value) => initial * value, initial);
        case '/':
        case '\\':
            return args.reduce((initial, value) => initial / value, initial);
        case '%':
            return args.reduce((initial, value) => initial % value, initial);
        default:
            throw new Error('Operador inválido!');
    }
}

console.log(opRest('%', 12, 5, 2));

// O spread operator possui a mesma sintaxe, mas faz o inverso do rest: transforma valores em arrays, objetos, em argumentos para outra função:

const spreadexListaAluno1 = ['José Ferreira', '1o medio', 9.4, 10, 7, 6];

let dictChamadaI = {};

function organizarAlunoNotasI (nome, serie, ...rest){
    return dictChamadaI = {
        Aluno: {
            nome,
            serie,
            notas: rest,
        }
    };
};

console.log(organizarAlunoNotasI(...spreadexListaAluno1));

//

const notasAluno1 = {
    'José Ferreira': {serie: '9 Ano', notas: [10, 9.4, 7.3, 8]}
};

let dictChamada = {};

function organizarAlunoNotas(...rest){
    return dictChamada = {
        ...rest,
    };
};

console.log(organizarAlunoNotas(notasAluno1));

// Para clonar objetos, o ...spread deve ser utilizado para o objeto maior e, individualmente, para os seus sub-objetos, para que possíveis mudanças nos clones não reflitam nos sub-objetos de origem.