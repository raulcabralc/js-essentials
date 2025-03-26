// Fetch API pode substituir XMLHttpRequest()

fetch('page1.html')
    // fetch:
    // pegando o codigo da request http
    .then((response) => {
        if (response.status !== 200) {
            // verificando se a conexão sucede
            throw new Error('Error 404 MEU');
        }
        return response.text();
        // retorna o texto da página, no caso o html
    })
    .then((html) => {
        console.log(html);;
    })
    .catch((error) => {
        console.log(error);
    });

document.addEventListener('click', (event) => {
    const el = event.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        // quando clicar em um link,
        // não abrir a página e executar
        // loadPage(), mandando a tag <a>
        // como parâmentro
        event.preventDefault();
        loadPage(el);
    }
})

async function loadPage(element) {
    // recebe a tag <a>
    try {
        const href = element.getAttribute('href');
        // extrai o href da tag <a> recebida em element
        const response = await fetch(href);
        // fetch pega o código da request http

        if (!response.status >= 200 && response.status < 300) {
            // verificando se a conexão sucede
            throw new Error('Error!');
        };

        const html = await response.text();
        // pegando o conteúdo da página html
        // que o fetch pegou pelo href do <a>
        loadResult(html);
        // apenas mostrando o html div criada no index.html
    } catch (error) {
        console.log(error);
    }
}

function loadResult(response) {
    // localiza a div e introduz o html lá
    const result = document.querySelector('.result');
    result.innerHTML = response;
}
