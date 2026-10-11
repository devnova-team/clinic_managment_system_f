export type UserRole =
  | "admin"
  | "owner"
  | "doctor"
  | "receptionist"
  | "patient";

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthUser {
  id?: string;
  username: string;
  role: UserRole;
}

export interface LoginResponse {
  user?: AuthUser;
  role?: UserRole;
  accessToken?: string;
}