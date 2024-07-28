const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;

class TimeSpan {
  constructor(seconds) {
    this.seconds = seconds;
    this.minutes = Math.floor(seconds / MINUTE);
    this.hours = Math.floor(seconds / HOUR);
    this.days = Math.floor(seconds / DAY);
    this.months = Math.floor(seconds / MONTH);
  }
}

const relativeDateText = (date) => {
  if (!date) return false;

  const _date = new Date(date);
  const now = new Date();

  const seconds = Math.floor((now - _date) / 1000);
  const span = new TimeSpan(seconds);

  // Less than one minute
  if (seconds < 1 * MINUTE) {
    return span.seconds <= 1 ? 'one second ago' : `${span.seconds} seconds ago`;
  }

  if (seconds < 60 * MINUTE) {
    return `${span.minutes} min ago`;
  }

  if (seconds < 120 * MINUTE) {
    return 'an hour ago';
  }

  if (seconds < 24 * HOUR) {
    return `${span.hours} hours ago`;
  }

  if (seconds < 48 * HOUR) {
    return 'yesterday';
  }

  if (seconds < 30 * DAY) {
    return `${span.days} days ago`;
  }

  if (seconds < 12 * MONTH) {
    const months = Math.floor(span.days / 30);
    return months <= 1 ? 'one month ago' : `${months} months ago`;
  }

  const years = Math.floor(span.days / 365);
  return years <= 1 ? 'one year ago' : `${years} years ago`;
};

export default relativeDateText;
