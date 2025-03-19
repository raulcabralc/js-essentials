try {
    console.log('Antes do erro');
    console.log(naoExiste);
    // quando encontrar o erro,
    // vai sair do try e ir
    // direto para o catch
    console.log('Após o erro');
} catch(error) {
    console.log('Erro!');
};

console.log();

function soma (num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw('Insira apenas números');
    // se houver o erro, throw vai
    // agir como um return;,
    // encerrando a função

    // caso fosse throw new Error()
    // iria mostrar um erro igual
    // ao normal no console, mas
    // a mensagem do erro seria
    // a dentro de Error('Erro!')
    };
    return num1 + num2;
};

try {
    console.log(soma('a', 9));
} catch (error) {
    console.log(error);
};
