/*

CPF base: 705.484.450-52

1 - Pegar os primeiros 9 dígitos

2 - Multiplicá-los por 10 em regressão 
e somar os resultados

[
    7x  0x  5x  4x  8x  4x  4x  5x  0x
    10  9   8   7   6   5   4   3   2
    70  0   40  28  48  20  16  15  0  =  237
]

3 - Efetuar a seguinte conta com o total

[
    11 - (resultadoTotal % 11)
    (se o número for maior que 9, número = 0)
]

4 - Incluir o número e repetir o passo 2,
porém começando de 11, para que o último
número se mantenha multiplicado por 2

[
    7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
    11  10  9   8   7   6   5   4   3   2
    77  0   45  32  56  24  20  20  0   10  =  284
]

5 - Efetuar a mesma conta do passo 3

*/

const cpfButton = document.getElementById('validate-btn');
cpfButton.addEventListener('click', validateCPF);

const containerResult = document.querySelector('#result');

const paragraph = document.createElement('p');
paragraph.className = 'result';

function validateCPF() {
    const originalCpf = document.getElementById('cpf-input').value;
    const display = document.getElementById('result');
    if (originalCpf.length < 9) {
        paragraph.classList.remove('valid');
        paragraph.classList.add('invalid');
        containerResult.appendChild(paragraph);
        return paragraph.textContent = 'Invalid CPF';
    };

    // Passo 1
    // Separar os números do CPF
    function cleanCpf(cpf) {
        cpfCleaned = cpf.replace(/\D+/g, '');
        return cpfCleaned;
    }
    // Pegar os nove dígitos do CPF
    function sliceDigits(cpfCleaned, digit) {
        let cpfArray = Array.from(cpfCleaned);
        cpfArray = cpfArray.map((value) => {
            return Number(value)
        });

        let cpfNineDigits = cpfArray.slice(0, digit);
        return cpfNineDigits;
    }

    // Passo 2
    // Multiplica os nove dígitos
    function times(cpfNineDigits, quantity) {
        let counter = 0;
        let cpfArrayNine = [];
        for (let i = quantity; i >= 2; i--) {
            cpfArrayNine.push(cpfNineDigits[counter] * i);
            counter++;
        };
        return cpfArrayNine;
    }
    // Soma os nove dígitos multiplicados
    function sumTimed(cpfArrayNine) {
        let cpfNineTotal = cpfArrayNine.reduce((accumulator, value) => accumulator + value, 0);
        return cpfNineTotal;
    }

    // Passo 3
    // Conta com o total dos nove dígitos
    function getNumberCount(cpfNineTotal) {
        const result = 11 - (cpfNineTotal % 11);
        if (result > 9) return 0;
        return result;
    }

    // Passo 4
    // Incluir o número obtido e repetir a multiplicação
    function includeNumber(result, quantity) {
        const cleanedCpf = cleanCpf(originalCpf);
        const arraySliced = sliceDigits(cleanedCpf, quantity);
        arraySliced.push(result);
        return arraySliced;
    }
    // Juntando o array completo do cpf
    function joinArray(cpfArray) {
        const arrayJoined = cpfArray.join('');
        return arrayJoined;
    }
    // Comparando os cpfs
    function compareCpf(cpf1, cpf2) {
        const cleanFirst = cleanCpf(cpf1);
        const cleanSecond = cleanCpf(cpf2);
        if (cleanFirst === cleanSecond) {
            paragraph.classList.remove('invalid');
            paragraph.classList.add('valid');
            return paragraph.textContent = 'Valid CPF';
        };
        paragraph.classList.remove('valid');
        paragraph.classList.add('invalid');
        return paragraph.textContent = 'Invalid CPF';
    }

    // Nove números
    const cleanedCpf = cleanCpf(originalCpf);
    const nineDig = sliceDigits(cleanedCpf, 9);
    const nineNumbers = times(nineDig, 10);
    const nineTotal = sumTimed(nineNumbers);
    const numberTen = getNumberCount(nineTotal);
    // Dez números
    const tenDig = includeNumber(numberTen, 9);
    const tenNumbers = times(tenDig, 11);
    const tenTotal = sumTimed(tenNumbers);
    const numberEleven = getNumberCount(tenTotal);
    const elevenDig = includeNumber(numberEleven, 10);
    const fullCpf = joinArray(elevenDig);
    // Validação
    const result = compareCpf(fullCpf, originalCpf);
    // Mostrar resultado
    containerResult.appendChild(paragraph);
}
