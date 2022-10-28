let K = prompt("Enter K");
let size = 30;
const arr = [];
for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 101 - 50));
}

let index = 0;
while (index < size) {
    if (K === arr[index]) {
        document.getElementById("Number").innerText = `${index}:`;
        document.getElementById("Data").innerText = `${arr[index]}`;
        exit();
    }
    index++;
}
alert("K not found");