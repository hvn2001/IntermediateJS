const arr = [1, 2];
const [one = 'one', two = 'two', three = 'three'] = arr;
console.log(one, two, three); // -> 1 2 'three'

const obj = {key1: 'val1'};
const {
    key1 = 'val1Default',
    key2 = 'val2Default'
} = obj;
console.log(key1, key2); // -> val1 val2Default
