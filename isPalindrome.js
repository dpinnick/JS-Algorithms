// CHECK FOR PALINDROMES
// Returns: true or false.
// Useage: isPalindrome("Was it a car or a cat I saw");// true
// Useage: isPalindrome("11011");// true

// ES5 long
function isPalindrome(str) {
    var regex = /[\W_]/g;
    str = str.toLowerCase().replace(regex, '');
    var copy = str.split('').reverse().join('');
    return copy == str;
}
// ES5 short
function isPalindrome(str) {
    return (str = str.toLowerCase().replace(/[\W_]/g, '')) == str.split('').reverse().join('');
}

// ES6 long
const isPalindrome = str => {
    const regex = /[\W_]/g;
    str = str.toLowerCase().replace(regex, '');
    const copy = str.split('').reverse().join('');
    return copy == str;
};
// ES6 short
const isPalindrome = str => {
    return (str = str.toLowerCase().replace(/[\W_]/g, '')) == str.split('').reverse().join('');
};
