function fn(param = 10 * 10) {
    console.log(param);
    return param;
}

function fn2(param = fn(50)) {
    console.log(param);
}

fn('String passed in'); // -> String passed in
fn(); // -> 100

fn2(); // -> 50
       // -> 50