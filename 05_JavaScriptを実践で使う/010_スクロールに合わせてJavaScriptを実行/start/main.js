const child = document.querySelector(".child");
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log('in view');
            entry.target.classList.add('inview');
            // observer.unobserve(entry.target);
        } else {
            console.log('out view');
            entry.target.classList.remove('inview');
        }
    });
        
    // alert('intersectiong');
}

const options = {
    root: null,
    tooyMargin: "-300px",
}
const io =  new IntersectionObserver(cb);
io.observe(child);
io.observe(child1);
io.observe(child2);

