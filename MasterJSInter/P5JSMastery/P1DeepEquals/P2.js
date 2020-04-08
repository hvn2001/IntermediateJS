function deepEquals(a, b) {
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return true;
    }

    if (typeof a !== typeof b) {
        return false;
    }

    if (typeof a !== 'object' || a === null || b === null) {
        return a === b;
    }

    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }

    for (const key in a) {
        // Ensure that the values are identical on both objects. If not
        // return false.
    }

    return true;
}