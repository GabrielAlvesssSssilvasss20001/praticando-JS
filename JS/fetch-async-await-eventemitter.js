// Também pode-se trabalhar com requisições utilizando Promises por meio do comando fetch:

const fetch = require(fetch);

fetch('http://localhost:8080/data.json')
    .then(responseStream => {
        if (responseStream === 200) {
            return responseStream.json();
        }
        else {
            throw new Error('Request error');
        };
    })
    .then(data => {
        console.log(data);
    })
        .catch(err => {
            console.log('Error: ', err);
        });

// Trabalhando Async / Await:
const asyncTimer = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(01234);
            }, 10000) 
        });

const asyncReqSimulation = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ reg: 56789});
            }, 500) 
        });

/* Como o await faz data e dataII esperarem o retorno de asyncTimer e asyncReqSimulation para darem continuidade a sua execução, estas (asyncTimer e asyncReqSimulation) são executadas por completo enquanto simpleAsyncFunc espera pelos seus retornos.
Ou seja: O await torna-as assíncronas. Sem o await, o valor retornado pelas Promises ainda não executadas seria o seu estado pendente: 'Promise {<pending>}', pois simpleAsyncFunc não esperaria-as para dar continuidade ao seu processamento.
*/

/*
const simpleAsyncFunc = async() => {
    const data = await asyncTimer();
    console.log(data);
    // A próxima linha deveria conter um fetch para exemplificar a espera da resposta de uma requisição para continuar o processamento, mas a importação do módulo está dando problemas:
    const dataII = await asyncReqSimulation();

    return dataII;
};
*/

const simpleAsyncFunc = async() => {
    // Usar Promise.race para verificar que a execução é síncrona, mas a requisição é executada e finalizada antes de asyncTimer.
    const data = Promise.all([asyncTimer(), asyncReqSimulation()]); 

    return data;
};

simpleAsyncFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

// EventEmitter é um recurso exclusivo do Node que permite a manipulação e a emissão de eventos:

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
    }
}

const users = new Users();

users.once('User logged', data => {
    console.log(data);
});

users.userLogged({user: 'Eu'});
users.userLogged({user: 'Myself'});


// EventTarget