// types/dashboard.types.ts

export type TimeRange = "Today" | "7 days" | "30 days";

export type StatusType =
  | "Scheduled"
  | "Checked-In"
  | "In Consultation"
  | "Completed"
  | "Cancelled";

export type ActionType = "Scheduled" | "Check-in" | "Cancel";
export type CardIconType = "revenue" | "attendance" | "doctors";
export type CardVariant = "dark" | "light";

export interface StatisticCardData {
  id: string;
  titleKey: string;
  value: string;
  subtextKey: string;
  iconType: CardIconType;
  variant: CardVariant;
}

export interface AttendanceSegment {
  id: string;
  labelKey: string;
  value: number;
  percentage: number;
  color: string;
}

export interface DoctorPerformance {
  id: string;
  name: string;
  specialty: string;
  specialtyKey?: string;
  patients: number;
  avgTime: string;
  avgMinutes?: number;
  revenue: string;
  progress: number;
}

export interface Appointment {
  id: string;
  time: string;
  initials: string;
  name: string;
  color: string;
  doctor: string;
  status: StatusType;
  steps: number;
  progressColor: string;
  action?: ActionType;
}

export interface StatItem {
  label: StatusType;
  value: number;
  descriptionKey: string;
}

export interface RevenueDataPoint {
  day: string;
  value: number;
  isHighlighted?: boolean;
}