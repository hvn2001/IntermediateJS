function fn({name = 'John Doe', age = 25, ...otherDetails} = {}) {
    console.log(name);
    console.log(age);
    console.log(otherDetails);
}

fn();
// -> John Doe
// -> 25
// -> {}