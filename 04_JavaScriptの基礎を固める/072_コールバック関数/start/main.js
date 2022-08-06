// function hello(callback) {
//     console.log(callback);
//     console.log('hello ' + callback());
// }

// function getName() {
//     return 'Code Mafia';
// }
// function getFirstName() {
//     return 'Code';
// }

// hello (() => 'Code');


function doSomething(a, b, callback) {
    const result = callback(a, b);
    console.log(result);
}

function multiply(a, b) {
    return a * b;
}

function plus(a, b) {
    return a + b;
}

doSomething(2, 2, multiply);
doSomething(2, 2, plus);
