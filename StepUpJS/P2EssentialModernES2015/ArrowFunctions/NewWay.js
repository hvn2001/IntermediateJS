const standardFnAdd = function (num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

const arrowFnAdd = (num1, num2) => {
    console.log(num1 + num2);
    return (num1 + num2);
};

standardFnAdd(2, 5); // -> 7
arrowFnAdd(2, 5); // -> 7