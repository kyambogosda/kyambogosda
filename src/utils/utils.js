export function formatSermonDate(dateString) {
  const date = new Date(dateString);

  date.setDate(date.getDate() - 1);

  return date.toLocaleDateString("en-UG", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
