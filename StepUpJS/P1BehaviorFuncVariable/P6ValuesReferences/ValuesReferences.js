const arrRef = ['Hi!'];
const arrRef2 = arrRef;

console.log(arrRef === arrRef2); // -> true

console.log("---------== and ===---------");

const arr1 = ['Hi!'];
const arr2 = ['Hi!'];

console.log(arr1 === arr2); // -> false
console.log(arr1 == arr2); // -> false

console.log("---------changeAgeImpure---------");

function changeAgeImpure(person) {
    person.age = 25;
    return person;
}

const alex = {
    name: 'Alex',
    age: 30
};

const changedAlex = changeAgeImpure(alex);

console.log(alex); // -> { name: 'Alex', age: 25 }
console.log(changedAlex); // -> { name: 'Alex', age: 25 }
console.log(alex === changedAlex); // -> true

console.log("---------changeAgePure---------");

function changeAgePure(person) {
    const newPersonObj = JSON.parse(JSON.stringify(person));
    newPersonObj.age = 25;
    return newPersonObj;
}

const alex2 = {
    name: 'Alex',
    age: 30
};

const alexChanged = changeAgePure(alex2);

console.log(alex2); // -> { name: 'Alex', age: 30 }
console.log(alexChanged); // -> { name: 'Alex', age: 25 }
console.log(alex2 === alexChanged); // -> false

console.log("---------Impure & Pure---------");

function changeAgeAndReference(person) {
    person.age = 25;
    person = {
        name: 'John',
        age: 50
    };

    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> 'Alex', 25
console.log(personObj2); // -> 'John', 50

console.log("---------equivalent ---------");

const personObj11 = {
    name: 'Alex',
    age: 30
};

let person = personObj11;
person.age = 25;

person = {
    name: 'John',
    age: 50
};

const personObj22 = person;

console.log(personObj11); // -> { name: 'Christa', age: 25 }
console.log(personObj22); // -> { name: 'John', age: 50 }