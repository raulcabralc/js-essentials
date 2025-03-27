fetch('pessoas.json')
    .then((data) => {
        return data.json();
    })
    .then((json) => {
        return loadElements(json)
    })
    .catch(error => console.log('Erro!', error));

function loadElements(json) {
    const table = document.createElement('table');
    const result = document.querySelector('.result');

    for (let person of json) {
        const tr = document.createElement('tr');
        let td = document.createElement('td');

        td.innerHTML = person.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = person.cpf;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = person.idade;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    result.appendChild(table);
}
