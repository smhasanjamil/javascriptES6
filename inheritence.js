//Akjoner boisisto arekjon pawa

class person {
    // name;
    // age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showName() {
        console.log(`My name is ${this.name}. Ny age is ${this.age}.`);
    };
};

class student extends person {
    // name;
    // age;
    subject;
    roll;

    constructor(name, age, subject, roll) {
        super(name, age);
        this.subject = subject;
        this.roll = roll;
    }

    showDetails() {
        console.log(`My name is ${this.name}. Ny age is ${this.age}. My Subject: ${this.subject}. My roll is ${this.roll}.`);
    };
};


class teacher extends person {
    // name;
    // age;
    faculty;
    designation;

    constructor(name, age, faculty, designation) {
        super(name, age);
        this.faculty = faculty;
        this.designation = designation;
    }

    showDetails() {
        console.log(`My name is ${this.name}. Ny age is ${this.age}. My faculty is ${this.faculty}. My designation is ${this.designation}.`);
    };
};



const st = new student('Hasan', 24, 'CSE', 38);
const th = new teacher('Jamil', 25, 'CSE', 'Lecturer');
st.showDetails();
th.showDetails();