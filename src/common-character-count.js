const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = [...s1].sort();
  const arr2 = [...s2].sort();
  let num = 0;

  arr2.forEach((e, i) => {
    if ( arr1.includes(e, i) ) num++;
  })

  return num;
}

module.exports = {
  getCommonCharacterCount
};