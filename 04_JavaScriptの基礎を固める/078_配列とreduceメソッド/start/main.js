const arry = [1, 2, 3, 4, 5];

arry.reduce(function(accu, curr) {
    console.log(accu, curr);
    return accu + curr;
});