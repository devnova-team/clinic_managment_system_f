export interface LoginCredentials {
  identifier: string; // Email or Username
  password: string;
}

export type UserRole = "owner" | "doctor" | "receptionist";

export interface AuthUser {
  id: string;
  name: string;
  role: UserRole;
  requiresMfa?: boolean;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
}