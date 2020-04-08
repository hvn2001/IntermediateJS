function capitalize1(words) {
    return words.map(w => w[0].toUpperCase() + w.slice(1))
}

function capitalize2(words) {
    return words.map(w => w[0].toUpperCase() + w.substr(1));
}

let words = ['Hello', 'there!', 'How', 'are', 'you', 'doing?'];
console.log(words);
let cap1 = capitalize1(words);
console.log(cap1);

let cap2 = capitalize2(words);
console.log(cap2);

////////////////////////////////

function evenOdd(numbers) {
    return numbers.map(n => n % 2 === 0 ? 'even' : 'odd');
}

console.log(evenOdd([1, 2, 3]));

////////////////////////////////
function isEven(integers) {
    return integers.filter(i => i % 2 === 0);
}

////////////////////////////////
family = [
    {
        familyMember: 'Uncle',
        age: 52,
        location: 'San Diego, CA'
    }, {
        familyMember: 'Grandpa',
        age: 84,
        location: 'San Francisco, CA'
    }, {
        familyMember: 'Sister',
        age: 19,
        location: 'New York, NY'
    }
]

function getOlderFamily(family) {
    return family.filter(f => f.age > 40)
        .map(f => f.familyMember);
}

console.log(getOlderFamily(family));