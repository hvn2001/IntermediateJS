const arr = [1, 2, 3, 4, 5];
const [one, two, ...rest] = arr;
console.log(rest); // -> [3, 4, 5]

const obj = {
    key1: 'val1',
    key2: 'val2',
    key3: 'val3'
};

const {key1, ...others} = obj;
console.log(others); // -> { key2: 'val2', key3: 'val3' }

/*
const arr = [1, 2, 3, 4, 5];
const [one, two, ...rest, five] = arr;
// -> Uncaught SyntaxError: Rest element must be last element
 */