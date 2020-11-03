// console uses:

console.log('Log in console');

console.warn('Warn in console');

console.error('Error in console');

console.trace();

console.group('Group1');
    console.log('Log 1 in group');
    console.log('Log 2 in group');
console.groupEnd('End of Group1');

console.time('Log Time');
    setTimeout(() => {
        console.timeEnd('Log Time');
    }, 2000);

console.time('Log Time2');
    setTimeout(() => {
        console.timeEnd('Log Time2');
    }, 1500);

console.time('Log Time3');
    setTimeout(() => {
        console.timeEnd('Log Time3');
    }, 1200);

console.table(['Gabriel', 'Alves']);

console.assert(1===(2-4), 'False assertion');

    // Só no Browser:
console.log('%c Com estilo', 'color: darkblue; font-size: 25px');