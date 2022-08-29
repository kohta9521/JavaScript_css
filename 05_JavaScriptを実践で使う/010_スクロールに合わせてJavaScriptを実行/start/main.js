const child = document.querySelector('.child');
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
                console.log("inview");
                entry.target.classList.add('inview');
                // observer.unobserve(entry.target);
        } else {
                console.log("outview");
        }
    });
    // alert('intersecting');
}
const options = {
    root: null, 
    rootMargin: "0px",
    threshold:  0
}
const io = new IntersectionObserver(cb);
io.observe(child);
// io.observe(child1);
// io.observe(child2);
