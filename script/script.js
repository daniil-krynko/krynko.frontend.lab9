function splitEmail() {
    let email = document.getElementById("UserEmail").value;
    document.getElementById("Before").innerText = email.split("@")[0];
    document.getElementById("Before").style.color = "red";
    document.getElementById("After").innerText = '@' + email.split("@")[1];
}