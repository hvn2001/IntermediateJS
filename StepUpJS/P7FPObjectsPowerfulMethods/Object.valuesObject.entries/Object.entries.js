const obj = {
    key1: 'val1',
    key2: 'val2'
};

const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj);

console.log(keys); // -> [ 'key1', 'key2' ]
console.log(values); // -> [ 'val1', 'val2' ]
console.log(entries); // -> [ [ 'key1', 'val1' ], [ 'key2', 'val2' ] ]