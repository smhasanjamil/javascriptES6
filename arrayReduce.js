const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((previous, current) => {
    return previous + current;
}, 0);
console.log(sum);