// General Product Function

function Product(name, value) {
    this.name = name;
    this.value = value;
}

// Shirt Function

function Shirt(name, value, color) {
    Product.call(this, name, value);
    // call ligou o nome e valor das duas funções
    this.color = color;
    // Shirt herda tudo de produto, mas pode
    // ter suas próprias especificações
}

// Mug Function

function Mug(name, value, material, stock) {
    Product.call(this, name, value);
    this.material = material;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: () => {
            return stock;
        },
        set: (value) => {
            if (typeof value === 'number') {
                stock = value;
            }
        }
    });
}

// Product Prototype

function convertPercentual(number) {
    return number / 100;
}
Product.prototype.sale = function (percentual) {
    // não usar arrow function!!
    const decimal = convertPercentual(percentual)

    return this.value *= (1 - decimal);
}
Product.prototype.raise = function (percentual) {
    const decimal = convertPercentual(percentual)

    return this.value *= (1 + decimal);
}

// Shirt Prototype

Shirt.prototype = Object.create(Product.prototype);
// vai copiar o prototype do product e colocar na
// shirt, por consequência vai substituir
// a constructor Shirt, e vai mostrar que
// a constructor de Shirt na verdade é Product
Shirt.prototype.constructor = Shirt;
// reafirmando que o construtor de Shirt
// é de fato Shirt

Shirt.prototype.raise = function (number) {
    return 'Shirt raise function!!!';
};
// alterando o metodo raise do protoype para
// testar a herança de Shirt.raise

// Mug Prototype

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

// Testing

const product = new Product('Product', 'Value');
const shirt = new Shirt('Megacat Shirt', 20, 'Black');
const mug = new Mug('Loud Mug', 8, 'Ceramic', 5);

mug.stock = 2;

console.log(product);
console.log(shirt);
console.log(mug);
