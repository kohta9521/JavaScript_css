const arry = [1,2,3,4,5];

arry.forEach(function(v, i, ary) {
    console.log(v, i, ary);
})

for (let i = 0; i < arry.length; i++) {
    const v = arry[i];
    console.log(v)
}