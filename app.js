const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.add(5, 2);
const minusResult = calculator.minus(5, 2);
const timesResult = calculator.times(5, 2);
const divideResult = calculator.divide(5, 2);
const powerResult = calculator.power(5, 2);
