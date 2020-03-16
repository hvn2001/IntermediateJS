const arr = [1, 2, 3];
const [one, two, three] = arr;
console.log(one, two, three); // -> 1 2 3

// ---------------------------------------

const obj = {
    key1: 'val1',
    key2: 'val2'
};
const {key1, key2} = obj;
console.log(key1, key2); // -> val1 val2