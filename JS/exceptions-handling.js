class CustomError extends Error {
    constructor({cstMessage, data}) {
        super(cstMessage);
        this.data = data;
    };
};

try {    
    // console.log(nome);

    const nome = 'Gabriel';

    const dictErrors = {
        myServerError: new CustomError({
            cstMessage: 'Something went wrong on acessing the server. Try again later.',
            data: {
                type: 'Primary Server Error'
            }
        }),

        myUnhError: new CustomError({
            cstMessage: 'An unhandled error ocurred',
            data: {
                type: 'Unhandled Error'
            }
        })
};

    throw dictErrors.myServerError;

} catch(err) {
    console.log('Error: ', err);

} finally {
    console.log('Independente de erro, quero que esse trecho execute');
};