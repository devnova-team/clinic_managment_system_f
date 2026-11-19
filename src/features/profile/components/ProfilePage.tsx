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

  FiUser,

  FiUserPlus,

  FiX,

} from "react-icons/fi";

import { profileAccessByRole, profileTranslations } from "@/locales/profile";

import type {

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

  const accessKeys = profileAccessByRole[role];
return (
  <div
    dir={isArabic ? "rtl" : "ltr"}
    lang={language}
    className="w-full overflow-x-hidden bg-bg font-body text-ink">
            <header className="mb-5 flex flex-wrap items-start justify-between gap-3">

              <div>

                <h1 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">

                  {t.pageTitle}

                </h1>

                <p className="mt-1 text-[13px] text-muted">{t.pageSubtitle}</p>

              </div>

              <div className="flex flex-wrap items-center gap-2">

                <div className="inline-flex items-center rounded-lg border border-line bg-surface p-1 shadow-sm">

                  <button

                    type="button"

                    onClick={() => setLanguage("en")}

                    aria-pressed={!isArabic}

                    className={`rounded-md px-3 py-1.5 text-[11px] font-bold transition-colors ${

                      !isArabic ? "bg-mint text-mint-ink" : "text-muted hover:bg-bg"

                    }`}

                  >

                    {t.languageEnglish}

                  </button>

                  <button

                    type="button"

                    onClick={() => setLanguage("ar")}

                    aria-pressed={isArabic}

                    className={`rounded-md px-3 py-1.5 text-[11px] font-bold transition-colors ${

                      isArabic ? "bg-mint text-mint-ink" : "text-muted hover:bg-bg"

                    }`}

                  >

                    {t.languageArabic}

                  </button>

                </div>

                <div className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-line bg-surface px-2.5 py-1.5 text-[11px] font-semibold text-muted shadow-sm">

                  <FiCalendar size={15} className="text-brand" />

                  <time dateTime={new Date().toISOString().slice(0, 10)}>{formattedDate}</time>

                </div>

              </div>

            </header>

            <section className="mb-4 flex flex-wrap items-center gap-3 rounded-2xl bg-rail p-4 text-white shadow-card sm:px-5 sm:py-4">

              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-mint text-base font-extrabold text-mint-ink sm:size-14">

                {initials}

              </span>

              <div className="min-w-0 flex-1">

                <h2 className="truncate text-lg font-extrabold sm:text-xl">

                  {isEditing ? draft.name || activeUser.name : activeUser.name}

                </h2>

                <span className="mt-1 inline-flex rounded-full bg-surface px-2.5 py-1 text-[10px] font-bold text-ink">

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

                      className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg bg-mint px-3 py-1.5 text-xs font-bold text-mint-ink shadow-sm transition hover:brightness-95"

                    >

                      <FiCheck size={16} />

                      {t.saveChanges}

                    </button>

                  </>

                ) : (

                  <button

                    type="button"

                    onClick={startEditing}

                    className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg bg-mint px-3 py-1.5 text-xs font-bold text-mint-ink shadow-sm transition hover:brightness-95"

                  >

                    <FiEdit2 size={16} />

                    {t.editProfile}

                  </button>

                )}

              </div>

            </section>

            <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(250px,0.9fr)]">

              <section className="rounded-2xl border border-line bg-surface p-4 shadow-card sm:p-5">

                <h2 className="text-base font-extrabold text-ink">{t.detailsTitle}</h2>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">

                  <label className="block min-w-0">

                    <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.12em] text-muted">

                      {t.fields.fullName}

                    </span>

                    <input

                      value={isEditing ? draft.name : activeUser.name}

                      onChange={(event) => updateDraft("name", event.target.value)}

                      readOnly={!isEditing}

                      autoComplete="name"

                      className="min-h-10 w-full rounded-lg border border-line bg-bg px-2.5 py-2 text-xs text-ink outline-none transition placeholder:text-muted/60 focus:border-brand focus:ring-2 focus:ring-mint/20 read-only:cursor-default"

                    />

                  </label>

                  <label className="block min-w-0">

                    <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.12em] text-muted">

                      {t.fields.nationalId}

                    </span>

                    <input

                      value={isEditing ? draft.nationalId : activeUser.nationalId}

                      onChange={(event) => updateDraft("nationalId", event.target.value)}

                      readOnly={!isEditing}

                      inputMode="numeric"

                      autoComplete="off"

                      dir="ltr"

                      className="min-h-10 w-full rounded-lg border border-line bg-bg px-2.5 py-2 text-xs text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-mint/20 read-only:cursor-default"

                    />

                  </label>

                  <label className="block min-w-0">

                    <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.12em] text-muted">

                      {t.fields.email}

                    </span>

                    <input

                      type="email"

                      value={isEditing ? draft.email : activeUser.email}

                      onChange={(event) => updateDraft("email", event.target.value)}

                      readOnly={!isEditing}

                      autoComplete="email"

                      dir="ltr"

                      className="min-h-10 w-full rounded-lg border border-line bg-bg px-2.5 py-2 text-start text-xs text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-mint/20 read-only:cursor-default"

                    />

                  </label>

                  <div className="block min-w-0">

                    <label htmlFor="profile-new-password" className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.12em] text-muted">

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

                          className="min-h-10 w-full rounded-lg border border-line bg-bg px-2.5 py-2 pe-10 text-xs text-ink outline-none transition placeholder:text-muted/60 focus:border-brand focus:ring-2 focus:ring-mint/20"

                        />

                        <button

                          type="button"

                          onClick={() => setShowPassword((visible) => !visible)}

                          aria-label={showPassword ? "Hide password" : "Show password"}

                          className="absolute inset-y-0 end-2 grid w-8 place-items-center text-muted hover:text-ink"

                        >

                          {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}

                        </button>

                      </div>

                    ) : (

                      <div className="flex min-h-10 items-center rounded-lg border border-line bg-bg px-2.5 py-2 text-xs tracking-[0.2em] text-muted">

                        ••••••••

                      </div>

                    )}

                    {isEditing && <p className="mt-1.5 text-[11px] leading-5 text-muted">{t.passwordHint}</p>}

                  </div>

                </div>

              </section>

              <section className="rounded-2xl border border-line bg-surface p-4 shadow-card sm:p-5">

                <h2 className="text-sm font-extrabold text-ink">{t.accessTitle}</h2>

                <p className="mt-1 text-[11px] text-muted">{t.accessSubtitle}</p>

                <ul className="mt-3 space-y-1.5">

                  {accessKeys.map((key) => {

                    const Icon = accessIcons[key];

                    return (

                      <li key={key}>

                        <div className="flex min-h-9 items-center gap-2.5 rounded-lg border border-line bg-bg px-2.5 py-2 text-[11px] font-semibold text-ink">

                          <Icon size={14} className="shrink-0 text-brand" />

                          <span>{t.access[key]}</span>

                        </div>

                      </li>

                    );

                  })}

                </ul>

              </section>

            </div>

            {notice && (

              <div role="status" className="mt-4 flex items-start justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-sm text-muted shadow-sm">

                <span>{notice}</span>

                <button type="button" onClick={() => setNotice("")} aria-label="Dismiss" className="shrink-0 text-muted hover:text-ink">

                  <FiX size={16} />

                </button>

              </div>

            )}

            {/* Mobile role switch: desktop version is in the sidebar footer. */}

            <div className="mt-5 rounded-2xl border border-line bg-surface p-3 shadow-sm lg:hidden">

              <p className="mb-3 text-xs font-bold text-muted">{t.previewAs}</p>

              <div className="grid grid-cols-3 gap-2">

                {(["owner", "reception", "doctor"] as const).map((item) => (

                  <button

                    key={item}

                    type="button"

                    onClick={() => changeRole(item)}

                    aria-pressed={role === item}

                    className={`rounded-lg border px-2 py-2 text-xs font-bold transition-colors ${

                      role === item

                        ? "border-mint bg-mint text-mint-ink"

                        : "border-line bg-bg text-muted"

                    }`}>

                    {t.roles[item]}

                  </button>

                ))}

              </div>

            </div>

          </div>

  );

}
