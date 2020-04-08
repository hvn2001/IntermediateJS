function Demo() {
    console.log(this);
    this.value = 5;
    return 10;
}

/*1*/
const demo = new Demo(); // -> Demo {}
/*2*/
console.log(demo.__proto__ === Demo.prototype); // -> true
/*3*/
console.log(demo); // -> Demo { value: 5 }

function SecondDemo() {
    this.val = '2nd demo';
}

/*4*/
console.log(new SecondDemo()); // -> SecondDemo { val: '2nd demo' }