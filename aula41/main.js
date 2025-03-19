function maxNum (num1, num2) {
    let bigger;
    if (num1 > num2) {
        bigger = num1;
    };

    if (num2 > num1) {
        bigger = num2;
    };
    return bigger;
};

const teste = maxNum(9, 5);
console.log(teste);

function maxLuiz (x, y) {
    if (x > y) {
        return x;
    };
    return y;
    // return x > y ? x : y;
};

const testeLuiz = maxLuiz(9, 5);
console.log(testeLuiz);

const maxLuiz2 = (x, y) => {
    return x > y ? x : y;
};

const testeLuiz2 = maxLuiz2(9, 5);
console.log(testeLuiz2);