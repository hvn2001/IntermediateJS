const obj1 = {key1: 'val1'};
const obj2 = {key2: 'val2'};
const obj3 = {key3: 'val3'};

const obj = Object.assign(obj1, obj2, obj3);
console.log(obj); // -> { key1: 'val1', key2: 'val2', key3: 'val3' }
console.log(obj1); // -> { key1: 'val1', key2: 'val2', key3: 'val3' }
console.log(obj1 === obj); // -> true

