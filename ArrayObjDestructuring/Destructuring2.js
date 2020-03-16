const obj = {
    key1: 'val1',
    key2: 'val2'
};

const {
    key1: key1changed,
    key2: key2changed
} = obj;

console.log(key1changed, key2changed); // -> val1 val2