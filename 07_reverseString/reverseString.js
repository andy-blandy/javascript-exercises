const reverseString = function(input) {
    let output = "";
    charArr = input.split('');
    for (let i = charArr.length - 1; i >= 0; i--){
        output += charArr[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
