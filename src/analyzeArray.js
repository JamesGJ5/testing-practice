export default class AnalyzeArray {
  constructor(array) {
    this.array = array;
    this.length = this.getLength();
    this.average = this.getAverage();
  }

  getLength() {
    return this.array.length;
  }

  getAverage() {
    if (this.length === 0) {
      return null;
    }
    const sum = this.array.reduce((accumulator, cur) => accumulator + cur, 0);
    return sum / this.length;
  }
}
