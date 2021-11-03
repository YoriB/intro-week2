const { check, runTest, skipTest } = require("../../test-api");

// declare sumDigits here...

console.log("sumDigits");

runTest("picks out a digit from a string and returns", () => {
  check(sumDigits).whenCalledWith("foo5foo").returns(5);
});
skipTest("sums multiple digits from a string", () => {
  check(sumDigits).whenCalledWith("5foo5foo").returns(10);
});
skipTest("returns a sum of several digits in a string", () => {
  check(sumDigits).whenCalledWith("hello1world5this3is2a2string").returns(13);
});
skipTest("treats consecutive digits as individual numbers", () => {
  check(sumDigits).whenCalledWith("he110world").returns(2);
});
