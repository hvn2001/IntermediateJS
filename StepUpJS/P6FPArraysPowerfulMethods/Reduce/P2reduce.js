const arr = ['Hello', 'there!', 'How', 'are', 'you', 'doing?'];

function addNextItemToAccumulator2(accumulator, nextItem) {
    return accumulator + nextItem + ' ';
}

const str2 = arr.reduce(addNextItemToAccumulator2, ''); // <-
console.log(str2);
