//Praticando orientação a objetos

// Sintaxe antes do ES6 para a criação de classes:

function SetNome(nome) {
    this.nome = nome;
}
    //Retorna sempre 'Test' como valor de nome
function ReturnFixedNome(nome) {
    this.nome = nome;
    return {
        nome: 'Test'
    }
}

// Maneiras de trabalhar com herança

function Animal(qtdepatas) {
    // this.qtdepatas = qtdepatas;
// Ou altera-se o prototype:
Animal.prototype.qtdepatas = 0;
Animal.prototype.movimenta_se = function () {}
}


function Galinha(cisca) {
    // Chama o escopo de Animal e suas propriedades
    // Animal.call(this, 2);
    // Ou, apos alterar o prototype de Animal, Galinha pode herdá-lo  e usar suas propriedades diretamente
    this.qtdepatas = 2;
    this.cisca = cisca;
    this.cisca = cisca;
}
    // Adicionar funções ou heranças ao prototype de uma função evita a criação de funções internas imutáveis
    //sempre que se criar um novo objeto com new.
// Galinha.prototype = Oject.create(Animal);
Galinha.prototype.voa = function() {
    return False;
}

    // Sintaxe pós-ES6:
class AnimalII {
    constructor(qtdepatas){
        this.qtdepatas = 0;
    }
    movimenta_se = function(){}
}

class GalinhaII extends AnimalII {
    constructor(cisca, bica){
        this.cisca = cisca;
        this.bica = bica;
        this.qtdepatas = 2;
    }
    voa = function(){
        return False;
    }
}

// A modificação de acesso das propriedades de uma class, em JS, antes da versão 12, não inclui modificadores de acesso convencionais:

function Qualquer(qualquerAtr){
    // Variável não visível na criação de um objeto com new
    let varQualquer = qualquerAtr;
    // Entretanto, as funções get e set garantem que o atributo possa ser recuperado ou alterado:
    
    this.getAtrQualquer = function () {
        return varQualquer;
    }
    
    this.setAtrQualquer = function(newValAtrQualquer) {
        varQualquer = newValAtrQualquer;
    }
}

    //Na versão 12, o # indica que a variável é privada:

class QualquerII {
    #varQualquer = '';

    constructor(qualquerAtr) {
        this.#varQualquer = qualquerAtr;
    }
    // get e set...
    get value(){
        return this.#varQualquer;
    }

    set value(valueVarQualquer) {
        this.#varQualquer = varQualquer;
    }
    // get e set (implementação antiga):
    // Object.defineProperty(this, varQualquer, {
    //     get: function() {
    //         return varQualquer;
    //     }
    //     set: function(value) {
    //         varQualquer = value;
    //     }
    // });
}

// Para acessar ou criar métodos sem instanciar a classe, usa-se o método static:
class Person {
    static walk() {
        console.log("Ok, I'm walking...");
    }
    static stopwalking() {
        console.log("Can't you decide? I'm stopping it.");
    }
}
    // Ou:
function PersonII () {

    // Funções/classes também são objetos, então:
    PersonII.walk = function () {
        console.log("Here we go again... Walking.");
    }
    PersonII.stopwalking = function () {
        console.log("Promise me this was the last time, ok? Stopping again.");
    }
}

//Para testar:
    // Instancie uma classe:
    var p = new Person();
    
    //Exiba o objeto criado e seu retorno no console:
    console.log(p);
    // ou uma função dessa classe:
    console.log(p.walk);