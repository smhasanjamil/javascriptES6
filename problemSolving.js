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
console.log(names);



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
console.log(jamaiList);