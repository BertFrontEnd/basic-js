module.exports = function countCats(matrix) {
  if (matrix === []) return 0;
  let count = 0;
  let simpleMatrix = matrix.toString().split(',');
  simpleMatrix.forEach(el => {
    if (el === '^^') {
      count++;
    }
  });
  return count;
};
