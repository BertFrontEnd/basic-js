const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity === 'string' &&
    !isNaN(sampleActivity) &&
    sampleActivity !== ' ' &&
    sampleActivity !== '' &&
    !isNaN(sampleActivity) &&
    sampleActivity !== ' \n\t\r' &&
    sampleActivity > 0
  ) {
    let number = parseInt(sampleActivity);
    /* console.log(number); */
    let t = Math.log(MODERN_ACTIVITY / number) / (0.693 / HALF_LIFE_PERIOD);
    return Math.ceil(t);
  } else {
    return false;
  }
};
