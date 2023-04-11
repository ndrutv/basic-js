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
    if ( !Array.isArray(arr) ) throw new Error("'arr' parameter must be an instance of the Array!");

    const res = [...arr];
    const diNext = '--discard-next';
    const diPrev = '--discard-prev';
    const doNext = '--double-next';
    const doPrev = '--double-prev';

    for ( let i = 0; i < arr.length; i++ ) {
        if ( res[i] ===  diNext ) {
            res[i + 2] === doPrev || res[i + 2] === diPrev ?
                res.splice(i, 3) : res.splice(i, 2);
        }

        if ( res[i] === diPrev ) {
            res[i - 1] ? res.splice(i - 1, 2) : res.splice(i, 1);
        }

        if ( res[i] === doNext ) {
            res[i + 1] ? res[i] = res[i + 1] : res.splice(i, 1);
        }

        if ( res[i] === doPrev ) {
            res[i - 1] ? res[i] = res[i - 1] : res.splice(i, 1);
        }
    }

    return res;
}

module.exports = {
  transform
};