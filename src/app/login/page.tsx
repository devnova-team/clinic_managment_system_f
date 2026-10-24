import React from "react";
import { LoginForm } from "@/features/auth/components/LoginForm";

export const metadata = {
  title: "Login | Clinic Management System",
  description: "Staff login portal for Clinic Management System",
};

const featurePills = [
  "Smart queue",
  "Atomic stock deduction",
  "Locked invoices",
];

export default function LoginPage() {
  return (
    <main className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-[#F4F8F8]">
      {/* ==================== Left Side: Dark Hero Section ==================== */}
      <section className="relative flex flex-col justify-between bg-[#0A282F] p-8 sm:p-14 lg:p-16 text-white overflow-hidden">
        {/* Top Logo */}
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2ED1C6] text-[#0A282F]">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
          <div>
            <div className="text-[15px] font-bold tracking-wide text-white leading-none">
              CLINIC
            </div>
            <div className="mt-1 text-[9px] font-normal tracking-[0.16em] text-[#7FA4A9] uppercase">
              Management System
            </div>
          </div>
        </div>

        {/* Center Hero Copy */}
        <div className="my-12 max-w-lg">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#2ED1C6] uppercase">
            For Clinic Staff
          </span>
          <h2 className="mt-4 text-4xl sm:text-[44px] font-extrabold tracking-tight text-white leading-[1.15]">
            Every patient, from check-in to checkout.
          </h2>
          <p className="mt-4 text-[15px] text-[#94B3B8] leading-relaxed">
            One calm workspace for reception, doctors, billing and owners.
          </p>
        </div>

        {/* Bottom ECG Graphic & Feature Pills */}
        <div className="space-y-8">
          {/* ECG Pulse Wave SVG with Subtle Grid */}
          <div className="w-full overflow-hidden">
            <svg
              viewBox="0 0 600 130"
              fill="none"
              className="w-full h-auto max-w-[600px]"
            >
              {/* Horizontal Grid Lines */}
              <line x1="0" y1="15" x2="600" y2="15" stroke="#133E46" strokeWidth="1" />
              <line x1="0" y1="50" x2="600" y2="50" stroke="#133E46" strokeWidth="1" />
              <line x1="0" y1="85" x2="600" y2="85" stroke="#133E46" strokeWidth="1" />
              <line x1="0" y1="120" x2="600" y2="120" stroke="#133E46" strokeWidth="1" />

              {/* Vertical Grid Lines */}
              {[75, 150, 225, 300, 375, 450, 525].map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1="15"
                  x2={x}
                  y2="120"
                  stroke="#133E46"
                  strokeWidth="1"
                />
              ))}

              {/* ECG Line */}
              <path
                d="M0 85 H140 L155 53 L170 120 L198 10 L220 115 L232 75 L245 85 H315 L330 65 L345 105 L355 85 H600"
                stroke="#2ED1C6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Orange Peak Point */}
              <circle
                cx="198"
                cy="10"
                r="6"
                fill="#F46345"
                stroke="#0A282F"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            {featurePills.map((pill) => (
              <div
                key={pill}
                className="inline-flex items-center gap-2 rounded-full bg-[#0E3842] px-4 py-2 text-xs font-medium text-white border border-white/5"
              >
                <span className="h-2 w-2 rounded-full bg-[#2ED1C6]" />
                <span>{pill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== Right Side: Login Card Area ==================== */}
      <section className="flex items-center justify-center p-6 sm:p-12">
        <LoginForm />
      </section>
    </main>
  );
}