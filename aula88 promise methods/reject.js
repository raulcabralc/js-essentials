function random() {
    return Math.floor(Math.random() * (5000 - 1000) + 1000)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Valor incorreto');
        setTimeout(() => {
            resolve(msg.toUpperCase());
        }, time);
    });
}

function downloadPage() {
    const inCache = true;

    if (inCache) {
        return Promise.reject('Download Unsucceeded');
    } else {
        return wait('Page downloaded', 3000);
    }
}

downloadPage()
    .then((pageData) => {
        console.log(pageData);
    })
    .catch((error) => {
        console.log('Error!', error);
    });
