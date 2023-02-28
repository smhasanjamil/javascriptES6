/*
*==================== Use Of ... Spread Operator ====================
*/
const number = [2, 4, 1, 9, 3, 5, 26, 7];
const number2 = [32, 45, 67];

//console.log(Math.min(3, 2, 1, 8, 9));
//console.log(Math.min(...number));

//Add two array
const newArr = [123, 21, 24, 32, ...number2];
//console.log(newArr);


//More Use of Spread Operator
let num1 = [1, 2, 3, 4, 5];
let num2 = [...num1];

num1.push(55);
num2.push(99);

console.log(num1);
console.log(num2);