
"use client";

import { useState, type FormEvent } from "react";

import {
  FiActivity,
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

type StaffRole = "receptionist" | "doctor";
type ApiResponse = { message?: string };

const fieldLabelClass =
  "block text-xs font-bold uppercase tracking-[0.1em] text-clinic-text-secondary";

const inputClass =
  "min-h-12 w-full rounded-md border border-clinic-border bg-clinic-surface px-[var(--spacing-4)] py-[var(--spacing-3)] text-sm text-clinic-text-primary shadow-clinic-sm outline-none transition placeholder:text-[var(--clinic-slate-400)] focus:border-clinic-primary-hover focus:ring-2 focus:ring-clinic-primary/25";

const roleCardClass =
  "flex min-h-[136px] flex-col items-start rounded-lg border border-clinic-border bg-clinic-surface p-[var(--spacing-4)] text-start shadow-clinic-sm transition hover:border-clinic-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary";

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

  const selectedRoleClass =
    "border-clinic-primary-hover bg-clinic-primary/10 ring-2 ring-clinic-primary";

  return (
    <main
      lang={language}
      dir={isArabic ? "rtl" : "ltr"}
      className="grid min-h-screen grid-cols-1 bg-clinic-bg font-sans text-clinic-text-primary lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]"
    >
      {/* Brand and page introduction */}
      <aside
        aria-label={t.system}
        className="relative hidden min-h-screen flex-col justify-between overflow-hidden bg-[var(--clinic-slate-950)] px-[var(--spacing-12)] py-[var(--spacing-10)] text-white lg:flex"
      >
        <div className="flex items-center gap-[var(--spacing-3)]">
          <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-clinic-primary text-[var(--clinic-slate-950)]">
            <FiPlus className="size-6" aria-hidden="true" />
          </span>

          <span className="flex flex-col">
            <strong className="text-lg font-bold leading-tight text-white">
              My Clinic
            </strong>
            <small className="text-xs text-white/70">{t.system}</small>
          </span>
        </div>

        <div className="max-w-xl">
          <span className="inline-flex rounded-full border border-clinic-primary/30 bg-white/10 px-[var(--spacing-3)] py-[var(--spacing-2)] text-xs font-bold text-clinic-primary">
            {t.ownerNotice}
          </span>

          <h1 className="mt-[var(--spacing-4)] max-w-[12em] text-4xl font-extrabold leading-[1.08] tracking-tight text-white xl:text-h1">
            {t.heroTitle}
          </h1>

          <p className="mt-[var(--spacing-4)] max-w-lg text-base leading-7 text-white/70 xl:text-body">
            {t.heroText}
          </p>

          <div className="mt-[var(--spacing-6)] flex flex-wrap items-center gap-[var(--spacing-2)] text-sm font-semibold">
            <span className="rounded-full bg-white/10 px-[var(--spacing-4)] py-[var(--spacing-2)]">
              {t.reception}
            </span>

            <FiArrowRight className="text-clinic-primary" aria-hidden="true" />

            <span className="rounded-full bg-white/10 px-[var(--spacing-4)] py-[var(--spacing-2)]">
              {t.queue}
            </span>

            <FiArrowRight className="text-clinic-primary" aria-hidden="true" />

            <span className="rounded-full bg-white/10 px-[var(--spacing-4)] py-[var(--spacing-2)]">
              {t.consultation}
            </span>

            <FiArrowRight className="text-clinic-primary" aria-hidden="true" />

            <span className="rounded-full bg-white/10 px-[var(--spacing-4)] py-[var(--spacing-2)]">
              {t.billing}
            </span>
          </div>

          <p className="mt-[var(--spacing-4)] max-w-lg text-sm leading-6 text-white/65">
            {t.ownerNoticeText}
          </p>
        </div>

        <div className="flex items-center justify-between text-clinic-primary/80">
          <FiActivity className="h-16 w-16" aria-hidden="true" />

          <span className="text-xs font-semibold tracking-[0.16em] text-white/45">
            MY CLINIC · STAFF ACCESS
          </span>
        </div>
      </aside>

      {/* Signup form */}
      <section className="flex min-h-screen items-center justify-center px-4 py-6 sm:px-6 lg:px-[var(--spacing-8)] lg:py-[var(--spacing-8)]">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[640px] rounded-lg border border-clinic-border bg-clinic-surface p-6 shadow-clinic-lg sm:p-[var(--spacing-8)] xl:p-[var(--spacing-10)]"
        >
          <div className="mb-[var(--spacing-4)] flex items-center justify-between gap-3 lg:hidden">
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-md bg-clinic-primary text-[var(--clinic-slate-950)]">
                <FiPlus className="size-5" aria-hidden="true" />
              </span>

              <strong className="text-base font-bold">My Clinic</strong>
            </div>

            <span className="text-xs text-clinic-text-secondary">
              {t.system}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-clinic-primary-hover">
              {t.system}
            </span>

            <div
              className="inline-flex shrink-0 gap-1 rounded-md border border-clinic-border bg-clinic-bg p-1"
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                aria-pressed={language === "en"}
                onClick={() => setLanguage("en")}
                className={`rounded-md px-4 py-2 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary ${
                  language === "en"
                    ? "bg-clinic-primary text-[var(--clinic-slate-950)] shadow-clinic-sm"
                    : "text-clinic-text-secondary hover:bg-clinic-primary/10"
                }`}
              >
                EN
              </button>

              <button
                type="button"
                aria-pressed={language === "ar"}
                onClick={() => setLanguage("ar")}
                className={`rounded-md px-4 py-2 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary ${
                  language === "ar"
                    ? "bg-clinic-primary text-[var(--clinic-slate-950)] shadow-clinic-sm"
                    : "text-clinic-text-secondary hover:bg-clinic-primary/10"
                }`}
              >
                عربي
              </button>
            </div>
          </div>

          <h2 className="mt-[var(--spacing-6)] text-3xl font-extrabold leading-tight tracking-tight text-clinic-text-primary sm:text-h2">
            {t.title}
          </h2>

          <p className="mt-[var(--spacing-2)] text-sm leading-6 text-clinic-text-secondary sm:text-small">
            {t.subtitle}
          </p>

          <div className="mb-[var(--spacing-3)] mt-[var(--spacing-6)] text-xs font-bold uppercase tracking-[0.1em] text-clinic-text-secondary">
            {t.accountType}
          </div>

          <div className="grid grid-cols-1 gap-[var(--spacing-3)] sm:grid-cols-2">
            <button
              type="button"
              aria-pressed={role === "receptionist"}
              onClick={() => changeRole("receptionist")}
              className={`${roleCardClass} ${role === "receptionist" ? selectedRoleClass : ""}`}
            >
              <span className="mb-[var(--spacing-2)] grid size-10 place-items-center rounded-md bg-clinic-primary/10 text-clinic-primary-hover">
                <FiUserPlus className="size-5" aria-hidden="true" />
              </span>

              <strong className="text-sm font-bold text-clinic-text-primary">
                {t.reception}
              </strong>

              <span className="mt-1 text-xs leading-5 text-clinic-text-secondary">
                {t.receptionDescription}
              </span>
            </button>

            <button
              type="button"
              aria-pressed={role === "doctor"}
              onClick={() => changeRole("doctor")}
              className={`${roleCardClass} ${role === "doctor" ? selectedRoleClass : ""}`}
            >
              <span className="mb-[var(--spacing-2)] grid size-10 place-items-center rounded-md bg-clinic-primary/10 text-clinic-primary-hover">
                <FaStethoscope className="size-5" aria-hidden="true" />
              </span>

              <strong className="text-sm font-bold text-clinic-text-primary">
                {t.doctor}
              </strong>

              <span className="mt-1 text-xs leading-5 text-clinic-text-secondary">
                {t.doctorDescription}
              </span>
            </button>
          </div>

          <div className="mt-[var(--spacing-4)] flex flex-col gap-[var(--spacing-4)] rounded-lg border border-clinic-border bg-clinic-primary/10 p-[var(--spacing-4)] sm:p-[var(--spacing-6)]">
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

          <div className="mt-[var(--spacing-4)] flex flex-col gap-2">
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

          <div className="mt-[var(--spacing-4)] flex flex-col gap-2">
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
                className="absolute inset-y-0 end-2 grid w-9 place-items-center rounded-md text-clinic-text-secondary transition hover:bg-clinic-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary"
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

          <div className="mt-[var(--spacing-4)] flex flex-col gap-2">
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
                className="absolute inset-y-0 end-2 grid w-9 place-items-center rounded-md text-clinic-text-secondary transition hover:bg-clinic-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary"
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
              className="mt-[var(--spacing-4)] rounded-md border border-clinic-danger bg-clinic-danger-soft px-[var(--spacing-4)] py-[var(--spacing-3)] text-sm leading-6 text-clinic-danger"
              role="alert"
            >
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p
              className="mt-[var(--spacing-4)] rounded-md border border-clinic-success bg-clinic-success-soft px-[var(--spacing-4)] py-[var(--spacing-3)] text-sm leading-6 text-clinic-success"
              role="status"
            >
              {successMessage}
            </p>
          )}

          <button
            className="mt-[var(--spacing-6)] inline-flex min-h-12 w-full items-center justify-center rounded-md bg-clinic-primary px-[var(--spacing-6)] py-[var(--spacing-3)] text-sm font-bold text-[var(--clinic-slate-950)] shadow-clinic-sm transition hover:bg-clinic-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? t.creating : t.createAccount}
          </button>
        </form>
      </section>
    </main>
  );
}
