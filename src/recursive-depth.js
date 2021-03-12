const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    for (let elem of arr) {
      if (Array.isArray(elem)) {
        return this.calculateDepth(arr.flat()) + 1;
      }
    }
    return 1;
  }
};
