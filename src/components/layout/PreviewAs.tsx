"use client";

import Button from "@/components/atoms/Button";
import { useT } from "@/lib/i18n/useT";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

const ROLES = ["owner", "receptionist", "doctor"] as const;

export default function PreviewAs() {
  const t = useT();
  const { role } = useCurrentUser();

  if (process.env.NODE_ENV === "production") return null;

  const switchTo = (next: (typeof ROLES)[number]) => {
    localStorage.setItem("preview-role", next);
    window.location.reload();
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="eyebrow text-rail-muted">{t("previewAs")}</span>
      <div className="flex flex-wrap gap-1.5">
        {ROLES.map((r) => (
          <Button
            key={r}
            size="sm"
            variant={role === r ? "mint" : "none"}
            onClick={() => switchTo(r)}
            className="border border-rail-soft text-rail-ink"
          >
            {t(`r_${r}`)}
          </Button>
        ))}
      </div>
    </div>
  );
}