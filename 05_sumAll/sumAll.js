
function sumAll(a, b) {
    let finalSum = 0;

    if ((a >= 0) && (b >= 0) && (Number.isInteger(a) === true) && (Number.isInteger(b) === true)) {
        if (a < b) {
            for (let i = a; i <= b; i++) {
                finalSum = finalSum + i;
            }
        } else if (a > b) {
            for (let i = a; i >= b; i--) {
                finalSum = finalSum + i;
            }
        }
    return finalSum;
    } else {
        return "ERROR";
    } 
}

// Do not edit below this line
module.exports = sumAll;
