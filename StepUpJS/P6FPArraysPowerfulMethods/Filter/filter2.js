function log(item, index, arr) {
    console.log(item, index, arr);
}

const arr = ['abc', 'def', 'ghi'];
arr.filter(log); // -> 'abc', 0, ['abc', 'def', 'ghi']
                 // -> 'def', 1, ['abc', 'def', 'ghi']
                 // -> 'ghi', 2, ['abc', 'def', 'ghi']