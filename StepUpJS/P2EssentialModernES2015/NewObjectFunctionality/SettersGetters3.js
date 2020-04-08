const firstName = 'Brooke';
const lastName = 'Smith';

const person = {
    firstName,
    lastName,
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },

    set fullName(name) {
        const spaceIndex = name.indexOf(' ');
        this.firstName = name.slice(0, spaceIndex);
        this.lastName = name.slice(spaceIndex + 1);
    }
}

// the method is called without the (), as if it were a standard static property.
console.log(person.fullName); // -> Brooke Smith


person.fullName = 'Alex Johnson';
console.log(person.firstName); // -> Alex
console.log(person.lastName); // -> Johnson
console.log(person.fullName); // -> Alex Johnson