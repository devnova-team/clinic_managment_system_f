import type { ProfileAccessKey, ProfileLanguage, ProfileRole } from "@/features/profile/types/profile.types";

type ProfileMessages = {
  pageTitle: string;
  pageSubtitle: string;
  navigation: string;
  previewAs: string;
  roles: Record<ProfileRole, string>;
  logout: string;
  editProfile: string;
  saveChanges: string;
  cancel: string;
  detailsTitle: string;
  accessTitle: string;
  accessSubtitle: string;
  fields: {
    fullName: string;
    nationalId: string;
    email: string;
    password: string;
  };
  passwordHint: string;
  passwordPlaceholder: string;
  access: Record<ProfileAccessKey, string>;
  saveSuccess: string;
  navigationPlaceholder: string;
  languageEnglish: string;
  languageArabic: string;
};

export const profileTranslations: Record<ProfileLanguage, ProfileMessages> = {
  en: {
    pageTitle: "Profile",
    pageSubtitle: "Your details on My Clinic",
    navigation: "Navigation",
    previewAs: "Preview as",
    roles: {
      owner: "Owner",
      reception: "Reception",
      doctor: "Doctor",
    },
    logout: "Logout",
    editProfile: "Edit profile",
    saveChanges: "Save changes",
    cancel: "Cancel",
    detailsTitle: "Sign-in details on My Clinic",
    accessTitle: "Your access",
    accessSubtitle: "Pages this role can open",
    fields: {
      fullName: "Full name",
      nationalId: "National ID",
      email: "Email",
      password: "Password",
    },
    passwordHint: "For security, your current password is never displayed.",
    passwordPlaceholder: "Enter a new password (optional)",
    access: {
      receptionBooking: "Reception & Booking",
      queue: "Queue",
      billing: "Billing",
      dashboard: "Dashboard",
      consultation: "Consultation",
      profile: "Profile",
    },
    saveSuccess: "Profile changes were updated in this preview.",
    navigationPlaceholder: "This screen will be connected when its page is added.",
    languageEnglish: "EN",
    languageArabic: "عربي",
  },
  ar: {
    pageTitle: "الملف الشخصي",
    pageSubtitle: "بياناتك على My Clinic",
    navigation: "التنقل",
    previewAs: "معاينة بصفة",
    roles: {
      owner: "المالك",
      reception: "الاستقبال",
      doctor: "الطبيب",
    },
    logout: "تسجيل الخروج",
    editProfile: "تعديل الملف",
    saveChanges: "حفظ التغييرات",
    cancel: "إلغاء",
    detailsTitle: "بيانات الدخول إلى My Clinic",
    accessTitle: "الصلاحيات المتاحة",
    accessSubtitle: "الصفحات التي يمكن لهذا الدور فتحها",
    fields: {
      fullName: "الاسم الكامل",
      nationalId: "الرقم القومي",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
    },
    passwordHint: "لأسباب أمنية، لا يتم عرض كلمة المرور الحالية.",
    passwordPlaceholder: "أدخل كلمة مرور جديدة (اختياري)",
    access: {
      receptionBooking: "الاستقبال والحجز",
      queue: "الطابور",
      billing: "الفواتير",
      dashboard: "لوحة التحكم",
      consultation: "الكشف والاستشارة",
      profile: "الملف الشخصي",
    },
    saveSuccess: "تم تحديث البيانات في المعاينة الحالية.",
    navigationPlaceholder: "سيتم ربط هذه الصفحة عند إضافتها إلى المشروع.",
    languageEnglish: "EN",
    languageArabic: "عربي",
  },
};

export const profileAccessByRole: Record<ProfileRole, ProfileAccessKey[]> = {
  reception: ["receptionBooking", "queue", "billing", "profile"],
  doctor: ["dashboard", "consultation", "profile"],
  owner: ["dashboard", "profile"],
};
