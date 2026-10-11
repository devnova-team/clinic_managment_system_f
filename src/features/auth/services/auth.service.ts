
import type {
  LoginCredentials,
  LoginResponse,
} from "../types/auth.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function login(
  credentials: LoginCredentials
): Promise<LoginResponse> {
  if (!API_BASE_URL) {
    throw new Error("API URL is not configured.");
  }

  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
  } catch {
    throw new Error("Unable to connect to the server.");
  }

  if (response.status === 401 || response.status === 403) {
    throw new Error("Invalid username or password.");
  }

  if (!response.ok) {
    throw new Error("Login failed. Please try again.");
  }

  return (await response.json()) as LoginResponse;
}