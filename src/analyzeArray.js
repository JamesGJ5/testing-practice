export default class AnalyzeArray {
  constructor(array) {
    this.array = array;
    this.length = this.getLength();
    this.average = this.getAverage();
    this.min = this.getMin();
    this.max = this.getMax();
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

  getMin() {
    if (this.length === 0) {
      return null;
    }
    return this.array.reduce((min, cur) => (cur < min ? cur : min), Infinity);
  }

  getMax() {
    if (this.length === 0) {
      return null;
    }
    return this.array.reduce((max, cur) => (cur > max ? cur : max), -Infinity);
  }
}
