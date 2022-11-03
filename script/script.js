let answers = [
    'It is certain', 'It is decidedly so', 'Without a doubt', 'Yes — definitely',
    'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Signs point to yes', 'Yes',
    'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now',
    'Concentrate and ask again', `Don't count on it`, 'My reply is no', `My sources say no`,
    'Outlook not so good', 'Very doubtful'
];
function getAnswer() {
    if (document.getElementById("Q").value == null || document.getElementById("Q").value == "") {
        alert("Введите вопрос");
        return;
    }
    console.log('Get Answer');
    document.getElementById('Answer').innerText = answers[Math.floor(Math.random() * 20)];
}
let body = document.getElementsByTagName('body')[0];
body.style.backgroundImage = 'url(images/sky.jpg)';
body.style.textAlign = 'center';
body.style.marginTop = '10vh';
body.innerHTML += `<input type="text" id="Q"><br>`
let q = document.getElementById("Q");
q.style.width = '300px';
q.style.height = '50px';
q.style.fontSize = "xx-large";
q.style.backgroundColor = 'MediumBlue';
q.style.color = 'Pink';
q.style.borderRadius = '30%'
q.style.border = '3px solid black';
q.style.textAlign = 'center';
body.innerHTML += `<img src="images/magicball.png" width="800" id="MagicBall">`
let magicball = document.getElementById("MagicBall");
magicball.style.borderRadius = '50%';
magicball.style.cursor = 'pointer';
body.innerHTML += `<div id="Answer"></div>`;
let answer = document.getElementById("Answer");
answer.style.color = 'Black';
answer.style.fontSize = 'xx-large';
answer.style.position = 'relative';
answer.style.top = '-37vh';
document.getElementById("MagicBall").addEventListener('dblclick', getAnswer);