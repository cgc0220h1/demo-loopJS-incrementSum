function showFibonacci() {
    let loopCycle = +document.getElementById('num-input').value;
    let sum = 0;
    for (let i = 1; i <= loopCycle; i++) {
        sum += i;
    }
    document.getElementById('result').innerHTML = "Số Fibonacci tương ứng là :" + sum;
}