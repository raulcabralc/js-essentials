document.addEventListener('click', (event) => {
    const el = event.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault();
        loadPage(el);
    }
})

async function loadPage(element) {
    try {
        const href = element.getAttribute('href');
        const response = await fetch(href);

        if (!response.status >= 200 && response.status < 300) {
            throw new Error('Error!');
        };

        const html = await response.text();
        loadResult(html);
    } catch (error) {
        console.log(error);
    }
}

function loadResult(response) {
    const result = document.querySelector('.result');
    result.innerHTML = response;
}

// Fetch API pode substituir a função ajax()

fetch('page1.html')
    .then((response) => {
        if (response.status !== 200) {
            throw new Error('Error 404 MEU');
        }
        return response.text();
    })
    .then((html) => {
        console.log(html);
    })
    .catch((error) => {
        console.log(error);
    })
