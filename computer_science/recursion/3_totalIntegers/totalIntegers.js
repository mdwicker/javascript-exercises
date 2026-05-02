const totalIntegers = function (container) {
  let total = 0;

  if (!isObject(container)) return undefined;

  for (const item of Object.values(container)) {
    if (Number.isInteger(item)) {
      total += 1;
    } else if (isObject(item)) {
      total += totalIntegers(item);
    }
  }

  return total;
};

function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

// Do not edit below this line
module.exports = totalIntegers;
