// If rules 2 and 3 both apply, rule 2 takes precedence
const obj1 = {
    value: 'hi',
    print: function () {
        console.log(this);
    },
};

const obj2 = {value: 17};

obj1.print.call(obj2); // -> { value: 17 }