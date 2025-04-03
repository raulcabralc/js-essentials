const fs = require('fs').promises;
module.exports = (path, data) => {
    fs.writeFile(path, data, { flag: 'w', encoding: 'utf8' })
    // escreve dentro de um arquivo novo
    // fs.writeFile(caminho, conteúdo, { flag: 'flag', encoding: 'encoding' })
};

