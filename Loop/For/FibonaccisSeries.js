// 1. Find the Fibonacci series

const fibonacci1 = (n) => {
    var output = [];
       if(n === 1){
           output = [0];
       }else if(n === 2){
           output = [0,1];
       }else{
           output=[0,1];
           for(var i=2; i<n; i++){
               output.push(output[output.length -2] + output[output.length -1]);
           }
       }
       return output;
   }
   var output1 = fibonacci1(20);
   console.log(output1);


function fibonacci2(n){
    // Create a new array of size 'n'
    var series = new Array(n);

    // Fills all places in array with 0
    series.fill(0);

    // Seed value for 1st element
    series[0] = 0;

    // Seed value for 2nd element
    series[1] = 1;

    for (let i = 2; i < n; i++) {
        // Apply basic Fibonacci formulae
        series[i] = series[i - 1] + series[i - 2];
    }
    return series;
};
var output2 = fibonacci1(20);
console.log(output2);