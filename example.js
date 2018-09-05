// a simple sum function that sums together all arguments
// see `./__test__/example.test.js` for the tests
const sum = (...args) => {
  return args.reduce((total, arg) => {
    if (isNaN(+arg) || Array.isArray(arg) || arg === null) {
      throw new Error('Only numbers please!');
    }
    return total + +arg;
  }, 0);
};

module.exports = { sum };
