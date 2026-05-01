const contains = function (obj, value) {
  for (const x of Object.values(obj)) {
    if (typeof x === "object" && !Array.isArray(x) && x !== null) {
      if (contains(x, value)) return true;
    } else if (x === value) {
      return true;
    } else if (Number.isNaN(value) && Number.isNaN(x)) return true;
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
