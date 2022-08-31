var num = [];
var count = 1;

function FizzBuzz() {

    if (count % 3 === 0 && count % 5 === 0) {
        num.push('fizzBuzz');
    }
    else if (count % 3 === 0) {
        num.push("Fizz");
    }
    else if (count % 5 === 0) {
        num.push("Buzz")
    }
    else {
        num.push(count);
    }
    count++;
    console.log(num);
};

FizzBuzz();

