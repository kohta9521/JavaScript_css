document.addEventListener('DOMContentLoaded', function() {
    const el = document.querySelector('.animate-title');
    const str = el.innerHTML.trim().sprit("");
    str.reduce((acc, curr) => {
        c = c.replace(' ', '&nbsp;')
        concatStr += `<span class="char">${c}</span>`;
    })
    let concatStr = '';


    for(let c of str) {
        c = c.replace(' ', '&nbsp;')
        concatStr += `<span class="char">${c}</span>`;
    }

    el.innerHTML = concatStr;
})

//途中　動画を最初から視聴　
//いまいちよくわからない