import Icon from '@/components/atoms/Icon';

type IconName = React.ComponentProps<typeof Icon>['name'];

export type Role = 'owner' | 'reception' | 'doctor';

export type NavItem = {
  href: string;
  labelKey: string;   // مفتاح الترجمة
  icon: IconName;
  match: string;      // بادئة الـ route اللي بتفعّل العنصر
};

export const NAV: Record<Role, NavItem[]> = {
  reception: [
    { href: '/reception', labelKey: 'nav_reception', icon: 'userPlus', match: '/reception' },
    { href: '/queue',     labelKey: 'nav_queue',     icon: 'list',     match: '/queue' },
    { href: '/billing',   labelKey: 'nav_billing',   icon: 'card',     match: '/billing' },
    { href: '/profile',   labelKey: 'nav_profile',   icon: 'user',     match: '/profile' },
  ],
  doctor: [
    { href: '/dashboard',    labelKey: 'nav_mydash', icon: 'grid',  match: '/dashboard' },
    { href: '/consultation', labelKey: 'nav_consult', icon: 'steth', match: '/consultation' },
    { href: '/profile',      labelKey: 'nav_profile', icon: 'user',  match: '/profile' },
  ],
  owner: [
    { href: '/dashboard', labelKey: 'nav_dash',    icon: 'grid', match: '/dashboard' },
    { href: '/profile',   labelKey: 'nav_profile', icon: 'user', match: '/profile' },
  ],
};

export const HOME_BY_ROLE: Record<Role, string> = {
  reception: '/reception',
  doctor: '/dashboard',
  owner: '/dashboard',
};

/** /reception/invoices/123 بتفعّل "الحجز والاستقبال" */
export function isActive(pathname: string, item: NavItem) {
  return pathname === item.match || pathname.startsWith(item.match + '/');
}

export function canAccess(role: Role, pathname: string) {
  const allowed = NAV[role].some((item) => isActive(pathname, item));
  return allowed || pathname.startsWith('/consultation/') && role === 'doctor';
}