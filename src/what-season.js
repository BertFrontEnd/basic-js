const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  } else if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw Error;
  }

  let season = '';
  let dataFromArg = date.getMonth();

  switch (true) {
    case dataFromArg === 0 || dataFromArg == 1 || dataFromArg === 11:
      season = 'winter';
      break;
    case dataFromArg === 2 || dataFromArg == 3 || dataFromArg === 4:
      season = 'spring';
      break;
    case dataFromArg === 5 || dataFromArg == 6 || dataFromArg === 7:
      season = 'summer';
      break;
    case dataFromArg === 8 || dataFromArg == 9 || dataFromArg === 10:
      season = 'autumn';
      break;
  }
  return season;
};
