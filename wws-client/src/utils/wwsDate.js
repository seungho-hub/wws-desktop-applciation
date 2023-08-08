class wwsDate extends Date {
  constructor(...args) {
    super(...args);
    this.year = this.getFullYear();
    this.month = this.getMonth();
    this.monthName = this.toLocaleString('en-US', { month: 'long' });
    this.day = this.getDate();
    this.daysInMonth = new Date(this.year, this.month, 0).getDate();

    this.firstDaysOfWeek = new Date(this.year, this.month, 1).getDay();
  }
}

module.exports = wwsDate;
