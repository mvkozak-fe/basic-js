const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  for (let i = 0; i < domains.length; i++) {
    domains[i] = domains[i].split('.');   
  }
  let str = '';
  let arr = [];
  let res = [];
  for (let i = domains.length - 1; i >= 0; i--) {   	
  	for (let j = domains[i].length - 1; j >= 0; j--) {   
      if (j == domains[i].length - 1) {
        str = ''
      }   
      str += '.' + domains[i][j];
      arr.push(str);   
    }     
  }	arr = Array.from(new Set(arr));
  
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
  	arr2.push(arr[i].slice(1));
  }  
  let reverseArr = domains;
  for (let i = 0; i < reverseArr.length; i++) {
  	reverseArr[i] = reverseArr[i].reverse().join('.')
  }  
  let count = 0;
	for (let i = 0; i < arr2.length;i++) {
  	count = 0;
  	for (let j=0; j< reverseArr.length; j++) {
    	if (reverseArr[j].startsWith(arr2[i])) {
      	count++;
      }
    } res.push(count);
  }
	const obj = Object.fromEntries(arr.map((key, index) => [key, res[index]]),); 
  return obj;
}

module.exports = {
  getDNSStats
};
