const mean = (arr) => {
  let s = 0;
  arr.map((e) => (s += e));
  return s / arr.length;
};

console.log(mean([1, 2, 3, 4]));

module.exports = mean;
