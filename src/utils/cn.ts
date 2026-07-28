type ClassValue = string | number | boolean | undefined | null;

/**
 * Utility function to merge class names
 * Simplified version without external dependencies
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs
    .filter((x) => typeof x === "string" && x.length > 0)
    .join(" ")
    .trim();
}
