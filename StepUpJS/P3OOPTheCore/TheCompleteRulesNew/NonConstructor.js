function personFn(name, age) {
    const personObj = {};

    personObj.name = name;
    personObj.age = age;

    return personObj;
}


const alex1 = personFn('Alex', 30);
console.log(alex1); // -> { name: 'Alex', age: 30 }

// Calling a non-constructor with ‘new’
// if we’re using new, we should use this in our function and we shouldn’t create a new object ourselves
const alex = new personFn('Alex', 30);
console.log(alex); // -> { name: 'Alex', age: 30 }