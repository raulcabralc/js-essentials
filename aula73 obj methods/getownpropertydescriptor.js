const product = {
    name: 'Garrafa',
    value: 5.50
};

Object.defineProperty(product, 'name', {
    writable: false,
    configurable: false
});

console.log(Object.getOwnPropertyDescriptor(product, 'name'));
