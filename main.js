document.addEventListener('DOMContentLoaded', () => {
    let newTodoInput = document.getElementById('new-todo');
    let addTodobtn = document.getElementById('add-todo');
    let todoList = document.getElementById('todo-list');

    let showAllbtn = document.getElementById('all');
    let showActivebtn = document.getElementById('show-active');
    let showCompletedbtn = document.getElementById('show-completed');


    addTodobtn.addEventListener('click', addTodo);
    showAllbtn.addEventListener('click', () => filterTodo('all'));
    showActivebtn.addEventListener('click', () => filterTodo('active'));
    showCompletedbtn.addEventListener('click', () => filterTodo('completed'));

    function addTodo() {
        let todoText = newTodoInput.value.trim();

        if (todoText === '') return;

        let todoItem = document.createElement('li');
        let todoTextElement = document.createElement('span');
        let deleteBtn = document.createElement('button');
        let doneBtn = document.createElement('button');

        todoTextElement.textContent = todoText;
        doneBtn.textContent = 'Done';
        deleteBtn.textContent = 'Deleted';

        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });
        doneBtn.addEventListener('click', () => {
            todoTextElement.classList.toggle('completed');

        });

        todoItem.appendChild(todoTextElement);
        todoItem.appendChild(doneBtn);
        todoItem.appendChild(deleteBtn);

        todoList.appendChild(todoItem);

        newTodoInput.value = '';
    }

    function filterTodo(filter) {
        let todos = todoList.children;
        for (const todo of todos) {
            switch (filter) {
                case 'all':
                    todo.style.display = '';
                    break;
                case 'active':
                    if (todo.firstElementChild.classList.contains('completed')) {
                        todo.style.display = 'none';
                    } else {
                        todo.style.display = '';
                    }
                    break;
                case 'completed':
                    if (todo.firstElementChild.classList.contains('completed')) {
                        todo.style.display = '';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;

            }
        }

    }










})