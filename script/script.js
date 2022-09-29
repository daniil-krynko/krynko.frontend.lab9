function TabulateF() {
    // y = ln ( x^2 + e^|x| + 1)
    // m.log(m.pow(x, 2) + m.exp(m.abs(x)) + 1);

    let h = 300, w = 500; // Height and width of canvas
    let from = Number(document.getElementById("IntervalFrom").value);
    let to = Number(document.getElementById("IntervalTo").value);
    let step = Number(document.getElementById("Step").value);
    let m = Math;
    const whileLoop = [];
    const dowhileLoop = [];
    const forLoop = [];

    /* While loop */
    let x = from;
    while (to >= x) {
        whileLoop.push(m.log(m.pow(x, 2) + m.exp(m.abs(x)) + 1));
        x += step;
    }
    console.log(`While loop: ${whileLoop}`);

    /* DoWhile loop */
    x = from;
    do {
        dowhileLoop.push(m.log(m.pow(x, 2) + m.exp(m.abs(x)) + 1));
        x += step;
    } while (to >= x);
    console.log(`DoWhile loop: ${dowhileLoop}`);

    /* For loop */
    x = from;
    let ctx = document.getElementById("MyCanvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, h/2);
    for (i = 0; to >= x; x += step, i+= step){
        forLoop.push(m.log(m.pow(x, 2) + m.exp(m.abs(x)) + 1));
        ctx.lineTo(i, h/2 - forLoop[forLoop.length - 1]);
    }
    console.log(`For loop: ${forLoop}`);
    ctx.stroke();
}