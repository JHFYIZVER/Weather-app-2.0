import moment from 'moment-timezone';

export default function formatTime(
  timestamp: number,
  timezoneOffset?: number
): string {
  if (timezoneOffset !== undefined) {
    return moment.unix(timestamp)
      .utcOffset(timezoneOffset / 60)
      .format('HH:mm');
  }
  return moment.unix(timestamp)
    .tz('Europe/Moscow')
    .format('HH:mm');
}