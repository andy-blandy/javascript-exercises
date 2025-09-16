const fibonacci = function(count) {

    if (count == 0){
        return 0;
    }
    if (count < 0){
        return "OOPS";
    }

    let prevNum = 1;
    let prevPrevNum = 0;

    for (let i = 2; i <= count; i++) {
        let current = prevNum + prevPrevNum;

        prevPrevNum = prevNum;
        prevNum = current;
    }

    return prevNum;
};

// Do not edit below this line
module.exports = fibonacci;
