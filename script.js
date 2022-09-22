let todo1 = 'Get groceries';
let todo2 = 'Wash car';
let todo3 = 'Make dinner';
let todo4 = 'Go to gym';

let todos = ['Get groceries', 'Wash car', 'Make dinner'];
todos.push('another todo');

function addTodo(todoTitle) {
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
}

addTodo(todo1);
addTodo(todo4)


