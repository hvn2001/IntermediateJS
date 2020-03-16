console.log("-----------The new way----------");

function fn(param) {
    if (param === undefined) {
        param = "Default value";
    }

    console.log(param);
}

fn('String passed in'); // -> String passed in
fn(); // -> Default value

console.log("-----------The old way----------");

function fn(param = "Default value") {
    console.log(param);
}

fn('String passed in'); // -> String passed in
fn(); // -> Default value