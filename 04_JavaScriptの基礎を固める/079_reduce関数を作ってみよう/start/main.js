const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    return `${accu}<${curr}>`;
}

function reduce(arry, callback, defaultValue) {
    
}

const result = strArry.reduce(tag, "");
console.log(result);