const removeFromArray = function(arr, value) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
          arr.splice(i, 1);
        } else {
          ++i;
        }
      }
      return arr;
    }
    
    console.log(removeFromArray([1, 2, 3, 4], 3))

module.exports = removeFromArray
