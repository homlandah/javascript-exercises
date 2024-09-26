function reverseString(string) {
    let reversedString = "";
    const length = string.length;
    for (i = length - 1; i >= 0; i--) {
        reversedString = reversedString + string[i];
    }
    return reversedString
}


// hello 


// Do not edit below this line
module.exports = reverseString;
