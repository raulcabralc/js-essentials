const people = [
    { id: 3, name: 'Luiz' },
    { id: 2, name: 'Maria' },
    { id: 1, name: 'Helena' },
];

// const newPeople = {};
// for (let person of people) {
//     const { id } = person;
//     newPeople[id] = { ...person }
// };

const newPeople = new Map();
for (let person of people) {
    const { id } = person;
    newPeople.set(id, { ...person });
}

console.log(newPeople);
console.log(newPeople.get(2));
