const arr = ['Hello', 'there!', 'How', 'are', 'you', 'doing?'];

const str = arr.reduce((accumulator, nextItem) => {
    let accumulatorWithNextItem = accumulator + nextItem + ' ';
    return accumulatorWithNextItem;
}, ''); // <- Passing in an extra parameter to reduce

console.log(str);
