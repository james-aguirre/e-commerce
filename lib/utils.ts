import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { Stripe, loadStripe } from "@stripe/stripe-js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toUSD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

let stripePromise: Promise<Stripe | null>;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};
