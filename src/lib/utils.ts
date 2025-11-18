import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://avatar.iran.liara.run/public";
  if (gender === "FEMALE") return `${base}/girl?username=${username}`;
  // default to boy
  return `${base}/boy?username=${username}`;
}

// phone formatting function for US numbers - ai generated 🎉
export const formatIndianPhoneNumber = (value: string) => {
  if (!value) return value;

  // Remove anything not a digit
  const digits = value.replace(/[^\d]/g, "");
  const len = digits.length;

  let countryCode = "";
  let number = digits;

  // Handle +91 or 91 prefix
  if (digits.startsWith("91") && len > 10) {
    countryCode = "+91-";
    number = digits.slice(2);
  } else if (digits.startsWith("0") && len > 10) {
    number = digits.slice(1);
  }

  // 1st chunk: 5 digits
  const firstChunk = number.slice(0, 5);
  // 2nd chunk: next 5 digits
  const secondChunk = number.slice(5, 10);

  if (len <= 5) return countryCode + firstChunk;
  if (len <= 10) return `${countryCode}${firstChunk}-${secondChunk}`;

  // Prevent extra typing overflow
  return `${countryCode}${firstChunk}-${secondChunk}`;
};


//  ai generated 🎉
export const getNext5Days = () => {
  const dates = [];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  for (let i = 0; i < 5; i++) {
    const date = new Date(tomorrow);
    date.setDate(date.getDate() + i);
    dates.push(date.toISOString().split("T")[0]);
  }

  return dates;
};

export const getAvailableTimeSlots = () => {
  return [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];
};

export const APPOINTMENT_TYPES = [
  { id: "checkup", name: "Regular Checkup", duration: "60 min", price: "$120" },
  { id: "cleaning", name: "Teeth Cleaning", duration: "45 min", price: "$90" },
  { id: "consultation", name: "Consultation", duration: "30 min", price: "$75" },
  { id: "emergency", name: "Emergency Visit", duration: "30 min", price: "$150" },
];
