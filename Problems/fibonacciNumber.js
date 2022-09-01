function fibonacci(n) {
    var series = new Array(n);

    series.fill(0);

    series[0] = 0;
    series[1] = 1;

    for (let i = 2; i < n; i++) {
        series[i] = series[i - 1] + series[i - 2];
    }
    return series;
}
var number = fibonacci(20);
console.log(number);