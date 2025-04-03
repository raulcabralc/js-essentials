const fs = require('fs').promises;

module.exports = (path, encoding) => {
    return fs.readFile(path, encoding || 'utf8');
};