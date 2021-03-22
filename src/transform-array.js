const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('error: "arr" is not Array');
  }

  let newArr = [...arr];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      newArr.splice(i, 2);
      return newArr;
    }

    if (arr[i] === '--discard-prev') {
      newArr.splice(i - 1, 2);
      return newArr;
    }

    if (arr[i] === '--double-next') {
      newArr.splice(i, 1, arr[i + 1]);
      return newArr;
    }

    if (arr[i] === '--double-prev') {
      newArr.splice(i, 1, arr[i - 1]);
      return newArr;
    }
  }
};
