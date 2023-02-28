/*
1. Find return a single result
2. Filter return an array
*/
const numbers = [44, 78, 41, 43, 56];

const names = ['Cameron Ortiz', 'Allen Hagan', 'Ryan Merritt', 'Randall Sharp', 'Ismael McLaughlin'];


//Using find
const x = numbers.find((n) => n >= 50);
//console.log(x);
const y = names.find((m) => m.length > 10);
//console.log(y);



//Using Filter
const a = numbers.filter((i) => i >= 50);
//console.log(a);

const b = names.filter((j) => j.length > 12);
console.log(b);