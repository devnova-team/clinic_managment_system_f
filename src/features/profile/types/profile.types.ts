export type ProfileRole = "owner" | "reception" | "doctor";
export type ProfileLanguage = "en" | "ar";

export type ProfileUser = {
  name: string;
  nationalId: string;
  email: string;
};

export type ProfileAccessKey =
  | "receptionBooking"
  | "queue"
  | "billing"
  | "dashboard"
  | "consultation"
  | "profile";
