const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

function changeColor() {
    h1.style.color = "red";
};
function changeBackGroundColor() {
    h1.style.backgroundColor = "green";
};

btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBackGroundColor);
