// Getter
// Setter

function Product(name, value, stock) {
    this.name = name;
    this.value = value;

    let privateStock = stock;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: () => {
            return privateStock;
        },
        set: (stockValue) => {
            if (stockValue !== Number) {
                console.log('Not a number value');
                return;
            };

            privateStock = value;
        }
        // get e set interceptam alterações
        // no valor da chave
    });
}

const product1 = new Product('Strato', 1500, 3);

product1.stock = 'string';
console.log(product1.stock);
