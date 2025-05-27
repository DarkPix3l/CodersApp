import { clsx } from "clsx"

/**
 * Utility function to combine class names.
 * Wraps clsx for easier use.
 */
export function cn(...inputs) {
  return clsx(...inputs)
}
