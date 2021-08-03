export class Date {
  constructor() {
    this.time = Date.getTime;
  }
  static getTime() {
    let month = new Date().getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let hours = new Date().getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }

    let minutes = new Date().getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  }
}
