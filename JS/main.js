// // main js code

function clicado(){
    alert("Você pode perder os dados preenchidos. Quer continuar?");
    document.getElementById("greetings").innerHTML = "<b>Cadastro concluído</b>";
    window.open("https://google.com/");
}

function mouseAcima (elemento) {
    elemento.innerHTML = "MENSAGEM SECRETA";
}

function mouseFora (elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
}

function carregada (){
    alert("LOOK WHAT YOU MADE ME DO");
}
// // Basic list commands

// var lista = ["fruta_cara", "fruta_convencional", "fruta_barata"];
// console.log(lista);
// lista.push("fruta_gratuita");
// console.log(lista);
// lista.pop("fruta_barata");
// console.log(lista);
// var tamanho = lista.length;
// console.log(tamanho);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" / "));

// //Basic dictionary commands
var fruits = {
     fruta1: {nome:"maçã", preco_unit:2.00, estoque:200},
     fruta2: {nome:"melancia", preco_unit:7.50, estoque:50},
    }
 console.log(fruits.fruta1.nome);

// //Condicionais, desvios, dicionarios, listas, funcoes e data/hora

function add_fruit(nome, preco, quantidade){
    Object.assign(fruits, { nova_fruta :{nome: nome, preco: preco, quantidade: quantidade}});
}

var ver = parseInt(prompt("Inserir novo?"));
while(ver) {
    if (fruits != null) {
        var nome = prompt("Insira o nome da fruta: ");
        while (nome === null || nome === NaN || typeof nome !== typeof "str") {
            var nome = prompt("Insira o nome da fruta: ");
        }
        console.log("Nome da fruta: "+ nome);

        var preco_unit = parseFloat(prompt("Insira o preço unitário da fruta: "));
        while (preco_unit < 0 || preco_unit === NaN) {
            var preco_unit = parseFloat(prompt("Insira o preço unitário da fruta: "));
        }
        console.log("Preço unitário da fruta: " + preco_unit);

        var quantidade = parseInt(prompt("Insira a quantidade de estoque da fruta: "));
        while (quantidade < 0 || quantidade === NaN) {
            var quantidade = parseInt(prompt("Insira a quantidade de estoque da fruta: "));
        }
        console.log("Quantidade em estoque: " + quantidade);
    }
    add_fruit(nome, preco_unit, quantidade);
    console.log(fruits);
    var ver = parseInt(prompt("Inserir novo?"));
}

// var data = new Date();
// alert("Data atual: " + data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear());