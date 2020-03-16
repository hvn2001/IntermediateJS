const name = 'Christina';
const age = 23;
// Adding a method to an object is a little easier as well.
// We can drop the colon and the word function. The following two objects are equivalent.
const obj1 = {
    name,
    age,
    growOlder: function () {
        this.age++;
    }
}

const obj2 = {
    name,
    age,
    growOlder() {
        this.age++;
    }
}