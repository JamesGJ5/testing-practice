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
}