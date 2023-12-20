const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let countCol = matrix[0].length;
  let transMatrix = [];
  let sum = 0;
  for (let i = 0; i < countCol; i++) {
  	transMatrix[i] = []
  	for (let j = 0; j < matrix.length; j++) {
    	transMatrix[i][j] = matrix[j][i];
    }
  }
  console.log(transMatrix)
  for (let i = 0; i < transMatrix.length; i++) {
  	if (transMatrix[i].includes(0)) {
    	transMatrix[i].splice(transMatrix[i].indexOf(0))
    }
  }
  console.log(transMatrix);
  for (let i = 0; i < transMatrix.length; i++) {
  	
  	for (let j = 0; j < transMatrix[i].length; j++) {
    	sum += transMatrix[i][j]
    }
  }
  return sum
}

module.exports = {
  getMatrixElementsSum
};
