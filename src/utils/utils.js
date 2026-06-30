export function formatSermonDate(dateString) {
  if (!dateString) return "Date unavailable";

  const date = new Date(dateString);

  date.setDate(date.getDate() - 1);

  return date.toLocaleDateString("en-UG", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
