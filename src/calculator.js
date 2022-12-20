export default class Calculator {
  static add(num1, num2) {
    return num1 + num2;
  }

  static subtract(num1, num2) {
    return this.add(num1, -num2);
  }
}
