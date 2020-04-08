function add(param1 = 10, param2 = param1) {
    console.log(param1 + param2);
}

add(2, 5); // -> 7
add(2); // -> 4
add(); // -> 20