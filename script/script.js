let currentTime, birthday, difference;
function Timer() {
    currentTime = new Date(); // Берём нынешнее время
    birthday = new Date(document.getElementById("Birthday").value); // День рождения

    if(birthday.getDate() <= currentTime.getDate()) // Если день рождения в этом году уже прошёл
        birthday.setYear(currentTime.getFullYear() + 1); // переносим на год вперёд

    difference = birthday.getTime() - currentTime; // Считаем разницу во времени в мс
    document.getElementById("TimerToBirthday").innerText =
        `${Math.floor(difference / (1000 * 60 * 60 * 24))}d : ${Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}h : ${Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))}m : ${Math.floor((difference % (1000 * 60)) / 1000)}s`;
    // Выводим таймер
}

function Start() {
    setInterval(Timer, 1000);
}