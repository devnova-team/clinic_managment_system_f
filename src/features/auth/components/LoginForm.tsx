"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoginCredentials } from "../types/auth.types";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginCredentials>({
    identifier: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // هنا يتم استدعاء auth.service.ts لاحقاً
      // await authService.login(formData);
      console.log("Logging in with:", formData);
      router.push("/reception"); // أو التوجيه حسب الصلاحية
    } catch (err) {
      setError("Invalid email/username or password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[400px] rounded-3xl bg-white p-8 sm:p-10 shadow-[0_20px_50px_rgba(8,40,46,0.1)] border border-slate-100">
      {/* Top Badge: STAFF LOGIN */}
      <div className="inline-flex items-center gap-2 rounded-full bg-[#E6F7F5] px-3.5 py-1.5 mb-6">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#0F766E]"
        >
          <path
            d="M17 11V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V11M7 11H5C3.89543 11 3 11.8954 3 13V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V13C21 11.8954 20.1046 11 19 11H7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11px] font-bold tracking-wider text-[#0F766E] uppercase">
          Staff Login
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-[28px] font-bold text-[#0B252C] leading-tight">
        Welcome back
      </h1>
      <p className="mt-1.5 text-[13px] text-slate-500">
        Sign in to Clinic Management System
      </p>

      {/* Error Message */}
      {error && (
        <div className="mt-4 rounded-lg bg-red-50 p-3 text-xs font-medium text-red-600 border border-red-100">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        {/* Email / Username */}
        <div className="space-y-1.5">
          <label
            htmlFor="identifier"
            className="block text-xs font-semibold text-slate-700"
          >
            Email / Username
          </label>
          <input
            id="identifier"
            name="identifier"
            type="text"
            required
            placeholder="Enter credentials"
            value={formData.identifier}
            onChange={handleChange}
            className="w-full h-[46px] rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/15 transition-all"
          />
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <label
            htmlFor="password"
            className="block text-xs font-semibold text-slate-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="w-full h-[46px] rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/15 transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-[48px] rounded-xl bg-[#0F766E] hover:bg-[#0D645D] active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60"
        >
          <span>{isLoading ? "Signing in..." : "Login"}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </form>

      {/* MFA Notice Banner */}
      <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#E8F4F2] px-3.5 py-3">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#0F766E] shrink-0"
        >
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m9 12 2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11px] font-medium text-[#0F766E]">
          Owner account → MFA verification after login
        </span>
      </div>

      {/* Footer Links */}
      <div className="mt-7 pt-5 border-t border-slate-100 flex items-center justify-between text-[11px]">
        <span className="text-slate-500">Authorized clinic staff only</span>
        <Link
          href="/public-tracking"
          className="font-bold text-[#0F766E] hover:underline flex items-center gap-1"
        >
          Track an appointment →
        </Link>
      </div>
    </div>
  );
};