const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  if ( addition ) {
    str = str + addition + `${additionSeparator}${addition}`.repeat(additionRepeatTimes - 1);

    return str += `${separator}${str}`.repeat(repeatTimes - 1);
  }

  return str += `${separator}${str}`.repeat(repeatTimes - 1);
}

console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }));
// 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'

module.exports = {
  repeater
};