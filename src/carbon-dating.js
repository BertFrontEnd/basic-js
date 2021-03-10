const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity === 'string' &&
    +sampleActivity &&
    +sampleActivity > 0 &&
    +sampleActivity < 15
  ) {
    let k = 0.693 / HALF_LIFE_PERIOD;
    let a = MODERN_ACTIVITY / sampleActivity;
    return Math.ceil(Math.log(a) / k);
  } else {
    return false;
  }
};
