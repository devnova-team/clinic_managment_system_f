type Tone = "ink" | "ok" | "warn" | "bad" | "brand" | "bar";

const toneClass: Record<Tone, string> = {
  ink: "bg-ink",
  ok: "bg-ok",
  warn: "bg-warn",
  bad: "bg-bad",
  brand: "bg-brand",
  bar: "bg-bar",
};

interface Segment {
  value: number;
  tone: Tone;
}

export default function ProgressBar({ segments }: { segments: Segment[] }) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  if (total === 0) {
    return <div className="mt-3.5 h-4 rounded-[9px] bg-line" />;
  }

  return (
    <div className="mt-3.5 flex h-4 gap-[3px] overflow-hidden rounded-[9px]">
      {segments
        .filter((s) => s.value > 0)
        .map((s, i) => (
          <i
            key={i}
            className={`block h-full ${toneClass[s.tone]}`}
            style={{ width: `${(s.value / total) * 100}%` }}
          />
        ))}
    </div>
  );
}