let userName = prompt("Enter your name");
if (userName != null) {
   document.getElementById("UserName").innerText = userName;
}
let userNumber, compNumber, userScore = 0, compScore = 0;

function Generate() {
    if (userScore == 3) {
        alert(`User won! After pressing "OK", site will reload`);
        location.reload();
    }
    if (compScore == 3) {
        alert(`Computer won! After pressing "OK", site will reload`);
        location.reload();
    }

    userNumber = Math.floor(Math.random() * 10);
    compNumber = Math.floor(Math.random() * 10);
    document.getElementById("UserNumber").innerText = userNumber;
    document.getElementById("CompNumber").innerText = compNumber;
    if (userNumber > compNumber) {
        console.log(`user+ ${userNumber}:${compNumber}`);
        document.getElementById("UserScore").innerText = ++userScore;
    }
    else if (userNumber < compNumber) {
        console.log(`comp+ ${userNumber}:${compNumber}`);
        document.getElementById("CompScore").innerText = ++compScore;
    }
    else {
        console.log(`draw ${userNumber}:${compNumber}`);
        alert("DRAW");
    }
}
