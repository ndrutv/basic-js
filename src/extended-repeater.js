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
function repeater(/* str, options */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

module.exports = {
  repeater
};

/*
Дана задача на написание функции repeater(str, options), которая будет возвращать повторяющуюся строку на основе заданных параметров.

Входные параметры:
str - строка, которую нужно повторить;
options - объект с настройками, который может содержать следующие свойства:
- repeatTimes - число повторений str;
- separator - строка, разделяющая повторения str;
- addition - строка, которую нужно добавить к каждому повторению str;
- additionRepeatTimes - число повторений addition;
- additionSeparator - строка, разделяющая повторения addition.
По умолчанию str и addition являются строками. В случае, если тип данных этих параметров отличается, они должны быть преобразованы в строку.

separator и additionSeparator также являются строками.

repeatTimes и additionRepeatTimes - это целые числа (в отсутствие любого из них, соответствующая строка не повторяется).

По умолчанию separator равен '+'. По умолчанию additionSeparator равен '|

Например: repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }) => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
*/