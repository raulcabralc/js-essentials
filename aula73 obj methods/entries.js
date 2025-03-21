const product = {
    name: 'Garrafa',
    value: 5.50,
    material: 'steel'
};

console.log(Object.entries(product));

for (let entry of Object.entries(product)) {
    console.log(entry);
};

for (let [key, value] of Object.entries(product)) {
    console.log(key, value);
};