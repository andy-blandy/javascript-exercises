const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const preppedWord = word
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    const revWord = preppedWord
        .split('').reverse().join('');

    return revWord == preppedWord;
};

// Do not edit below this line
module.exports = palindromes;
