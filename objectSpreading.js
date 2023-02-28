const person = {
    Name: "Hasan Jamil",
    age: 24,
    phone: "01700000000",
    address: "Khulna",
    p: [1, 2, 3, 4]
}
/*
const Name = person.Name;
console.log(Name);
*/
const { Name: naam, age, phone, ...badBakiJinish } = person;
//console.log(naam, age, phone, badBakiJinish);


//More Object Spreading
const person2 = { ...person };
person2.isMale = true;
//console.log(person2);


//More Object Spreading
const { p: pValue } = person;
//console.log(pValue);
//Access first index
const [first, second, ...restValue] = pValue;
console.log(first, second, restValue);