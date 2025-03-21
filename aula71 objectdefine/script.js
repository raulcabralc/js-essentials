// defineProperty
// defineProperties

function Product(name, value, stock) {
    // usando Object.defineProperties faz desnecessário
    // a declaração com exemplo: this.name = name,
    // pois essa declaração já será feita nas configurações
    // do objeto

    // Object.defineProperty(this, 'chave', {configurações})
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        value: stock,
        writable: false,
        configurable: false
    });
    // alterando a propriedade do stock

    // enumerable: mostra ou não o stock
    // value: define o valor do stock
    // writable: permite alterar ou não
    // configurable: permite reconfigurar

    // Object.defineProperties(this, {
    // chave1: {configurações},
    // chave2: {configurações},
    // chave3: {configurações}
    // });
    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: 'Ceci',
            writable: false,
            configurable: false
        },
        value: {
            enumerable: false,
            value: value,
            writable: true,
            configurable: false
        }
    });

}

const product1 = new Product('Strato', 1500, 3);

delete product1.stock;
// configurable: false não permite apagar a chave
product1.stock = 10;
// writable: false não permite alterar a chave

console.log(product1);
console.log(Object.keys(product1));
// Object.keys() mostra as chaves do objeto
