// Capturar evento de submit do form

function escopo() {

    const form = document.querySelector('#form');

    form.addEventListener('submit', (event) => { // ARROW FUNCTION!!!
        // Tudo abaixo é da arrow function
        event.preventDefault();
        const inputPeso = event.target.querySelector('#peso');
        const inputAltura = event.target.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso && !altura) {
            setResultado('Peso e altura inválidos', false)
            return;
        }

        if (!peso) {
            setResultado('Peso inválido', false);
            return;
        }

        if (!altura) {
            setResultado('Altura inválida', false);
            return;
        }

        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc);

        const msg = `Seu IMC é de ${imc} (${nivelImc})`;

        setResultado(msg, true);
    });

    function getNivelImc(imc) {
        const nivel = ['Abaixo do peso', 'Peso Normal',
            'Sobrepeso', 'Obesidade grau 1',
            'Obesidade grau 2', 'Obesidade grau 3'
        ];

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    };

    function getImc(peso, altura) { // Pode fazer funções em qualquer lugar, o JS lê mesmo assim
        return (peso / altura ** 2).toFixed(2);
    }

    function criaP() {
        const p = document.createElement('p');
        return p;
    }

    function setResultado(msg, isValid) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';

        const p = criaP();

        if (isValid) {
            p.classList.add('green')
        } else {
            p.classList.add('red');
        };

        p.innerHTML = msg;
        resultado.appendChild(p);

    }
}

escopo();
