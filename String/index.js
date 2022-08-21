var abc = "abcdefghijklmnopqrstuvwxyz";
var str1 = "Sk Mishra"
var esc = 'I don\'t \n know';   // \n new line
var len = abc.length;           // string length

abc.indexOf("lmno");            // find substring, -1 if doesn't contain 
abc.lastIndexOf("lmno");        // last occurance
abc.slice(3, 6);                // cuts out "def", negative values count from behind
abc.replace("abc", "123");       // find and replace, takes regular expressions
abc.toUpperCase();              // convert to upper case
abc.toLowerCase();              // convert to lower case
abc.concat(" ", str1);          // abc + " " + str2
abc.charAt(2);                  // character at index: "c"
abc[2];                         // unsafe, abc[2] = "C" doesn't work
abc.charCodeAt(2);              // character code at index: "c" -> 99
abc.split(",");                 // splitting a string on commas gives an array
abc.split("");                  // splitting on characters
// 128.toString(16);               // number to hex(16), octal (8) or binary (2)




// JavaScript String
const data =
{
    "name": "John Doe",
    "age": 45
}
function Sample() { return "TEXT"; }

var str1 = 'With " in it "';
var str2 = "With ' in it '";
var str3 = `Contains other Strings >${str1}<, Properties of objects >${data.age}< or return values from functions >${Sample()}<.`;

console.log(str1); // With " in it "
console.log(str2); // With ' in it '
console.log(str3); // Contains other Strings >With " in it "<, Properties of objects >45< or return values from functions >TEXT<.



//Capitalize only the first letter of the string. 
function capitalizeFirstLetter(string) {
    return string.slice(0,1).toUpperCase() + string.slice(1, string.length).toLowerCase();
};
var str = capitalizeFirstLetter("satYabrtat KUMAR Mishra");
console.log(str);