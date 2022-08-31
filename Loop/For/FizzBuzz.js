// Do Someting (Iterate)

var num = [];

function FizzBuzz() {

    for (count = 1; count <= 100; count++) {
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
    }
    console.log(num);
};

FizzBuzz();

