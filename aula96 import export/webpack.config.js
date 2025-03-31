// webpack tem que estar na raiz do projeto
// esse arquivo tem seu próprio escopo, nada de fora o altera

// path: trabalha com caminhos no node.js

// import path from 'path';
// seria a mesma coisa

const path = require('path');

module.exports = {
    mode: 'development',
    // modo de como estou trabalhando com esse arquivo:
    // mode: 'development':
    // cria o arquivo de maneira normal para um humano ler
    entry: './src/script.js',
    // entry: de onde exportar
    // basicamente onde vai estar o seu código
    output: {
        // output: para onde será exportado
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        // path.resolve(__dirname, 'pasta1', 'subpasta1', 'sub-subpasta1')
        // path.resolve(__direname, ...) vai resolver como passar pelas pastas até chegar no destino
        filename: 'bundle.js'
    },
    module: {
        // module: pode ter uma rules com vários objetos
        rules: [
            {
                exclude: /node_modules/,
                // ignora a pasta node_modules
                test: /\.js$/,
                // \: faz o . ser de fato um ponto (existe outro significado nas RegExp sobre ele)
                // $: indica que o arquivo termina com .js
                use: {
                    loader: 'babel-loader',
                    // seleciona o loader
                    options: {
                        // objeto com opções do use
                        presets: [
                            // preset a ser utilizado
                            '@babel/env'
                        ]
                    }
                }
            }
        ]
    },
    devtool: 'source-map'
    // devtool: mapea o erro e localiza o arquivo, sempre usar!!!
};
