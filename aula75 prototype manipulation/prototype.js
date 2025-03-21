// Object.setPrototypeOf(object, variable to attrelate in object proto) ! Sets the object prototype
// Object.getPrototypeOf(object) ! Returns the object prototype
// Object.create(prototype, { keys }) ! Returns an object with a presetted prototype

// new Object -> Object.prototype
const objectA = {
    keyA: 'a'
    // __proto__: Object.prototype
};

const objectB = {
    keyB: 'b'
    // __proto__: objectA.prototype
};

const objectC = new Object();
objectC.keyC = 'c';

Object.setPrototypeOf(objectB, objectA);
// faz o prototype de objectB
// ser o objectA, ou seja:
// objectB.__proto__ === objectA
Object.setPrototypeOf(objectC, objectB);
// objectC passa por todos
// C -> B -> a

console.log(objectB.keyA);
console.log(objectC.keyA);
