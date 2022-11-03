let userName = prompt("Enter your name");
if (userName != null && userName != "") {
   document.getElementById("UserName").innerText = userName;
}
let roundCnt = 0, userNumber, compNumber, userScore = 0, compScore = 0;
let cards = {
    2:{ // Валет
        0: `<use href="images/svg-cards.svg#club_jack"/>`,
        1: `<use href="images/svg-cards.svg#diamond_jack"/>`,
        2: `<use href="images/svg-cards.svg#heart_2"/>`,
        3: `<use href="images/svg-cards.svg#spade_2"/>`
    },
    3:{ // Королева
        0: `<use href="images/svg-cards.svg#club_queen"/>`,
        1: `<use href="images/svg-cards.svg#diamond_queen"/>`,
        2: `<use href="images/svg-cards.svg#heart_queen"/>`,
        3: `<use href="images/svg-cards.svg#spade_queen"/>`
    },
    4:{ // Король
        0: `<use href="images/svg-cards.svg#club_king"/>`,
        1: `<use href="images/svg-cards.svg#diamond_king"/>`,
        2: `<use href="images/svg-cards.svg#heart_king"/>`,
        3: `<use href="images/svg-cards.svg#spade_king"/>`
    },
    6:{ // 6
        0: `<use href="images/svg-cards.svg#club_6"/>`,
        1: `<use href="images/svg-cards.svg#diamond_6"/>`,
        2: `<use href="images/svg-cards.svg#heart_6"/>`,
        3: `<use href="images/svg-cards.svg#spade_6"/>`
    },
    7:{ // 7
        0: `<use href="images/svg-cards.svg#club_7"/>`,
        1: `<use href="images/svg-cards.svg#diamond_7"/>`,
        2: `<use href="images/svg-cards.svg#heart_7"/>`,
        3: `<use href="images/svg-cards.svg#spade_7"/>`
    },
    8:{ // 8
        0: `<use href="images/svg-cards.svg#club_8"/>`,
        1: `<use href="images/svg-cards.svg#diamond_8"/>`,
        2: `<use href="images/svg-cards.svg#heart_8"/>`,
        3: `<use href="images/svg-cards.svg#spade_8"/>`
    },
    9:{ // 9
        0: `<use href="images/svg-cards.svg#club_9"/>`,
        1: `<use href="images/svg-cards.svg#diamond_9"/>`,
        2: `<use href="images/svg-cards.svg#heart_9"/>`,
        3: `<use href="images/svg-cards.svg#spade_9"/>`
    },
    10:{ // 10
        0: `<use href="images/svg-cards.svg#club_10"/>`,
        1: `<use href="images/svg-cards.svg#diamond_10"/>`,
        2: `<use href="images/svg-cards.svg#heart_10"/>`,
        3: `<use href="images/svg-cards.svg#spade_10"/>`
    },
    11:{ // Туз
        0: `<use href="images/svg-cards.svg#club_1"/>`,
        1: `<use href="images/svg-cards.svg#diamond_1"/>`,
        2: `<use href="images/svg-cards.svg#heart_1"/>`,
        3: `<use href="images/svg-cards.svg#spade_1"/>`
    },
};
function Randomizer() {
    let rndm;
    do {
        rndm = Math.floor(Math.random() * 10 + 2);
    } while (rndm == 5);
    return rndm;
}
function Generate() {
    if (roundCnt == 3) {
        if (userScore > compScore) {
            alert(`${document.getElementById("UserName").innerText} won!`);
            location.reload();
            return;
        }
        else if (compScore > userScore) {
            alert(`Computer won!`);
            location.reload();
            return;
        } else {
            alert("Draw!")
            location.reload();
            return;
        }
    }
    userNumber = Randomizer();
    compNumber = Randomizer();
    document.getElementById("UserCard").innerHTML = cards[userNumber][Math.floor(Math.random() * 4)];
    document.getElementById("CompCard").innerHTML = cards[compNumber][Math.floor(Math.random() * 4)];
    console.log(`user:comp - ${userNumber}:${compNumber}`);
    document.getElementById("UserScore").innerText = userScore += userNumber;
    document.getElementById("CompScore").innerText = compScore += compNumber;
    roundCnt++;
    document.getElementById("RoundCnt").innerText = `Спроба ${roundCnt} з 3`;
}
