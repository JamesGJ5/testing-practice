export default class AnalyzeArray {
  constructor(array) {
    this.array = array;
    this.length = this.getLength();
  }

  getLength() {
    return this.array.length;
  }
}
