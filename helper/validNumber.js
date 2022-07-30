// Funtion to velidated if a string matches with a Heaxdecimal number pattern
const isHexadecimal = function isHexadecimal(hexNumber) {
    return /^[0-9A-F]+$/gi.test(hexNumber);
};

// Funtion to velidated if a string matches with a decimal number pattern
const isDecimal = function isDecimal(decNumber) {
    return /^[0-9]+$/gi.test(decNumber);
};

module.exports = {
    isHexadecimal,
    isDecimal
}