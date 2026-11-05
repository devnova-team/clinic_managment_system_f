"use client";

import { useMemo, useState } from "react";
import {
  FiActivity,
  FiCalendar,
  FiCheck,
  FiCreditCard,
  FiEdit2,
  FiEye,
  FiEyeOff,
  FiGrid,
  FiList,
  FiLogOut,
  FiPlus,
  FiUser,
  FiUserPlus,
  FiX,
} from "react-icons/fi";
import { profileAccessByRole, profileTranslations } from "@/locales/profile";
import type {
  ProfileAccessKey,
  ProfileLanguage,
  ProfileRole,
  ProfileUser,
} from "@/features/profile/types/profile.types";

const initialUsers: Record<ProfileRole, ProfileUser> = {
  reception: {
    name: "Nada Salem",
    nationalId: "29208120105432",
    email: "nada.salem@myclinic.example",
  },
  doctor: {
    name: "Dr. Amr Hassan",
    nationalId: "28506150104321",
    email: "amr.hassan@myclinic.example",
  },
  owner: {
    name: "Karim Nabil",
    nationalId: "28907100101010",
    email: "karim.nabil@myclinic.example",
  },
};

const accessIcons = {
  receptionBooking: FiUserPlus,
  queue: FiList,
  billing: FiCreditCard,
  dashboard: FiGrid,
  consultation: FiActivity,
  profile: FiUser,
};

const navigationByRole: Record<ProfileRole, ProfileAccessKey[]> = {
  reception: ["receptionBooking", "queue", "billing", "profile"],
  doctor: ["dashboard", "consultation", "profile"],
  owner: ["dashboard", "profile"],
};

