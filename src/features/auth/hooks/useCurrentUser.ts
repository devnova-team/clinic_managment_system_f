"use client";

export type CurrentUser = {
  id: string;
  name: string;
  role: "owner" | "reception" | "doctor";
  syndicateNo?: string;
  specialtyKey?: string;
};

// مؤقت لحد ما يتوصل الـ auth الحقيقي
const MOCK_USER: CurrentUser = {
  id: "amr",
  name: "Dr. Amr Hassan",
  role: "doctor",
  syndicateNo: "204518",
  specialtyKey: "sp_amr",
};

export function useCurrentUser(): CurrentUser {
  return MOCK_USER;
}