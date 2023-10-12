import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toUSD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const toNumber = new Intl.NumberFormat("en-US", {
  style: "decimal",
});
