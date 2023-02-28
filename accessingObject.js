const person = {
    name: 'Hasan Jamil',
    age: 23,
    contact: {
        phone: '01700000000',
        email: 'contact@hasanjamil.com'
    },
    education: {
        universityName: 'North Western University',
        subject: [
            { name: 'Bangla', marks: 85 },
            { name: 'English', marks: 82 },
            { name: 'Math', marks: 90 }
        ]
    }
}
/*
const age = person.age;
const age = person['age'];

const property = 'name';
const result = person[property]
console.log(result);
*/


//Accessing
console.log(person.education.subject[1].marks);
