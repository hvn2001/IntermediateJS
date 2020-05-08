console.log('--------Like the other, reduce passes in the index and original array-------------');
const arr2 = ['a', 'b', 'c'];

arr2.reduce((accum, next, index, array) => {
    console.log(
        `accum: ${accum}, next: ${next}, index: ${index}, array: ${JSON.stringify(array)}`
    );
    return accum + next;
}, '');