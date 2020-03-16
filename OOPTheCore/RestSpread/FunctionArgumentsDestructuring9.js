function fn({name, age, ...otherDetails}) {
    console.log(name);
    console.log(age);
    console.log(otherDetails);
}

const obj = {
    name: 'Alex Jones',
    age: 30,
    profession: 'developer',
    salary: 80000,
    address: 'CA, USA'
};

fn(obj);
// -> Alex Jones
// -> 30
// -> { profession: 'developer', salary: 80000, address: 'CA, USA' }