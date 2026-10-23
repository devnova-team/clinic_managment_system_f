export interface LoginCredentials {
  identifier: string; // Email or Username
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    role: 'owner' | 'doctor' | 'receptionist';
    requiresMfa?: boolean;
  };
  token: string;
}