//Padrões de design são soluções em alto nível para problemas mais gerais envolvendo Classes e Objetos:

//Factory: classes retornam objetos automaticamente, em subst. ao uso do comando 'new':

function Pessoa(customProperties) {
    return {
        name: '',
        age: '',
        //Permite a customização das propriedades acima
        ...customProperties
    }
}

//Singleton: uma única instância é retornada para qualquer chamada da classe:
function SingletonExample() {
    if (!SingletonExample.instace) {
        SingletonExample.instace = this;
    }
    return SingletonExample.instace;
}

//(Not working yet) Decorator: recebe uma função como parâmetro e estende o seu uso:
let loggedIn = prompt("Inserir um bool");

function callIfAuthenticated(fn) {
    if(loggedIn) {
        return fn();
    }
}

function sum(a, b){
    return a + b;
}

console.log(callIfAuthenticated(() => sum(5, 12)));

//Decorator 2 and 3 (soon)

//Observer: uma instância mantém uma lista de objetos (observers) e notifica-os sempre que alguma alteração no estado da classe:
class Observable {
    constructor() {
        this.observers = [];
    }
    subscribe(f) {
        this.observers.push(f);
    }
    unsubscribe() {
        this.observers = this.observers.filter(observers => observers !== f);
    }
    notify(data) {
        this.observers.forEach(f => f(data));
    }
}

//Module: visa organizar e reaproveitar melhor os códigos sem expor suas variáveis globais:
let name = 'default';

function getName() {
    return name;
}

function setName(newName) {
    name = newName;
    return name;
}

export default getName(); 
export default setName(newName);

    // Em outro módulo:
import getName from '';
import setName from '';