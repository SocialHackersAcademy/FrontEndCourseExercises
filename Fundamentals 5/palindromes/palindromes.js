/* Resources
Repl to test code https://repl.it/@pchan01/palindromes#index.js
Reverse a string https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
Regex https://regex101.com/
*/

const reverseString = function(str) {
    return str.split("").reverse().join("");
}
  
const palindromes = function(str) {
    let lowerCaseStr = str.toLowerCase();
    let strWithoutNonWordCharacter = lowerCaseStr.replace(/\W/g, "");  
    let reversedStr = reverseString(strWithoutNonWordCharacter);
  
    // Alternative -> if(strWithoutNonWordCharacter === reversedStr)
    if(strWithoutNonWordCharacter.match(reversedStr)) {
      return true;
    } return false;
}

module.exports = palindromes
