import {
  StatisticCardData,
  AttendanceSegment,
  DoctorPerformance,
  StatItem,
  RevenueDataPoint,
} from "@/features/owner/types/owner.types";

// ===== Statistics Cards =====
export const STATISTICS_CARDS_DATA: StatisticCardData[] = [
  {
    id: "1",
    titleKey: "stat_revenue_title",
    value: "EGP 142,000",
    subtextKey: "stat_revenue_sub",
    iconType: "revenue",
    variant: "dark",
  },
  {
    id: "2",
    titleKey: "stat_attendance_title",
    value: "84%",
    subtextKey: "stat_attendance_sub",
    iconType: "attendance",
    variant: "light",
  },
  {
    id: "3",
    titleKey: "stat_doctors_title",
    value: "2",
    subtextKey: "stat_doctors_sub",
    iconType: "doctors",
    variant: "light",
  },
];

// ===== Attendance =====
export const ATTENDANCE_META = {
  totalVisits: 168,
  periodKey: "att_period",
};

export const ATTENDANCE_SEGMENTS: AttendanceSegment[] = [
  { id: "attended", labelKey: "att_attended", value: 141, percentage: 84, color: "#118D80" },
  { id: "no-show", labelKey: "att_noshow", value: 19, percentage: 11, color: "#E09F25" },
  { id: "cancelled", labelKey: "att_cancelled", value: 8, percentage: 5, color: "#8E2828" },
];

// ===== Doctor Performance =====
export const DOCTORS_PERFORMANCE: DoctorPerformance[] = [
  {
    id: "1",
    name: "Dr. Amr Hassan",
    specialty: "Internal Medicine",
    patients: 82,
    avgTime: "14 min avg",
    revenue: "79k EGP",
    progress: 85,
  },
  {
    id: "2",
    name: "Dr. Layla Samir",
    specialty: "Pediatrics",
    patients: 59,
    avgTime: "17 min avg",
    revenue: "63k EGP",
    progress: 62,
  },
];

// ===== Revenue Chart =====
export const REVENUE_CHART_DATA: RevenueDataPoint[] = [
  { day: "Sun 18", value: 16 },
  { day: "Mon 19", value: 19.5 },
  { day: "Tue 20", value: 8 },
  { day: "Wed 21", value: 22 },
  { day: "Thu 22", value: 20.5 },
  { day: "Fri 23", value: 26.3, isHighlighted: true },
  { day: "Sat 24", value: 17.5 },
];

// ===== Queue Stats =====
export const QUEUE_STATS_DATA: StatItem[] = [
  { label: "Scheduled", value: 2, descriptionKey: "stat_desc_scheduled" },
  { label: "Checked-In", value: 1, descriptionKey: "stat_desc_checked" },
  { label: "In Consultation", value: 1, descriptionKey: "stat_desc_consult" },
  { label: "Completed", value: 1, descriptionKey: "stat_desc_completed" },
  { label: "Cancelled", value: 1, descriptionKey: "stat_desc_cancelled" },
];

export const HIGHLIGHTED_DAY_INFO = {
  text: "Fri 23 · EGP 26,300",
};