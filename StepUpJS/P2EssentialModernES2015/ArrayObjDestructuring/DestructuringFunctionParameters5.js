function fn(obj) {
    // We want to strip off properties to use individually.
    var firstName = obj.firstName;
    var lastName = obj.lastName;
    var age = obj.age;
    var occupation = obj.occupation;
}

var firstName = 'Sophia';
var lastName = 'Lundgren';
var age = 25;
var occupation = 'Software Engineer';

fn({
    firstName: firstName,
    lastName: lastName,
    age: age,
    occupation: occupation
});

// destructuring in combination with object shorthand

function fn({firstName, lastName, age, occupation}) {
    // We already have all the variables we need!
}

const firstName = 'Sophia';
const lastName = 'Lundgren';
const age = 25;
const occupation = 'Software Engineer';
//  we could pass the variables in any order
fn({firstName, lastName, age, occupation});