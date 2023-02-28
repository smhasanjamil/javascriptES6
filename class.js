/*
class student {
    name = 'Hasan';
    roll = 38;
}

const student1 = new student();
console.log(student1.name);
*/

class student {
    name;
    roll;

    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }

    showDetails() {
        console.log(`My name is ${this.name}. Ny roll is ${this.roll}.`);
    };
};


const student1 = new student('Hasan', 38);
const student2 = new student('Jamil', 01);
student1.showDetails();
student2.showDetails();