import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/** Combined classes utility */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
