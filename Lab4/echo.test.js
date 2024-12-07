const exf = require("./echo");

describe("exf function", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('prints "echo : " 5 times', () => {
    exf("echo : ", 5);

    expect(console.log).toHaveBeenCalledTimes(5);

    for (let i = 0; i < 5; i++) {
      expect(console.log).toHaveBeenNthCalledWith(i + 1, "echo : ");
    }
  });

  test('prints "JS from server : " 10 times', () => {
    exf("JS from server : ", 10);

    expect(console.log).toHaveBeenCalledTimes(10);

    for (let i = 0; i < 10; i++) {
      expect(console.log).toHaveBeenNthCalledWith(i + 1, "JS from server : ");
    }
  });
});
