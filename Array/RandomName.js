var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names){
    
    var arr_length = names.length;
    var posInArray = Math.floor(Math.random() * arr_length );
    var randomPerson = names[posInArray];
    var output = randomPerson + " is going to buy lunch today!";

    return output;
    
}

whosPaying(names);
console.log(whosPaying(names));