const exf = (a, n) => {
  for (let index = 0; index < n; index++) {
    console.log(a);
  }
};

exf("echo : ", 5);
exf("JS from server : ", 10);

module.exports = exf;
