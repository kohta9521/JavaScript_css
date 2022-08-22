const todos = [
    {
        id: 1,
        title: 'Go to school',
        complited: true
    },
    {
        id: 2,
        title: 'Go to museuml',
        complited: true
    },
    {
        id: 3,
        title: 'Go to shopping',
        complited: false
    }
]

for(let i = 0; i < todos.length; i ++) {
    let todo = todos[i];
    if (todo.complited == true) {
        console.log(i, todo.title);
    }
}



for(let i in todos) {
    let todo = todos[i];
    if (todo.complited == true) {
        console.log(i, todo.title);
    }
}

for(let i of todos) {
    let todo = todos[i];
    if (todo.complited == true) {
        console.log(i, todo.title);
    }
}