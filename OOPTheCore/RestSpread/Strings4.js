const str = 'abcde';

const strArr = [...str];
console.log(strArr);
// -> [ 'a', 'b', 'c', 'd', 'e' ]

const strObj = {...str};
console.log(strObj);
// -> { '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e' }