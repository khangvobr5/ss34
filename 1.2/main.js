let tasks = JSON.parse(localStorage.getItem("tasks")) || [
    {
        id: 1,
        content: 'Learn Javascript Session 01',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Anh Bách',
    },
    {
        id: 2,
        content: 'Learn Javascript Session 2',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Lâm th',
    },
    {
        id: 3,
        content: 'Learn CSS Session 1',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Hiếu Ci ớt ớt',
    },
];

let editingId = null;

function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    const tbody = document.getElementById("taskTableBody");
    tbody.innerHTML = "";

    tasks.forEach((task, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${task.content}</td>
        <td>${task.dueDate}</td>
        <td>${task.status}</td>
        <td>${task.assignedTo}</td>
        <td>
          <button onclick="editTask(${task.id})">Sửa</button>
          <button onclick="deleteTask(${task.id})">Xoá</button>
        </td>
      `;
        tbody.appendChild(row);
    });
}

function addOrUpdateTask() {
    const content = document.getElementById("content").value.trim();
    const dueDate = document.getElementById("dueDate").value;
    const status = document.getElementById("status").value;
    const assignedTo = document.getElementById("assignedTo").value.trim();

    if (!content || !dueDate || !status || !assignedTo) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    if (editingId) {
        const task = tasks.find(t => t.id === editingId);
        task.content = content;
        task.dueDate = dueDate;
        task.status = status;
        task.assignedTo = assignedTo;
        editingId = null;
    } else {
        const newTask = {
            id: Date.now(),
            content,
            dueDate,
            status,
            assignedTo,
        };
        tasks.push(newTask);
    }

    saveToLocalStorage();
    renderTasks();
    clearForm();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveToLocalStorage();
    renderTasks();
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        document.getElementById("content").value = task.content;
        document.getElementById("dueDate").value = task.dueDate;
        document.getElementById("status").value = task.status;
        document.getElementById("assignedTo").value = task.assignedTo;
        editingId = id;
    }
}

function clearForm() {
    document.getElementById("content").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("status").value = "";
    document.getElementById("assignedTo").value = "";
}

renderTasks();
