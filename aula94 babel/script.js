/*  
Iniciar o pacote npm:
        npm init -y
    
Instalar o babel:
        npm install --save-dev @babel/cli @babel/preset-env @babel/core
    
Aplicar o babel:
        npx babel (arquivo.js) -o bundle.js --presets=@babel/env
*/

class Person {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}