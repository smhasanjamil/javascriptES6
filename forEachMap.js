const arr = [1, 2, 3, 4, 5];
//Return number, index and full array
//Using for Each
arr.forEach((num, index, fullArr) => {
    let result = `${num} ${index} ${fullArr}`;
    //console.log(result);
});

//Using map
arr.map((num, index, fullArr) => {
    let result = `${num} ${index} ${fullArr}`;
    console.log(result);
});


/*
for (let n of arr) {
    console.log(n);
}
*/


//Using forEach()
//arr.forEach(num => console.log(num));


//Using Map
//arr.map(number => console.log(number*2));



// Difference Between map() and forEach()
const num1 = arr.forEach(number => number);
//console.log(num1); //forEach dont return

const num2 = arr.map(numbers => numbers * 2);
//console.log(num2); //map return value