console.log('-----------obj2 is a replica of obj1-----------');
const obj1 = {
    name: 'Alex Smith',
    age: 30,
    address: 'CA, USA',
};

const obj2 = Object.assign({}, obj1);
console.log(obj2);
// -> { name: 'Alex Smith', age: 30, address: 'CA, USA' }