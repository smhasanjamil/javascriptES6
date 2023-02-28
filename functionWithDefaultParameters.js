//Inside the function value are the default parameter
function add(num1 = 0, num2 = 0) {
    const total = num1 + num2;
    return total;
}
console.log(add(5, 8));