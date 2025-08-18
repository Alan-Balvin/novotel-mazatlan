import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function twMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
