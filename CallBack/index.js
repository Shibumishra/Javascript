function greeting(name) {
    console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
    const name = "Satyabrat";
    callback(name);
}

processUserInput(greeting);
