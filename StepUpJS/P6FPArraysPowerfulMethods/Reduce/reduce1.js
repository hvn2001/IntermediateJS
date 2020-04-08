const arr = ['Hello', 'there!', 'How', 'are', 'you', 'doing?'];

const str = arr.reduce((accumulator, nextItem) => {
    let accumulatorWithNextItem = accumulator + nextItem + ' ';
    return accumulatorWithNextItem;
}, ''); // <- Passing in an extra parameter to reduce

console.log(str);

///////////////////////////////////////////////////////////
function addNextItemToAccumulator2(accumulator, nextItem) {
    return accumulator + nextItem + ' ';
}

const str2 = arr.reduce(addNextItemToAccumulator2, ''); // <-
console.log(str2);
////////////////////////////////////////////////////////////
console.log('--------debug more-------------')
const str3 = arr.reduce((accumulator, nextItem) => {
    console.log('accumulator:', accumulator);
    console.log('nextItem:', nextItem);
    console.log('\n');

    const accumulatorWithNextItem = accumulator + nextItem + ' ';
    return accumulatorWithNextItem;
}, '');

console.log('Final string:', str3);
/////////////////////////////////////////////////////////////////
console.log('--------space between Hello and there-------------');
const str4 = arr.reduce((accumulator, nextItem) => {
    console.log('accumulator:', accumulator);
    console.log('nextItem:', nextItem);
    console.log('\n');

    const accumulatorWithNextItem = accumulator + nextItem + ' ';
    return accumulatorWithNextItem;
}); // <- No empty string being passed in

console.log('Final string:', str4); //  There’s no space between Hello and there

////////////////////////////////////////////////////////////////////
console.log('--------Like the other, reduce passes in the index and original array-------------');
const arr2 = ['a', 'b', 'c'];

arr2.reduce((accum, next, index, array) => {
    console.log(
        `accum: ${accum}, next: ${next}, index: ${index}, array: ${JSON.stringify(array)}`
    );
    return accum + next;
}, '');