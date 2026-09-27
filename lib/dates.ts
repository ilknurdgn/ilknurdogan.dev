const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2025-06" → "Jun 2025", "2022" → "2022", "" → "Present". */
export function formatDate(date: string): string {
  if (!date) return "Present";
  const [year, month] = date.split("-").map(Number);
  return month ? `${MONTHS[month - 1]} ${year}` : String(year);
}

export function formatRange(start: string, end: string): string {
  return `${formatDate(start)} – ${formatDate(end)}`;
}
