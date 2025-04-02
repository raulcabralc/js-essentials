const name = 'Cecis';
const surname = 'Oliveira';

const speakFull = () => {
    return name + ' ' + surname;
};

speakFull()

// module.exports.name = name;
// module.exports.surname = surname;
// module.exports.speakFull = speakFull;

exports.name = name;
exports.surname = surname;
exports.speakFull = speakFull;
this.opa = 'Adicionado com this'

console.log(module.exports);
