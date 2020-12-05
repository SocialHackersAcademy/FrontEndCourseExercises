const reverseString = function(str) {
    var newString = " ";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString("hello there");

module.exports = reverseString
