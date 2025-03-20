// Retorne apenas uma string com o nome da pessoa
// Retorne apenas a chave "nome" do objeto
// Adicione uma chave id a cada objeto

const people = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const name = people.map((object) => {
    return object.nome;
});

const keyName = people.map((object) => {
    return { nome: object.nome };
});

const keyId = people.map((object, index) => {
    const newObject = { ...object }
    // criando cópia do objeto original
    // para não alterá-lo
    newObject.id = index;
    return newObject;
});

console.log(name);
console.log(keyName);
console.log(keyId);
console.log(people);
