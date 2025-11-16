import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://avatar.iran.liara.run/public";
  if (gender === "FEMALE") return `${base}/girl?username=${username}`;
  // default to boy
  return `${base}/boy?username=${username}`;
}


export const formatPhoneNumber = (value: string): string => {
  if (!value) return "";

  // Keep only digits
  let phone = value.replace(/\D/g, "");

  // Allow typing until 10 digits — no forced formatting
  if (phone.length <= 10) return phone;

  // Normalize if user entered +91 or 91
  if (phone.startsWith("91") && phone.length === 12) {
    phone = phone.slice(2);
  }

  // At this point we have 10 digits — apply formatting
  if (phone.length === 10) {
    return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
  }

  return phone; // fallback
};
