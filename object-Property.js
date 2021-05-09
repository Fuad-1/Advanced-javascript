//map, filter, find
const students = [
    {id: 21, name: 'Cortana'},
    {id: 31, name: 'elveis'},
    {id: 41, name: 'polton'},
    {id: 71, name: 'jervies'},
];

const names = students.map(student => student.name);
const ids = students.map(student => student.id);
const bigger = students.filter(student => student.id>40);
const biggerOne = students.find(student => student.id>40);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);

