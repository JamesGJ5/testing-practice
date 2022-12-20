export default class Calculator {
  static add(num1, num2) {
    return num1 + num2;
  }

  static subtract(num1, num2) {
    return Calculator.add(num1, -num2);
  }

  static multiply(num1, num2) {
    return num1 * num2;
  }

  static divide(num1, num2) {
    if (num2 === 0) {
      throw new Error('Divisor is 0');
    }
    return Calculator.multiply(num1, 1 / num2);
  }
}
