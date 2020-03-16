const arr = ['Hello', 'there!', 'How', 'are', 'you', 'doing?'];
let str = '';

for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    str += word + ' ';
}

console.log(`Final string: "${str}"`);

///////////////////////////////////////////
let str2 = '';

arr.forEach(word => {
    str2 += word + ' ';
});

console.log(`Final string: "${str2}"`);


let str3 = '';

arr.map(word => {
    str3 += word + ' ';
});

console.log(`Final string: "${str3}"`);