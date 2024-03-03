const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
var todos = ['clean', 'code', 'read', 'play'];



function addTodo() {
    console.log('Button Clicked');
    const title = todoInput.value.trim();
    if (title) {
        todos.push(title);
        document.getElementById('todoInput');;
        fetchTodos();
    }
}

function fetchTodos(){
    todoList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo;
            todoList.appendChild(li);
        });
}

// Fetch todos when the page loads
fetchTodos();
