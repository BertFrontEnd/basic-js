const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  let outputStr = '';
  let string = str.toString();
  let repeatTimes =
    typeof options.repeatTimes !== 'undefined' ? +options.repeatTimes : 1;
  let separator =
    typeof options.separator !== 'undefined' ? options.separator : '+';
  let addition =
    typeof options.addition !== 'undefined' ? options.addition : '';
  let additionRepeatTimes =
    typeof options.additionRepeatTimes !== 'undefined'
      ? +options.additionRepeatTimes
      : 1;
  let additionSeparator =
    typeof options.additionSeparator !== 'undefined'
      ? options.additionSeparator
      : '|';
  console.log('string:', string);
  console.log('repeatTimes:', repeatTimes);
  console.log('separator:', separator);
  console.log('addition:', addition);
  console.log('additionRepeatTimes', additionRepeatTimes);
  console.log('additionSeparator:', additionSeparator);

  outputStr += (string + separator)
    .repeat(repeatTimes)
    .slice(0, -separator.length);
  console.log(string);

  return outputStr;
};
