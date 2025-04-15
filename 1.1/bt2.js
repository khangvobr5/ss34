function check(event) {
    event.preventDefault()
    let gmail = event.target.gmail.value
    let password = event.target.password.value
    let passwordConfirm = event.target.passwordConfirm.value
    if (password !== passwordConfirm) {
        alert(`Xác nhận mật khẩu không khớp!`)
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const gmailExists = users.some(user => user.gmail === gmail);
    if (gmailExists) {
        alert(`email da ton tai`)
        return
    }
    const newUser = { gmail, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert(`dang ky thanh cong`)
    document.querySelector("form").reset();
}