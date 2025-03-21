const product = {
    name: 'Garrafa',
    value: 5.50
};

// const other = product;
// iria ligar os dois
// qualquer alteração em
// product iria alterar
// other e vice-versa

const other = { ...product, material: 'steel' };
const otherOther = Object.assign({}, product, { material: 'steel' });
// ambos são a mesma coisa

delete product.name;
console.log(product);
console.log(other, otherOther);
