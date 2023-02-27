/*
*==================== Use Of var ====================
*/
//In JavaScript, a var variable can be declared multiple times in the same scope without causing a syntax error.
var Name = 'Hasan';
Name = 'Jamil';
var Name = 'Hasan Jamil';
//console.log(Name);

/*
*==================== Use Of let ====================
*/
//In JavaScript, a 'let' variable can be declared only once in a particular scope. 
let num = 5;
num = 7;
//console.log(num);


/*
*==================== Use Of const ====================
*/
//In JavaScript, it is not possible to reassign a value to a variable declared with const. 
const number = 5;
console.log(number);