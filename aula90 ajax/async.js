// const ajax = (object) => {
//     const xhr = new XMLHttpRequest();
//     // xhr = XML Http Request
//     xhr.open(object.method, object.url, true)
//     // xhr.open('MÉTODO HTTP', url, async?)
//     xhr.send(null);
//     // caso fosse método POST:
//     // poderia enviar um dado no lugar de null

//     xhr.addEventListener('load', () => {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             // entre 200 e 300 significa que a request
//             // http foi um sucesso
//             object.success(xhr.responseText);
//         } else {
//             object.error(xhr.statusText);
//             // texto do status
//         }
//     });
// }

const ajax = (object) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // xhr = XML Http Request
        xhr.open(object.method, object.url, true)
        // xhr.open('MÉTODO HTTP', url, async?)
        xhr.send(null);
        // caso fosse método POST:
        // poderia enviar um dado no lugar de null

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                // entre 200 e 300 significa que a request
                // http foi um sucesso
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
                // texto do status
            }
        });
    })
}

document.addEventListener('click', (event) => {
    const el = event.target;
    const tag = el.tagName.toLowerCase();
    // pegando a tag e convertendo para minúsculo
    // para garantir

    if (tag === 'a') {
        event.preventDefault();
        loadPage(el);
    }
})

async function loadPage(element) {
    const href = element.getAttribute('href');
    // pega o href do a, para ser usado como url
    console.log(href);

    const objectConfig = {
        method: 'GET',
        // object.method (dentro do ajax())
        url: href,
        // object.url (dentro do ajax())
    }

    try {
        const response = await ajax(objectConfig);
        loadResult(response);
    } catch (error) {
        console.log(error);
    }
}

function loadResult(response) {
    const result = document.querySelector('.result');
    result.innerHTML = response;
}
