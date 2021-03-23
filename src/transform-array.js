const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('error: "arr" is not Array');
  }

  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-prev') {
      if (i !== 0 && arr[i - 2] !== '--discard-next') {
        resultArr.pop();
      }
    } else if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--double-next') {
      if (i !== arr.length - 1) {
        resultArr.push(arr[i + 1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (i !== 0) {
        if (arr[i - 2] !== '--discard-next') {
          resultArr.push(resultArr[resultArr.length - 1]);
        }
      }
    } else {
      resultArr.push(arr[i]);
    }
  }

  return resultArr;
};