function getInitials(name: string) {
  return name
    .replace(/^Dr\.\s*/i, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

export function ProfilePage() {
  const [language, setLanguage] = useState<ProfileLanguage>("en");
  const [role, setRole] = useState<ProfileRole>("reception");
  const [users, setUsers] = useState<Record<ProfileRole, ProfileUser>>(initialUsers);
  const [draft, setDraft] = useState<ProfileUser>(initialUsers.reception);
  const [isEditing, setIsEditing] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");

  const t = profileTranslations[language];
  const isArabic = language === "ar";
  const activeUser = users[role];
  const initials = getInitials(isEditing ? draft.name : activeUser.name);
  const formattedDate = useMemo(
    () =>
      new Intl.DateTimeFormat(isArabic ? "ar-EG" : "en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(new Date()),
    [isArabic],
  );

  const changeRole = (nextRole: ProfileRole) => {
    setRole(nextRole);
    setDraft(users[nextRole]);
    setIsEditing(false);
    setNewPassword("");
    setShowPassword(false);
    setNotice("");
  };

  const startEditing = () => {
    setDraft(activeUser);
    setNewPassword("");
    setIsEditing(true);
    setNotice("");
  };

  const cancelEditing = () => {
    setDraft(activeUser);
    setNewPassword("");
    setIsEditing(false);
    setShowPassword(false);
  };

  const saveProfile = () => {
    setUsers((current) => ({ ...current, [role]: draft }));
    setIsEditing(false);
    setNewPassword("");
    setShowPassword(false);
    setNotice(t.saveSuccess);
  };

  const updateDraft = (field: keyof ProfileUser, value: string) => {
    setDraft((current) => ({ ...current, [field]: value }));
  };

  const menuKeys = navigationByRole[role];
  const accessKeys = profileAccessByRole[role];

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      lang={language}
      className="min-h-screen w-full overflow-x-hidden bg-clinic-bg font-sans text-clinic-text-primary"
    >
      <div className="min-h-screen lg:grid lg:grid-cols-[17rem_1fr]">
        <aside className="flex min-h-0 flex-col gap-5 bg-clinic-text-primary px-3 py-4 text-white lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:px-4 lg:py-5">
          <div className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-clinic-primary text-clinic-text-primary shadow-clinic-sm">
              <FiPlus size={22} strokeWidth={2.8} />
            </span>
            <span className="min-w-0">
              <strong className="block text-sm font-extrabold leading-tight">My Clinic</strong>
              <span className="mt-0.5 block whitespace-nowrap text-[10px] leading-4 text-white/65">Clinic Management System</span>
            </span>
          </div>

          <div className="min-w-0">
            <p className="mb-2 px-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">
              {t.navigation}
            </p>
            <nav aria-label={t.navigation} className="flex gap-1.5 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
              {menuKeys.map((key) => {
                const Icon = accessIcons[key];
                const isActive = key === "profile";
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      if (!isActive) setNotice(t.navigationPlaceholder);
                      else setNotice("");
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex min-h-9 min-w-0 shrink-0 items-center gap-2.5 rounded-lg px-2.5 py-2 text-start text-xs font-semibold transition-colors lg:w-full ${
                      isActive
                        ? "bg-clinic-primary text-clinic-text-primary shadow-clinic-sm"
                        : "text-white/75 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon size={15} className="shrink-0" />
                    <span className="min-w-0 truncate">{t.access[key]}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="mt-auto hidden shrink-0 lg:block">
            <p className="mb-2 px-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">
              {t.previewAs}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {(["owner", "reception", "doctor"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => changeRole(item)}
                  aria-pressed={role === item}
                  className={`rounded-lg border px-2 py-1.5 text-[10px] font-semibold whitespace-nowrap transition-colors ${
                    role === item
                      ? "border-clinic-primary bg-clinic-primary text-clinic-text-primary"
                      : "border-white/15 bg-transparent text-white/70 hover:bg-white/10"
                  }`}
                >
                  {t.roles[item]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2.5 rounded-xl bg-white/[0.06] p-2.5">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-clinic-primary text-xs font-extrabold text-clinic-text-primary">
              {getInitials(activeUser.name)}
            </span>
            <span className="min-w-0 flex-1">
              <strong className="block truncate text-xs font-bold text-white">{activeUser.name}</strong>
              <span className="block text-[10px] text-white/60">{t.roles[role]}</span>
            </span>
          </div>

          <a
            href="/login"
            className="flex min-h-8 shrink-0 items-center gap-2.5 rounded-lg px-2.5 text-xs font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <FiLogOut size={17} />
            {t.logout}
          </a>
        </aside>

        <main className="min-h-screen min-w-0 px-4 py-5 sm:px-5 lg:px-7 lg:py-6">
          <div className="mx-auto w-full max-w-[1360px]">
            <header className="mb-5 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-clinic-text-primary sm:text-3xl">
                  {t.pageTitle}
                </h1>
                <p className="mt-1 text-[13px] text-clinic-text-secondary">{t.pageSubtitle}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center rounded-lg border border-clinic-border bg-clinic-surface p-1 shadow-clinic-sm">
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    aria-pressed={!isArabic}
                    className={`rounded-md px-3 py-1.5 text-[11px] font-bold transition-colors ${
                      !isArabic ? "bg-clinic-primary text-clinic-text-primary" : "text-clinic-text-secondary hover:bg-clinic-bg"
                    }`}
                  >
                    {t.languageEnglish}
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("ar")}
                    aria-pressed={isArabic}
                    className={`rounded-md px-3 py-1.5 text-[11px] font-bold transition-colors ${
                      isArabic ? "bg-clinic-primary text-clinic-text-primary" : "text-clinic-text-secondary hover:bg-clinic-bg"
                    }`}
                  >
                    {t.languageArabic}
                  </button>
                </div>

                <div className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-clinic-border bg-clinic-surface px-2.5 py-1.5 text-[11px] font-semibold text-clinic-text-secondary shadow-clinic-sm">
                  <FiCalendar size={15} className="text-clinic-primary-hover" />
                  <time dateTime={new Date().toISOString().slice(0, 10)}>{formattedDate}</time>
                </div>
              </div>
            </header>

            <section className="mb-4 flex flex-wrap items-center gap-3 rounded-2xl bg-clinic-text-primary p-4 text-white shadow-clinic-md sm:px-5 sm:py-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-clinic-primary text-base font-extrabold text-clinic-text-primary sm:size-14">
                {initials}
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="truncate text-lg font-extrabold sm:text-xl">
                  {isEditing ? draft.name || activeUser.name : activeUser.name}
                </h2>
                <span className="mt-1 inline-flex rounded-full bg-clinic-surface px-2.5 py-1 text-[10px] font-bold text-clinic-text-primary">
                  {t.roles[role]}
                </span>
              </div>

              <div className="flex shrink-0 flex-wrap gap-2">
                {isEditing ? (
                  <>
                    <button
                      type="button"
                      onClick={cancelEditing}
                      className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-white/20 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-white/10"
                    >
                      <FiX size={16} />
                      {t.cancel}
                    </button>
                    <button
                      type="button"
                      onClick={saveProfile}
                      className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg bg-clinic-primary px-3 py-1.5 text-xs font-bold text-clinic-text-primary shadow-clinic-sm transition hover:brightness-95"
                    >
                      <FiCheck size={16} />
                      {t.saveChanges}
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={startEditing}
                    className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg bg-clinic-primary px-3 py-1.5 text-xs font-bold text-clinic-text-primary shadow-clinic-sm transition hover:brightness-95"
                  >
                    <FiEdit2 size={16} />
                    {t.editProfile}
                  </button>
                )}
              </div>
            </section>

            <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(250px,0.9fr)]">
              <section className="rounded-2xl border border-clinic-border bg-clinic-surface p-4 shadow-clinic-md sm:p-5">
                <h2 className="text-base font-extrabold text-clinic-text-primary">{t.detailsTitle}</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <label className="block min-w-0">
                    <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.12em] text-clinic-text-secondary">
                      {t.fields.fullName}
                    </span>
                    <input
                      value={isEditing ? draft.name : activeUser.name}
                      onChange={(event) => updateDraft("name", event.target.value)}
                      readOnly={!isEditing}
                      autoComplete="name"
                      className="min-h-10 w-full rounded-lg border border-clinic-border bg-clinic-bg px-2.5 py-2 text-xs text-clinic-text-primary outline-none transition placeholder:text-clinic-text-secondary/60 focus:border-clinic-primary-hover focus:ring-2 focus:ring-clinic-primary/20 read-only:cursor-default"
                    />
                  </label>

                  <label className="block min-w-0">
                    <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.12em] text-clinic-text-secondary">
                      {t.fields.nationalId}
                    </span>
                    <input
                      value={isEditing ? draft.nationalId : activeUser.nationalId}
                      onChange={(event) => updateDraft("nationalId", event.target.value)}
                      readOnly={!isEditing}
                      inputMode="numeric"
                      autoComplete="off"
                      dir="ltr"
                      className="min-h-10 w-full rounded-lg border border-clinic-border bg-clinic-bg px-2.5 py-2 text-xs text-clinic-text-primary outline-none transition focus:border-clinic-primary-hover focus:ring-2 focus:ring-clinic-primary/20 read-only:cursor-default"
                    />
                  </label>

                  <label className="block min-w-0">
                    <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.12em] text-clinic-text-secondary">
                      {t.fields.email}
                    </span>
                    <input
                      type="email"
                      value={isEditing ? draft.email : activeUser.email}
                      onChange={(event) => updateDraft("email", event.target.value)}
                      readOnly={!isEditing}
                      autoComplete="email"
                      dir="ltr"
                      className="min-h-10 w-full rounded-lg border border-clinic-border bg-clinic-bg px-2.5 py-2 text-start text-xs text-clinic-text-primary outline-none transition focus:border-clinic-primary-hover focus:ring-2 focus:ring-clinic-primary/20 read-only:cursor-default"
                    />
                  </label>

                  <div className="block min-w-0">
                    <label htmlFor="profile-new-password" className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.12em] text-clinic-text-secondary">
                      {t.fields.password}
                    </label>
                    {isEditing ? (
                      <div className="relative">
                        <input
                          id="profile-new-password"
                          type={showPassword ? "text" : "password"}
                          value={newPassword}
                          onChange={(event) => setNewPassword(event.target.value)}
                          placeholder={t.passwordPlaceholder}
                          autoComplete="new-password"
                          className="min-h-10 w-full rounded-lg border border-clinic-border bg-clinic-bg px-2.5 py-2 pe-10 text-xs text-clinic-text-primary outline-none transition placeholder:text-clinic-text-secondary/60 focus:border-clinic-primary-hover focus:ring-2 focus:ring-clinic-primary/20"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((visible) => !visible)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          className="absolute inset-y-0 end-2 grid w-8 place-items-center text-clinic-text-secondary hover:text-clinic-text-primary"
                        >
                          {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                        </button>
                      </div>
                    ) : (
                      <div className="flex min-h-10 items-center rounded-lg border border-clinic-border bg-clinic-bg px-2.5 py-2 text-xs tracking-[0.2em] text-clinic-text-secondary">
                        ••••••••
                      </div>
                    )}
                    {isEditing && <p className="mt-1.5 text-[11px] leading-5 text-clinic-text-secondary">{t.passwordHint}</p>}
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-clinic-border bg-clinic-surface p-4 shadow-clinic-md sm:p-5">
                <h2 className="text-sm font-extrabold text-clinic-text-primary">{t.accessTitle}</h2>
                <p className="mt-1 text-[11px] text-clinic-text-secondary">{t.accessSubtitle}</p>
                <ul className="mt-3 space-y-1.5">
                  {accessKeys.map((key) => {
                    const Icon = accessIcons[key];
                    return (
                      <li key={key}>
                        <div className="flex min-h-9 items-center gap-2.5 rounded-lg border border-clinic-border bg-clinic-bg px-2.5 py-2 text-[11px] font-semibold text-clinic-text-primary">
                          <Icon size={14} className="shrink-0 text-clinic-primary-hover" />
                          <span>{t.access[key]}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>

            {notice && (
              <div role="status" className="mt-4 flex items-start justify-between gap-3 rounded-xl border border-clinic-border bg-clinic-surface px-4 py-3 text-sm text-clinic-text-secondary shadow-clinic-sm">
                <span>{notice}</span>
                <button type="button" onClick={() => setNotice("")} aria-label="Dismiss" className="shrink-0 text-clinic-text-secondary hover:text-clinic-text-primary">
                  <FiX size={16} />
                </button>
              </div>
            )}

            {/* Mobile role switch: desktop version is in the sidebar footer. */}
            <div className="mt-5 rounded-2xl border border-clinic-border bg-clinic-surface p-3 shadow-clinic-sm lg:hidden">
              <p className="mb-3 text-xs font-bold text-clinic-text-secondary">{t.previewAs}</p>
              <div className="grid grid-cols-3 gap-2">
                {(["owner", "reception", "doctor"] as const).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => changeRole(item)}
                    aria-pressed={role === item}
                    className={`rounded-lg border px-2 py-2 text-xs font-bold transition-colors ${
                      role === item
                        ? "border-clinic-primary bg-clinic-primary text-clinic-text-primary"
                        : "border-clinic-border bg-clinic-bg text-clinic-text-secondary"
                    }`}
                  >
                    {t.roles[item]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
