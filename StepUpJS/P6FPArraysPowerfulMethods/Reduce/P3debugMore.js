const arr = ['Hello', 'there!', 'How', 'are', 'you', 'doing?'];

const str3 = arr.reduce((accumulator, nextItem, index) => {
    console.log('accumulator:', accumulator);
    console.log('nextItem:', nextItem);
    console.log('index:', index);
    console.log('\n');

    const accumulatorWithNextItem = accumulator + nextItem + ' ';
    return accumulatorWithNextItem;
}, '');

console.log('Final string:', str3);