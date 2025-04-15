const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}
function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        loadTasks();
    }
}
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}
addTaskButton.addEventListener('click', addTask);
window.onload = loadTasks;