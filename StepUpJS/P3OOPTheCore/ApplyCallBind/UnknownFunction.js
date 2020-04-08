function add() {
    console.log(arguments);
}

add(4); // -> { '0': 4 }
add(4, 5); // -> { '0': 4, '1': 5 }
add(4, 5, 6); // -> { '0': 4, '1': 5, '2': 6 }
