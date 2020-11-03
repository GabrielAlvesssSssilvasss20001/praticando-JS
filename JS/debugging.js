let valor = 0;

function incrementaUm() {
    valor += 1;
    document.getElementById("incremento").innerHTML = `Valor atual: ${valor}`;
};

function decrementaUm() {
    valor -= 1;
    document.getElementById("incremento").innerHTML = `Valor atual: ${valor}`;
};