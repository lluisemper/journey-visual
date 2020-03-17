export default class StepClass {
  constructor() {
    this.title = null;
    this.emotion = null;
    this.score = null;
    this.prev = null;
    this.next = null;
  }
  setTitle (title) {
    this.title = title;
  }
  setEmotion (emotion) {
    this.emotion = emotion;
  }
  setScore (score) {
    this.score = score;
  }
  setPrev (step) {
    this.prev = step;
  }
  setNext (step) {
    this.next = step;
  }
}
