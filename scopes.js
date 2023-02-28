/*
*==================== Scopes in js ====================
*/
/*
There are three types of scope.
    1. Global Scope - We can access from anywhere
    2. Local Scope - In the function
    3. Block Scope - Inside the {} or inside a block (let, const are block variable)
*/
let Name = 'Hasan';
const age = 24;

{
    let Name = 'Jamil'
    const age = 25;
    console.log(Name);
    console.log(age);
}