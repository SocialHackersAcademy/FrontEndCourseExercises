/* Repl to test code https://repl.it/@pchan01/calculator#index.js

The simplest is the series 1, 1, 2, 3, 5, 8, 13, 21, etc.
                   indices 1, 2, 3, 4, 5, 6,  7,  8
*/

const makeFibonacciSequence = function(a, num) {
    let fibonacciSequence = [a, a];
  
    for (let i = 0; i < num; i++) {
      let nextItem = fibonacciSequence[i] + fibonacciSequence[i+1];
      fibonacciSequence.push(nextItem);
    }
  
    return fibonacciSequence;
}
  
const fibonacci = function(num) {
    // optional code because passing in a string works as well.
    num = Number(num);

    if (num <= 0 ) {
        return "OOPS";
    }

    let fibonacciSequenceArr = makeFibonacciSequence(1, num);
    let chosenIndex = num - 1 ;
    return fibonacciSequenceArr[chosenIndex];
}

module.exports = fibonacci
