"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Avatar from "@/components/atoms/Avatar";
import Icon from "@/components/atoms/Icon";
import PreviewAs from "./PreviewAs";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { logout } from "@/features/auth/services/auth.service";
import { NAV, isActive } from "@/lib/navigation/nav-config";
import { useT } from "@/lib/i18n/useT";
import { cn } from "@/lib/cn";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useT();
  const { name, role } = useCurrentUser();

  async function handleLogout() {
    await logout();
    router.replace("/login");
  }

  return (
    <aside className="sticky top-0 flex h-screen flex-col gap-[22px] overflow-auto bg-rail px-4 py-[26px] text-rail-ink max-[900px]:static max-[900px]:h-auto max-[900px]:flex-row max-[900px]:flex-wrap max-[900px]:items-center">
      <div className="flex items-center gap-3">
        <span className="grid size-[42px] shrink-0 place-items-center rounded-[13px] bg-mint text-mint-ink">
          <Icon name="lucide:plus" size={22} />
        </span>
        <div>
          <b className="block font-display text-[18px] leading-none text-white">My Clinic</b>
          <small className="block text-[12.5px] opacity-75">{t("sys")}</small>
        </div>
      </div>

      <div className="max-[900px]:order-3 max-[900px]:w-full">
        <span className="eyebrow mb-2 block !text-rail-muted max-[900px]:hidden">
          {t("navigation")}
        </span>
        <nav
          aria-label={t("navigation")}
          className="flex flex-col gap-1 max-[900px]:flex-row max-[900px]:flex-wrap"
        >
          {NAV[role].map((item) => {
            const active = isActive(pathname, item);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-control px-3.5 py-[11px] font-semibold no-underline transition",
                  active ? "bg-mint text-mint-ink" : "text-rail-ink hover:bg-rail-soft"
                )}
              >
                <Icon name={item.icon ?? "lucide:circle"} size={18} />
                <span>{t(item.labelKey)}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex-1" />

      {process.env.NODE_ENV !== "production" && <PreviewAs />}

      <div className="flex items-center gap-3 rounded-[16px] bg-rail-deep p-3">
        <Avatar name={name} />
        <div>
          <b className="block text-sm text-white">{name}</b>
          <small className="text-[12.5px] opacity-75">{t(`r_${role}`)}</small>
        </div>
      </div>

      <button
        type="button"
        onClick={handleLogout}
        className="flex items-center gap-3 rounded-xl px-2.5 py-2 font-semibold text-rail-ink hover:bg-rail-soft"
      >
        <Icon name="lucide:log-out" size={18} className="rtl:-scale-x-100" />
        <span>{t("logout")}</span>
      </button>
    </aside>
  );
}
