// Model - Array to store tasks
let tasks = [];

// View - Function to render the task list
function renderTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        listItem.addEventListener('click', () => {
            // Controller - Remove a task when clicked
            removeTask(index);
        });
        taskList.appendChild(listItem);
    });
}

// Controller - Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTask = taskInput.value.trim();

    if (newTask !== '') {
        tasks.push(newTask);
        taskInput.value = '';
        renderTaskList();
    }
}

// Controller - Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    renderTaskList();
}

// Controller - Event listener for adding a task
document.getElementById('addTask').addEventListener('click', addTask);

// Initialize the view
renderTaskList();
