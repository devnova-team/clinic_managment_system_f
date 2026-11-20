"use client";

import React from "react";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n/useT";

interface QueueHintBannerProps {
  message?: string;
  className?: string;
}

export const QueueHintBanner: React.FC<QueueHintBannerProps> = ({
  message,
  className = "",
}) => {
  const t = useT();

  // استخدام الرسالة الممررة أو جلب الرسالة المترجمة تلقائياً
  const displayMessage = message ?? t("queue_hint_msg");

  return (
    <div
      className={cn(
        "flex items-start gap-2.5 rounded-xl border border-[#D1E7E4] bg-[#E7F5F3] px-4 py-3",
        className
      )}
    >
      <span className="mt-[1px] shrink-0 text-sm font-semibold text-[#0F766E] rtl:rotate-180 inline-block">
        →
      </span>

      <p className="text-[13px] leading-relaxed text-[#0F766E]">
        {displayMessage}
      </p>
    </div>
  );
};

export default QueueHintBanner;