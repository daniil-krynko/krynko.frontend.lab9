function search() {
    let K = prompt("Enter K");
    let size = 20;
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }
    console.log(arr);
    let index = 0;
    while (index < size) {
        if (K == arr[index]) {
            document.getElementById("Number").innerText = `${index}`;
            document.getElementById("Data").innerText = `${arr[index]}`;
            return;
        }
        index++;
    }
    alert("K not found");
}

search();