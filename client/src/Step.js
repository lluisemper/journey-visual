module.export = class Step {
  constructor(title) {
    this.title = title;
    this.emotion;
    this.score;
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
}
