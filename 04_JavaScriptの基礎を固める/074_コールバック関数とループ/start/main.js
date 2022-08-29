function hello(name) {
    console.log('hello ' + name());
}

function getName() {
    return 'Code Mafia';
}

hello(getName);
