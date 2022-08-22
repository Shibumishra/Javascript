let scores = new Array(); // The scores array is empty, which does hold any elements.
let athletes = new Array(3); // creates an array with initial size 3
let scores1 = new Array(1, 2, 3); // create an array with three numbers 1,2 3
let signs = new Array('Red'); // creates an array with one element 'Red'

// <!*********************************************************************************************!>

//To change the value of an element, you assign that value to the element like this:
let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
mountains[2] = 'K2';

console.log(mountains);
output: ['Everest', 'Fuji', 'K2']

// <!*********************************************************************************************!>


// Adding an element to the end of an array
// To add an element to the end of an array, you use the push() method:
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.push('Red Sea');

console.log(seas);
output: ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea']


// <!*********************************************************************************************!>


// Adding an element to the beginning of an array
// To add an element to the beginning of an array, you use the unshift() method:
let seas1 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.unshift('Red Sea');

console.log(seas1);
output: ['Red Sea', 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea']


// <!*********************************************************************************************!>


// Removing an element from the end of an array
// To remove an element from the end of an array, you use the pop() method:
let seas3 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const lastElement = seas3.pop();

console.log(lastElement);
output: 'Baltic Sea';


// <!*********************************************************************************************!>


// Removing an element from the beginning of an array
// To remove an element from the beginning of an array, you use the shift() method:
let seas4 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const firstElement = seas4.shift();

console.log(firstElement);
output: 'Black Sea';


// <!*********************************************************************************************!>


// Finding an index of an element in the array
// To find the index of an element, you use the indexOf() method:
let seas5 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
let index = seas5.indexOf('North Sea');

console.log(index); // 2



// <!*********************************************************************************************!>


// Check if an value is an array
// To check if a value is an array, you use Array.isArray() method:
console.log(Array.isArray(seas)); // true