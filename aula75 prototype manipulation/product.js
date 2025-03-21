function Product(name, value) {
    this.name = name;
    this.value = value;
}
function convertToDecimal(number) {
    return number / 100;
}

Product.prototype.sale = function (percentual) {
    const decimal = convertToDecimal(percentual);

    return this.value *= (1 - decimal);
}

const bottle = new Product('Bottle', 15);
const glass = {
    name: 'Glass',
    value: 10
}

Object.setPrototypeOf(glass, Product.prototype);
