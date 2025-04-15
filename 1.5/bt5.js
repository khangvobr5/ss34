let employees = JSON.parse(localStorage.getItem("employees")) || [];
function renderTable() {
    const tbody = document.getElementById("employeeTableBody");
    tbody.innerHTML = "";
    employees.forEach((emp, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${emp.name}</td>
          <td>${emp.position}</td>
        `;
        tbody.appendChild(row);
    });
}

function addEmployee() {
    const name = document.getElementById("nameInput").value.trim();
    const position = document.getElementById("positionInput").value.trim();

    if (name === "" || position === "") {
        alert("Vui lòng nhập đầy đủ tên và chức vụ!");
        return;
    }

    employees.push({ name, position });
    localStorage.setItem("employees", JSON.stringify(employees));
    renderTable();

    document.getElementById("nameInput").value = "";
    document.getElementById("positionInput").value = "";
}

renderTable();
