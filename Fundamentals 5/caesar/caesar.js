/* My resources
1. ASCII table https://asecuritysite.com/coding/asc2
2. charCodeAt https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
3. Repl to test the code https://repl.it/@pchan01/caesar#index.js
4. From Kostas - Modulo operator in C https://www.youtube.com/watch?v=gNEZHW5-Wso
5. From Kostas - Coding train https://www.youtube.com/watch?v=r5Iy3v1co0A
6. Javascript methods - string.charCodeAt & String.fromCharCode https://www.youtube.com/watch?v=ccX4ZyQfPK8
7. Regex tester https://regex101.com/
8. Alternative solution https://gist.github.com/EvanHahn/2587465 -> see bottom of page

Notes:
Use either:
a) charCodeAt and fromCharCode or 
b) codePointAt and fromCodePoint to include emojis' ASCII Number
*/

/* My version
  character = A B C a b c
  asciiNum = 65 66 67 97 98 99
  newAsciiNum = 66 67 68 98 99 100 (if shiftCount = 1)
*/

function caesar(str, shiftCount) {
  const AAsciiNum = 65;
  const ZAsciiNum = 90;
  const aAsciiNum = 97;
  const zAsciiNum = 122;
  let newAsciiNum;
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    let asciiNum = str.charCodeAt(i);

    if(character.match(/[A-Z]/)){
      newAsciiNum = asciiNum + shiftCount;

      // When uppercase letter shiftCount takes it outside its A-Z ASCII number, run this code.
      if(newAsciiNum < AAsciiNum) {
        newAsciiNum = (ZAsciiNum + 1) - (AAsciiNum - newAsciiNum);
      }
      if(newAsciiNum > ZAsciiNum) {
        newAsciiNum = (AAsciiNum - 1) + (newAsciiNum - ZAsciiNum);
      }

      let newCharacter = String.fromCharCode(newAsciiNum);
      newStr += newCharacter;
    }
    
    else if(character.match(/[a-z]/)) {
      newAsciiNum = asciiNum + shiftCount;

      // When lowercase letter shiftCount takes it outside its a-z ASCII number, run this code.
      if(newAsciiNum < aAsciiNum) {
        newAsciiNum = (zAsciiNum + 1) - (aAsciiNum - newAsciiNum);
      }
      if(newAsciiNum > zAsciiNum) {
        newAsciiNum = (aAsciiNum - 1) + (newAsciiNum - zAsciiNum);
      }

      let newCharacter = String.fromCharCode(newAsciiNum);
      newStr += newCharacter;
    }
    
    // For non-alphabetical characters, run this code.
    else {
      let newCharacter = String.fromCharCode(asciiNum);
      newStr += newCharacter;
    }

  }
  return newStr;
}

const str1 = "ABC , abc!"
const str2 = "Good morning, everyone :-)"
const str3 = "What's your name?"
const str4 = "I'm Patrick"

console.log(str1, ">> 20 shiftCount >>", caesar(str1, 20));
console.log("");
console.log(str2, ">> 2 shiftCount >>", caesar(str2, 2));
console.log("");
console.log(str3, ">> -1 shiftCount >>", caesar(str3, -1));
console.log("");
console.log(str4, ">> 1 shiftCount >>", caesar(str4, 1));

module.exports = caesar

/*
From https://gist.github.com/EvanHahn/2587465

const caesar = function(string, shiftCount) {

    if (shiftCount < 0) {
        return caesar(string, shiftCount + 26);
    }

    let output = "";

    for (let i = 0; i < string.length; i++) {

        let character = string[i];

        // If character is a letter
        if (character.match(/[a-z]/i)) {

            let asciiNum = string.charCodeAt(i);

            // If uppercase letters
            if (asciiNum >= 65 && asciiNum <= 90) {
                character = String.fromCharCode(((asciiNum - 65 + shiftCount) % 26) + 65);
            }
            if (asciiNum >= 65 && asciiNum <=90) {
                
            }

            // If lowercase letters
            if (asciiNum >= 97 && asciiNum <= 122) {
                character = String.fromCharCode(((asciiNum - 97 + shiftCount) % 26) + 97);
            }
        }

        // Append characters
        output += character;
    }
 
    return output;
}
*/
