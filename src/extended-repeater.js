const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  let outputStr = '';
  let string = String(str);
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

  return (outputStr = (
    string +
    (addition + additionSeparator)
      .repeat(additionRepeatTimes)
      .slice(0, -additionSeparator.length) +
    separator
  )
    .repeat(repeatTimes)
    .slice(0, -separator.length));
};
