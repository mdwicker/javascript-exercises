const permutations = function (arr) {
  if (arr.length <= 1) {
    return [arr];
  }

  const perms = [];
  const curr = arr[0];

  for (const perm of permutations(arr.slice(1))) {
    // for each permutation, add the current number in each possible slot
    for (let i = 0; i < arr.length; i++) {
      perms.push([...perm.slice(0, i), curr, ...perm.slice(i)]);
    }
  }
  return perms;
};

// Do not edit below this line
module.exports = permutations;
