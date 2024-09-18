function repeatString(stringParameter, num) {
    let repeatedString = "";
    
    for (let i = 1; i<=num; i++) {
        repeatedString = repeatedString + stringParameter;
    };

    return repeatedString;
};



// Do not edit below this line
module.exports = repeatString;
