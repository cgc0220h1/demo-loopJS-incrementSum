function showFibonacci() {
    let loopCycle = +document.getElementById('num-input').value;
    let total = 0;
    while (loopCycle > 0) {
        total += loopCycle;
        loopCycle--;
    }
    document.getElementById('result').innerHTML = "Số Fibonacci tương ứng là :" + total;
}