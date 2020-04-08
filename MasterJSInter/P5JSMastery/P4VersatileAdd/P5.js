function add(num1, num2) {
    if (num2 === undefined) {
        return function innerAdd(num3) {
            if (num3 === undefined) {
                return innerAdd;
            }

            return num1 + num3;
        }
    }

    return num1 + num2;
}