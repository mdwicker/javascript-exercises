const pascal = function (n) {
  if (n === 1) {
    return [1];
  }

  const line = [0, ...pascal(n - 1)];
  for (let i = 0; i < line.length - 1; i++) {
    line[i] += line[i + 1];
  }
  return line;
};

// Do not edit below this line
module.exports = pascal;
