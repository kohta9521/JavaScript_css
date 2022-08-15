const child = document.querySelector(".child");
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log('in view');
            observer.unobserve(entry.target);
        }else {
            console.log('out view');
        }
    });
        
    // alert('intersectiong');
}
const io =  new IntersectionObserver(cb);
io.observe(child);
io.observe(child1);
io.observe(child2);

