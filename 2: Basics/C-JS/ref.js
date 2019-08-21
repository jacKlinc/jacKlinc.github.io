//console.log("Hello");
var someVar = 0;

// Escaping Strings
//console.log("This allows for quotes \"inside strings.\"");

// Comparing Strings
if ("jack" == "Jack") { // J != j
    //console.log(false);
}

// Equality Operator
if (someVar === 0) { // use === for zero or !== for the not equal
    //console.log("This is zero")
}

// ******* Advanced Conditionals ******* 

// Falsy Values
/* -Every value in JS has an inherent Boolean value and is converted 
    into that value when being evaluated
   -If a value has an empty string, it is now falsy 
   -Falsy values include: false, null, undefined, 0, "", NaN
*/

// Truthy values include: true, 13, "hello", {}, []

// Terneray Operators: shortcuts for if/else statements
var testBool = true;
someVar = testBool ? 0 : 4; // 0 is in case of true and 4 is false

var P = false;
var A = true;
var category = ((A && P) ? "omni" : "") || ((P && !A) ? "herb" : "") || ((!P && A) ? "carn" : "undef");

// Switch Statements
var option = "hello";
switch (option) {
    case "1": 
        console.log("This is case 1");
        break; // this exits after printing
    case "2": 
        console.log("This is case 2");
}   

var num = 99;

while (num >= 0) {
    console.log(num + "bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    num--;
}

// ****** Functions ****** 
// Shadowing / Scope Override: identical variable names from different scopes
var x = 1;
function addTwo() {
    x = x + 2;
}
addTwo();
x = x + 1; // The last used value of x is used
console.log(x); // even if its not in the right scope

// Function Expressions: when a function is stored in a variable
var func = function(par) {
    return par;
}

var func = function ted(ip){
    return ip;
}
func(); // call the variable name not the function name (ref error)
