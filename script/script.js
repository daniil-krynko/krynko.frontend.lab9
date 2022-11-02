let userName = prompt("Enter your name");
if (userName != null) {
    document.getElementById("UserName").innerText = userName;
}
let userNumber, compNumber, userScore = 0, compScore = 0;

function Generate() {
    userNumber = Math.floor(Math.random() * 10);
    compNumber = Math.floor(Math.random() * 10);
    document.getElementById("UserNumber").innerText = userNumber;
    document.getElementById("CompNumber").innerText = compNumber;
    if (userNumber > compNumber) {
        console.log("user+");
        userScore++;
    }
    else if (userNumber < compNumber) {
        console.log("comp+");
        compNumber++;
    }
    else {
        console.log("draw");
        alert("DRAW");
    }

    if (userScore == 3) {
        alert("User won!");
    }
    else {
        alert("Computer won!")
    }
}