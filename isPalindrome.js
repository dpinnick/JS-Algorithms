// CHECK FOR PALINDROMES
// Returns: true or false.
// Useage: isPalindrome("Was it a car or a cat I saw");// true
// Useage: isPalindrome("11011");// true

// ES5 LONG
function isPalindrome(str) {
    var regex = /[\W_]/g;
    str = str.toLowerCase().replace(regex, '');
    var copy = str.split('').reverse().join('');
    return copy == str;
}
// ES5 SHORT
function isPalindrome(str) {
    return (str = str.toLowerCase().replace(/[\W_]/g, '')) == str.split('').reverse().join('');
}

// ECMA6 LONG
const isPalindrome = str => {
    const regex = /[\W_]/g;
    str = str.toLowerCase().replace(regex, '');
    const copy = str.split('').reverse().join('');
    return copy == str;
};
// ECMA6 SHORT
const isPalindrome = str => {
    return (str = str.toLowerCase().replace(/[\W_]/g, '')) == str.split('').reverse().join('');
};
