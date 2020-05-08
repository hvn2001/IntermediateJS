const arr = ['Hello', 'there!', 'How', 'are', 'you', 'doing?'];

console.log('--------space between Hello and there-------------');
const str4 = arr.reduce((accumulator, nextItem, index) => {
    console.log('accumulator:', accumulator);
    console.log('nextItem:', nextItem);
    console.log('index:', index);
    console.log('\n');

    const accumulatorWithNextItem = accumulator + nextItem + ' ';
    return accumulatorWithNextItem;
}); // <- No empty string being passed in

console.log('Final string:', str4); //  There’s no space between Hello and there
