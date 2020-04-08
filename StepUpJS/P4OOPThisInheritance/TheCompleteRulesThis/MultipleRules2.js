// If rules 1 and 3 both apply, rule 1 takes precendence
const obj1 = {
    value: 'hi',
    print: function () {
        console.log(this);
    },
};

new obj1.print(); // -> print {}