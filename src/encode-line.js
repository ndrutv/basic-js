const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [];
  let res = '';

  for ( let i = 0; i < str.length; i++ ) {
    const curr = str[i];
    const next = str[i - 1];

    if ( i === 0 || curr !== next ) {
      arr.push([curr]);
    } else {
      arr[arr.length - 1].push(curr);
    }
  }

  for ( let el of arr ) {
    el.length === 1 ? res += el[0] : res += el.length + el[0];
  }

  return res;
}

module.exports = {
  encodeLine
};
