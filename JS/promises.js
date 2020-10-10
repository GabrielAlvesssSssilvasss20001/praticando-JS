
// --> Callbacks
/*
    function doSomething(callback) {
        setTimeout(function() {
            // procedure
            callback('First Data');
        }, 1000);
    };

    function doOtherThing(callback) {
        setTimeout(function() {
            // procedure 2
            callback('Second data');
        }, 1000);
    };

    // --> A tarefa abaixo simula a execução de duas tarefas sequenciais (assíncronas) + setTimeout dos dados consumidos e seus repectivos tratamentos de erros.

    function doAll() {
        try {
            doSomething(function(data) {
                var processedData = data.split('');
                try {
                    doOtherThing(function(data2) {
                        var processedData2 = data2.split('');

                    try {
                        setTimeout(function() {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (error) {
                        // handle error
                    }
                    });
                } catch (error) {
                    // handle error
                }
            });

        } catch (error) {
            // handle error
        }
    };

    doAll();
*/

// --> Apesar de o código funcionar, é perceptível, entretanto, que misturar tantas tarefas com os tratamentos individuais faz o código ficar extenso e confuso.
// Assim, o uso de Promises simplifica o tratamento de erros e permite encadeamentos assíncrono e síncrono de procedimentos.
    // --> Estados de uma Promise: Pending, Fulfilled, Rejected

const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        /* Teste de erro: 
        throw new Error('Unknown Error'); */
        setTimeout(function() {
            // procedure
            resolve('First data');
        }, 3000);
    });

const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
        /* Teste de erro: 
        throw new Error('Unknown Error'); */
        setTimeout(function() {
            // procedure
            resolve('Second Data');
        }, 1000);
    });

 //Execução síncrona:

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    let splt1 = data[0].split('');
    console.log("Dados 1 síncrono: ", splt1);
    let splt2 = data[1].split('');
    console.log("Dados 2 síncrono: ", splt2);        
})
    .catch(err => {
        console.log(err);
    });

 // Execução assíncrona/sequencial:

doSomethingPromise()
    .then(data => {
        let splt1 = data.split('');
        console.log("Dados 1 assíncrono: ", splt1);

        return doOtherThingPromise();
    })
        .then(data2 => {
            let splt2 = data2.split('');
            console.log("Dados 2 assíncrono: ", splt2);
        })
            .catch(err => console.log('Algo deu errado!', err));

// Execução do tipo race (A primeira Promise executada será exibida):

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log("Primeira Promise executada(race): ", data);
});