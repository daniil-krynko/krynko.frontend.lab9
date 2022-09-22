let forma = document.querySelector("form");
forma.addEventListener("submit", e =>
{
    e.preventDefault();
    let login = document.getElementById("login");
    let pswd = document.getElementById("pswd");
    let cpswd = document.getElementById("cpswd");
    if (pswd.value != cpswd.value) {
        alert("Repeat correctly your password");
        return;
    }
    if (pswd.value == login.value) {
        alert("Password can't be as your login");
        return;
    }
});
