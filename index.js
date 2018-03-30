/**
 * Uppercases the first character of the given string and lowercases the rest.
 * @param {*} str 
 * @returns The `ucFirst`ed string
 */
function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

exports.ucFirst = ucFirst;
