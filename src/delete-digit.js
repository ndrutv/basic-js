const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [...n.toString()];
  const newArr = [];

  arr.forEach((_, i) => {
    let res = +arr.slice(0, i).concat(arr.slice(i + 1)).join('');

    newArr.push(res);
  })

  return Math.max(...newArr);
}

module.exports = {
  deleteDigit
};