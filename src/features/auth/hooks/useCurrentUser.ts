"use client";

import { useState, useEffect } from "react";


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

const ROLE_NAMES: Record<CurrentUser["role"], string> = {
  owner: "Dr. Amr Hassan",
  reception: "Sara Mohamed",
  doctor: "Dr. Layla Samir",
};

export function useCurrentUser(): CurrentUser {
 const [user, setUser] = useState<CurrentUser>(MOCK_USER);

  useEffect(() => {
    const previewRole = localStorage.getItem(
      "preview-role"
    ) as CurrentUser["role"] | null;

    if (previewRole) {
      setUser({
        ...MOCK_USER,
        role: previewRole,
        name: ROLE_NAMES[previewRole],
      });
    }
  }, []);

  return user;
}