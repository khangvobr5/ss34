function loginCheck(e) {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    if (email === "" || password === "") {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.email === email && u.password === password);

    if (user) {

        window.location.href = 'home.html';
    } else {
        alert("Email hoặc mật khẩu không chính xác.");
    }
}