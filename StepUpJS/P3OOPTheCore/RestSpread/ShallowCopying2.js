const arr = [1, 2, 3];
const arrCopy = [...arr];

const obj = {item: 'value'};
const objCopy = {...obj};

console.log(arrCopy); // -> [ 1, 2, 3 ]
console.log(objCopy); // -> { item: 'value' }