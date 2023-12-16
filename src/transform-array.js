const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length == 0) {
    return [];
  }
  newArr = arr.slice();
  for (let i = 0; i < newArr.length; i++) {
    if (newArr.includes('--discard-next') && newArr.includes('--double-prev')) {
      newArr.splice(newArr.indexOf('--discard-next'), 3);
    } if (newArr.includes('--double-next') && newArr.includes('--double-prev')) {
      newArr.splice(newArr.indexOf('--double-next'), 3, newArr[newArr.indexOf('--double-next') + 1], newArr[newArr.indexOf('--double-next') + 1], newArr[newArr.indexOf('--double-next') + 1]);
    } if (newArr.includes('--discard-next') && newArr.includes('--discard-prev')) {
      newArr.splice(newArr.indexOf('--discard-next'), 3);
    } if (newArr.includes('--double-next') && newArr.includes('--discard-prev')) {
      newArr.splice(newArr.indexOf('--double-next'), 1)
      newArr.splice(newArr.indexOf('--discard-prev'), 1);
    } 

    if (newArr.includes('--double-next')) {
      if (newArr[newArr.length - 1] == '--double-next') {
        newArr.splice(newArr.length - 1, 1)
      } else {
        newArr.splice(newArr.indexOf('--double-next'), 1, newArr[newArr.indexOf('--double-next') + 1]);
      }      
    } if (newArr.includes('--double-prev')) {
        if (newArr[0] == '--double-prev') {
          newArr.splice(0, 1);
        } else {
          newArr.splice(newArr.indexOf('--double-prev'), 1, newArr[newArr.indexOf('--double-prev') - 1]);
        }
    } if (newArr.includes('--discard-next')) {
        if (newArr[0] == '--discard-next') {
          newArr.splice(newArr.length - 1, 1)
        } else {
          newArr.splice(newArr.indexOf('--discard-next'), 2)
        }       
    } if (newArr.includes('--discard-prev')) {
        if (newArr[0] == '--discard-prev') {
          newArr.splice(0, 1)
        } else {
          newArr.splice(newArr.indexOf('--discard-prev') - 1, 2)
        }        
    } 


  } return newArr;
  
}

module.exports = {
  transform
};
