/*
*==================== Find SCIC student using Filter ====================
*/
const students = [
    { name: 'Ernest Lewis', email: 'hello@lewis.com', avg: 56, fiftyPercent: true },
    { name: 'Chi Good', email: 'info@Good.com', avg: 57, fiftyPercent: false },
    { name: 'Olen Gomez', email: 'contact@Gomez.com', avg: 42, fiftyPercent: false },
    { name: 'Franklin Hamilton', email: 'help@Hamilton.com', avg: 52, fiftyPercent: true },
    { name: 'Marcel Whitaker', email: 'hello@Whitaker.com', avg: 32, fiftyPercent: false },
    { name: 'Kerry Woods', email: 'info@Woods.com', avg: 37, fiftyPercent: true },
    { name: 'Shirley Payne', email: 'contact@Payne.com', avg: 57, fiftyPercent: true }
];

const scic = students.filter((s) => s.avg >= 50 && s.fiftyPercent === true);
const names = scic.map(n => n.name);
//console.log(names);



/*
*==================== Find Stable Jamai using Filter Method ====================
*/
const polapain = [
    { name: 'Abul', job: 'Sorkari', salary: 17000 },
    { name: 'Babul', job: 'Besorkari', salary: 25000 },
    { name: 'Kabul', job: 'Sorkari', salary: 21000 },
    { name: 'Habul', job: 'Besorkari', salary: 47000 },
    { name: 'Jabul', job: 'Sorkari', salary: 23000 },
    { name: 'Mabul', job: 'Besorkari', salary: 55000 }
];

const jamais = polapain.filter(pola => (pola.job === 'Sorkari' && pola.salary >= 20000) || (pola.job === 'Besorkari' && pola.salary >= 40000));

const jamaiList = jamais.map(nam => nam.name);
//console.log(jamais);
//console.log(jamaiList);




/*
*==================== Convert Array Of Objects To Single Object using map or foreach ====================
*/
const persons = [
    { id: 'ID01', name: 'Abul Vai', age: 23 },
    { id: 'ID02', name: 'Babul Vai', age: 23 },
    { id: 'ID03', name: 'Habul Vai', age: 23 },
    { id: 'ID04', name: 'Jabul Vai', age: 23 }
];

const info = {};

persons.map(p => {
    // console.log(p);
    // console.log(info[p.id] = p.name);
    const id = p.id;
    const value = p.name;

    info[id] = value;
});
//console.log(info);
//console.log(info.ID01);


/*
*==================== API Array Access ====================
*/
const Students = [
    {
        student1: {
            name: 'abul',
            age: '17',
            isMale: true,
            education: {
                class: 7,
                subjects: ['bangla', 'english', 'math'],
                school: 'durgapur high school',
            }
        },
        student2: {
            name: 'jarina',
            age: '19',
            isMale: false,
            education: {
                class: 6,
                subjects: ['bangla', 'english', 'math'],
                school: 'Rajshahi high school',
            }
        },
        student3: {
            name: 'habul',
            age: '15',
            isMale: true,
            education: {
                class: 9,
                subjects: ['bangla', 'english', 'math'],
                school: 'Dhaka high school',
            }
        }
    }
];



Students.map(student => {
    for (let i in student) {
        //console.log(i);
        const { name, age, isMale, education } = student[i];
        const { subjects } = education;

        const information = `
        My Name is ${name}.
        My age is ${age}.
        My gender is ${isMale === true ? 'Male' : 'Female'},
        My subject are: ${subjects.map(s => s)}`;

        console.log(information);
    }

});