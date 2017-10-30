/* PALINDROME
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward, such as madam or racecar.
Sentence-length palindromes may be written when allowances are made for adjustments to capital letters, punctuation, and word dividers,
such as "A man, a plan, a canal, Panama!", "Was it a car or a cat I saw?" or "No 'x' in Nixon".

WIKIPEDIA: https://en.wikipedia.org/wiki/Palindrome
*/

// CHECK FOR PALINDROMES
// Returns: true or false.
// Useage: isPalindrome("Was it a car or a cat I saw");// true
// Useage: isPalindrome("11012321011");// true


function isPalindrome(str) {// ES5 LONG
    var regex = /[\W_]/g;
    str = str.toLowerCase().replace(regex, '');
    var copy = str.split('').reverse().join('');
    return copy == str;
}

function isPalindrome(str) {// ES5 SHORT
    return (str = str.toLowerCase().replace(/[\W_]/g, '')) == str.split('').reverse().join('');
}

const isPalindrome = str => {// ECMA6 LONG
    const regex = /[\W_]/g;
    str = str.toLowerCase().replace(regex, '');
    const copy = str.split('').reverse().join('');
    return copy == str;
};

const isPalindrome = str => {// ECMA6 SHORT
    return (str = str.toLowerCase().replace(/[\W_]/g, '')) == str.split('').reverse().join('');
};
