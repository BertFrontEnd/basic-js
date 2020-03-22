module.exports = function createDreamTeam(members) {
  let str = '';
  let arr = [];

  if (!Array.isArray(members)) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] != 'string') {
      continue;
    }
    arr.push(members[i].trim());
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toUpperCase();
  }

  arr = arr.sort();

  for (let i = 0; i < arr.length; i++) {
    str += arr[i][0].toUpperCase();
  }
  return str;
};
