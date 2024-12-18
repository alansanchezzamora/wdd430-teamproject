export function formatDateToLocal(date: string | Date): string {
  try {
    // Ensure the input is a valid Date object
    const dateObj = typeof date === "string" ? new Date(date) : date;

    if (isNaN(dateObj.getTime())) {
      throw new Error("Invalid date provided.");
    }

    // Use Intl.DateTimeFormat for localized formatting
    return new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(dateObj);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid Date";
  }
}
