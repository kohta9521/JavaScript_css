const child = document.querySelector('.child');
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
                console.log("inview");
        } else {
                console.log("outview");
        }
    });
    // alert('intersecting');
}
const io = new IntersectionObserver(cb);
io.observe(child);
// io.observe(child1);
// io.observe(child2);
