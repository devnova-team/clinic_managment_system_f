
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import { login } from "../services/auth.service";
import type { LoginCredentials, UserRole } from "../types/auth.types";
import { CheckCircle2, Eye, EyeOff } from "@/assets/icons/icons";

const roleRoutes: Record<UserRole, string> = {
  admin: "/admin",
  owner: "/dashboard",
  doctor: "/queue",
  receptionist: "/reception",
  patient: "/patient",
};

export function LoginForm() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
    setError("");
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoginSuccess(false);

    const credentials: LoginCredentials = {
      username: username.trim(),
      password,
    };

    if (!credentials.username || !credentials.password) {
      setError("Please enter your username and password.");
      return;
    }

    setIsLoading(true);

    try {
      const result = await login(credentials);
      const role = result.user?.role ?? result.role;

      if (!role) {
        setError("Unable to identify your account role. Please contact support.");
        return;
      }

      setLoginSuccess(true);
      router.replace(roleRoutes[role]);
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Invalid username or password."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full flex min-h-screen items-center justify-center bg-[#052E2B] px-4 py-10">
    <section className="w-full max-w-md rounded-2xl border border-clinic-border bg-clinic-surface p-8 shadow-clinic-md">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-clinic-ink">
          Welcome back
        </h1>
        <p className="mt-2 text-sm text-clinic-muted">
          One workspace for your clinic team to coordinate.
        </p>
      </div>

      {loginSuccess && (
        <div className="mb-5 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
          <CheckCircle2 size={18} className="shrink-0" />
          <span>Login successful! Redirecting to your dashboard...</span>
        </div>
      )}

      {error && (
        <div
          role="alert"
          aria-live="polite"
          className="mb-5 rounded-lg border border-clinic-danger/30 bg-clinic-danger-soft p-3 text-sm text-clinic-danger"
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label
            htmlFor="username"
            className="mb-1.5 block text-sm font-medium text-clinic-ink"
          >
            Username <span className="text-clinic-danger">*</span>
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
            className="w-full rounded-lg border border-clinic-border bg-white px-3.5 py-2.5 text-sm text-clinic-ink placeholder:text-slate-400 focus:border-clinic-primary focus:outline-none focus:ring-2 focus:ring-clinic-primary/20"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm font-medium text-clinic-ink"
          >
            Password <span className="text-clinic-danger">*</span>
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-clinic-border bg-white px-3.5 py-2.5 pr-10 text-sm text-clinic-ink placeholder:text-slate-400 focus:border-clinic-primary focus:outline-none focus:ring-2 focus:ring-clinic-primary/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition hover:text-slate-600"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-clinic-primary px-4 py-3 font-semibold text-slate-950 transition hover:bg-clinic-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinic-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>
       {/* Card Footer */}
        <div className="mt-8 pt-5 border-t border-[#e2e8f0]/80 dark:border-slate-800 text-center">
          <p className="text-xs text-[#64748b] dark:text-slate-400 font-normal">
            Need access? Contact your clinic administrator.
          </p>
        </div>
    </section>
    </div>
  );
}