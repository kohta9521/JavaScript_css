// function hello(callback, lastname) {
//     console.log('Hello '  + callback(lastname));
// }


// function getName() {
//     return 'Code Mafia';
// }

// hello(getName);


// hello(function(name) {
//     return 'Code' + name;
// }, ' Mafia');


function doSomethin(a, b, callback) {
    const result = callback(a, b);
    console.log(result);
}

function multiply(a, b) {
    return a * b;
}

function plus(a, b) {
    return a + b;
}

doSomethin(2, 3, plus);
