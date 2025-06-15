
export default function formatTime(
  timestamp: number,
  timezoneOffset?: number
): string {
  const date = new Date(timestamp * 1000);
  if (timezoneOffset !== undefined) {
    const timezoneHours = timezoneOffset / 3600;
    const timezoneString = `Etc/GMT${timezoneHours >= 0 ? "-" : "+"}${Math.abs(
      timezoneHours
    )}`;
    return date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: timezoneString,
      hour12: false,
    });
  }
  return date.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Moscow",
    hour12: false,
  });
}
