"use client";

import { useState, type FormEvent } from "react";
import {
  FiArrowRight,
  FiEye,
  FiEyeOff,
  FiPlus,
  FiUserPlus,
} from "react-icons/fi";
import { FaStethoscope } from "react-icons/fa";
import {
  signupSpecialties,
  signupTranslations,
  type SignupLanguage,
} from "@/locales/signup";

type StaffRole = "reception" | "doctor";

type ApiResponse = { message?: string };

const fieldLabelClass =
  "block text-xs font-bold uppercase tracking-[0.1em] text-muted";

const inputClass =
  "min-h-12 w-full rounded-md border border-line bg-surface px-4 py-3 text-sm text-ink shadow-sm outline-none transition placeholder:text-muted/60 focus:border-brand focus:ring-2 focus:ring-mint/25";

const roleCardClass =
  "flex min-h-[136px] flex-col items-start rounded-lg border border-line bg-surface p-4 text-start shadow-sm transition hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint";

export function StaffSignupForm() {
  const [language, setLanguage] = useState<SignupLanguage>("en");
  const [role, setRole] = useState<StaffRole>("doctor");
  const [fullName, setFullName] = useState("");
  const [specialty, setSpecialty] = useState("Internal Medicine");
  const [syndicateCardNumber, setSyndicateCardNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const t = signupTranslations[language];
  const isArabic = language === "ar";

  function changeRole(nextRole: StaffRole) {
    setRole(nextRole);
    setErrorMessage("");
    setSuccessMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (role === "doctor" && !syndicateCardNumber.trim()) {
      setErrorMessage(t.requiredDoctorDetails);
      return;
    }

    if (password.length < 8) {
      setErrorMessage(t.passwordLength);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage(t.passwordMismatch);
      return;
    }

    setIsSubmitting(true);

    try {
      const apiBaseUrl = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(
        /\/+$/,
        ""
      );
      const endpoint =
        process.env.NEXT_PUBLIC_STAFF_REGISTRATION_ENDPOINT ??
        `${apiBaseUrl}/owner/staff`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          fullName: fullName.trim(),
          username: username.trim(),
          password,
          role,
          ...(role === "doctor"
            ? {
                specialty,
                syndicateCardNumber: syndicateCardNumber.trim(),
              }
            : {}),
        }),
      });

      const result = (await response.json().catch(() => ({}))) as ApiResponse;

      if (!response.ok) {
        setErrorMessage(result.message || t.genericError);
        return;
      }

      setSuccessMessage(result.message || t.success);
      setFullName("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setSyndicateCardNumber("");
    } catch {
      setErrorMessage(t.connectionError);
    } finally {
      setIsSubmitting(false);
    }
  }

  const selectedRoleClass = "border-brand bg-mint/10 ring-2 ring-mint";

  return (
    <main
      lang={language}
      dir={isArabic ? "rtl" : "ltr"}
      className="grid min-h-screen grid-cols-1 bg-bg font-body text-ink lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]"
    >
      {/* Brand and page introduction (Left Side Updated to Match Image) */}
      <aside
        aria-label={t.system}
        className="relative hidden min-h-screen flex-col justify-between overflow-hidden bg-rail px-12 py-12 text-white lg:flex xl:px-14"
      >
        {/* Top Logo */}
        <div className="flex items-center gap-3.5">
          <span className="grid size-12 shrink-0 place-items-center rounded-[14px] bg-mint text-mint-ink">
            <FiPlus className="size-6 stroke-[2.5]" aria-hidden="true" />
          </span>
          <span className="flex flex-col">
            <strong className="font-display text-xl font-extrabold leading-tight tracking-tight text-white">
              My Clinic
            </strong>
            <small className="mt-0.5 text-xs font-medium text-rail-muted">
              {t.system}
            </small>
          </span>
        </div>

        {/* Center Content */}
        <div className="my-auto flex w-full max-w-xl flex-col items-start py-12">
          <h1 className="max-w-[11.5em] font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] text-white xl:text-[50px]">
            {t.heroTitle}
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-rail-text">
            {t.heroText}
          </p>

          <div className="mt-7 flex items-center gap-1 text-xs font-semibold text-rail-ink">
            <span className="rounded-full border border-white/10 bg-rail-soft px-4 py-2">
              {t.reception}
            </span>
            <FiArrowRight
              className="flip size-3.5 text-mint"
              aria-hidden="true"
            />
            <span className="rounded-full border border-white/10 bg-rail-soft px-4 py-2">
              {t.queue}
            </span>
            <FiArrowRight
              className="flip size-3.5 text-mint"
              aria-hidden="true"
            />
            <span className="rounded-full border border-white/10 bg-rail-soft px-4 py-2">
              {t.consultation}
            </span>
            <FiArrowRight
              className="flip size-3.5 text-mint"
              aria-hidden="true"
            />
            <span className="rounded-full border border-white/10 bg-rail-soft px-4 py-2">
              {t.billing}
            </span>
          </div>
        </div>

        {/* Bottom ECG Pulse Line */}
        <div className="w-full pt-4" aria-hidden="true">
          <svg
            viewBox="0 0 600 100"
            className="h-24 w-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Soft Glow */}
            <path
              d="M 0 60 L 160 60 L 178 14 L 198 88 L 218 28 L 236 60 L 340 60 L 355 34 L 375 76 L 388 60 L 600 60"
              stroke="var(--color-mint)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-20 blur-[5px]"
            />
            {/* Main Crisp ECG Line */}
            <path
              d="M 0 60 L 160 60 L 178 14 L 198 88 L 218 28 L 236 60 L 340 60 L 355 34 L 375 76 L 388 60 L 600 60"
              stroke="var(--color-mint)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Pulse Node & Ring */}
            <circle
              cx="388"
              cy="60"
              r="14"
              stroke="var(--color-mint)"
              strokeWidth="1.5"
              className="opacity-35"
            />
            <circle
              cx="388"
              cy="60"
              r="5.5"
              fill="var(--color-mint)"
            />
          </svg>
        </div>
      </aside>

      {/* Signup form */}
      <section className="flex min-h-screen items-center justify-center px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[640px] rounded-lg border border-line bg-surface p-6 shadow-card sm:p-8 xl:p-10"
        >
          <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-md bg-mint text-mint-ink">
                <FiPlus className="size-5" aria-hidden="true" />
              </span>
              <strong className="text-base font-bold">My Clinic</strong>
            </div>
            <span className="text-xs text-muted">{t.system}</span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-brand">
              {t.system}
            </span>

            <div
              className="inline-flex shrink-0 gap-1 rounded-md border border-line bg-bg p-1"
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                aria-pressed={language === "en"}
                onClick={() => setLanguage("en")}
                className={`rounded-md px-4 py-2 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint ${
                  language === "en"
                    ? "bg-mint text-mint-ink shadow-sm"
                    : "text-muted hover:bg-mint/10"
                }`}
              >
                EN
              </button>

              <button
                type="button"
                aria-pressed={language === "ar"}
                onClick={() => setLanguage("ar")}
                className={`rounded-md px-4 py-2 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint ${
                  language === "ar"
                    ? "bg-mint text-mint-ink shadow-sm"
                    : "text-muted hover:bg-mint/10"
                }`}
              >
                عربي
              </button>
            </div>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-h2">
            {t.title}
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
            {t.subtitle}
          </p>

          <div className="mb-3 mt-6 text-xs font-bold uppercase tracking-[0.1em] text-muted">
            {t.accountType}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              aria-pressed={role === "reception"}
              onClick={() => changeRole("reception")}
              className={`${roleCardClass} ${
                role === "reception" ? selectedRoleClass : ""
              }`}
            >
              <span className="mb-2 grid size-10 place-items-center rounded-md bg-mint/10 text-brand">
                <FiUserPlus className="size-5" aria-hidden="true" />
              </span>
              <strong className="text-sm font-bold text-ink">
                {t.reception}
              </strong>
              <span className="mt-1 text-xs leading-5 text-muted">
                {t.receptionDescription}
              </span>
            </button>

            <button
              type="button"
              aria-pressed={role === "doctor"}
              onClick={() => changeRole("doctor")}
              className={`${roleCardClass} ${
                role === "doctor" ? selectedRoleClass : ""
              }`}
            >
              <span className="mb-2 grid size-10 place-items-center rounded-md bg-mint/10 text-brand">
                <FaStethoscope className="size-5" aria-hidden="true" />
              </span>
              <strong className="text-sm font-bold text-ink">
                {t.doctor}
              </strong>
              <span className="mt-1 text-xs leading-5 text-muted">
                {t.doctorDescription}
              </span>
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-4 rounded-lg border border-line bg-mint/10 p-4 sm:p-6">
            <div className="flex flex-col gap-2">
              <label className={fieldLabelClass} htmlFor="staff-full-name">
                {t.fullName}
              </label>
              <input
                id="staff-full-name"
                className={inputClass}
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                autoComplete="name"
                placeholder={t.fullNamePlaceholder}
                required
              />
            </div>

            {role === "doctor" && (
              <>
                <div className="flex flex-col gap-2">
                  <label className={fieldLabelClass} htmlFor="staff-specialty">
                    {t.specialty}
                  </label>
                  <select
                    id="staff-specialty"
                    value={specialty}
                    onChange={(event) => setSpecialty(event.target.value)}
                    className={inputClass}
                  >
                    {signupSpecialties.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.labels[language]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className={fieldLabelClass} htmlFor="staff-syndicate">
                    {t.syndicateCard}
                  </label>
                  <input
                    id="staff-syndicate"
                    className={inputClass}
                    value={syndicateCardNumber}
                    onChange={(event) =>
                      setSyndicateCardNumber(event.target.value)
                    }
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder={t.syndicatePlaceholder}
                    required
                  />
                </div>
              </>
            )}
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label className={fieldLabelClass} htmlFor="staff-username">
              {t.username}
            </label>
            <input
              id="staff-username"
              className={inputClass}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
              placeholder={t.usernamePlaceholder}
              required
            />
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label className={fieldLabelClass} htmlFor="staff-password">
              {t.password}
            </label>
            <div className="relative">
              <input
                id="staff-password"
                className={`${inputClass} pe-12`}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="new-password"
                placeholder={t.passwordPlaceholder}
                minLength={8}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 end-2 grid w-9 place-items-center rounded-md text-muted transition hover:bg-mint/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? t.hidePassword : t.showPassword}
              >
                {showPassword ? (
                  <FiEyeOff className="size-5" aria-hidden="true" />
                ) : (
                  <FiEye className="size-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label
              className={fieldLabelClass}
              htmlFor="staff-confirm-password"
            >
              {t.confirmPassword}
            </label>
            <div className="relative">
              <input
                id="staff-confirm-password"
                className={`${inputClass} pe-12`}
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                autoComplete="new-password"
                placeholder={t.confirmPasswordPlaceholder}
                minLength={8}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 end-2 grid w-9 place-items-center rounded-md text-muted transition hover:bg-mint/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
                onClick={() =>
                  setShowConfirmPassword((current) => !current)
                }
                aria-label={
                  showConfirmPassword ? t.hidePassword : t.showPassword
                }
              >
                {showConfirmPassword ? (
                  <FiEyeOff className="size-5" aria-hidden="true" />
                ) : (
                  <FiEye className="size-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {errorMessage && (
            <p
              className="mt-4 rounded-md border border-danger bg-danger/10 px-4 py-3 text-sm leading-6 text-danger"
              role="alert"
            >
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p
              className="mt-4 rounded-md border border-ok bg-soft px-4 py-3 text-sm leading-6 text-ok"
              role="status"
            >
              {successMessage}
            </p>
          )}

          <button
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-mint px-6 py-3 text-sm font-bold text-mint-ink shadow-sm transition hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
            disabled={isSubmitting} >
            {isSubmitting ? t.creating : t.createAccount}
          </button>
        </form>
      </section>
    </main>
  );
}