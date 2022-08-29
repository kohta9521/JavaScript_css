const arry = [1,  2, 3, 4, 5];

arry.forEach(function(val) {
    console.log(val);
});

arry.forEach(v => console.log(v));


for(let i  = 0; i < arry.length; i ++) {
    const v = arry[i];
    console.log(v);
}