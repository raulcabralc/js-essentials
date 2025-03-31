import generatePassword from "./generators";

const result = document.querySelector('.result');
const passLength = document.querySelector('.pass-length');
const upper = document.querySelector('.chk-upper');
const lower = document.querySelector('.chk-lower');
const number = document.querySelector('.chk-number');
const symbol = document.querySelector('.chk-symbol');
const button = document.querySelector('.generate-button');

export default () => {
    button.addEventListener('click', () => {
        result.innerHTML = generate();
    });
}

function generate() {
    const password = generatePassword(
        passLength.value,
        upper.checked,
        lower.checked,
        number.checked,
        symbol.checked,
    );

    return password || "Select at least one box and don't set the length to 0";
}
