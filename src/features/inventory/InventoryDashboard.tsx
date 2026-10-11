import type { CSSProperties } from "react";

const palette = {
  green: "#14532D",
  greenSoft: "#DCFCE7",
  greenBorder: "#BBF7D0",
  muted: "#4B5563",
};

type MetricCardProps = {
  label: string;
  note: string;
  symbol: string;
};

function MetricCard({ label, note, symbol }: MetricCardProps) {
  return (
    <article
      className="rounded-2xl border p-5 shadow-sm"
      style={{
        background: "var(--clinic-surface, #FFFFFF)",
        borderColor: "var(--clinic-border, #E2E8F0)",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm" style={{ color: "var(--clinic-text-secondary, #475569)" }}>
            {label}
          </p>
          <p className="mt-3 text-3xl font-semibold tracking-tight" style={{ color: "var(--clinic-text-primary, #0F172A)" }}>
            —
          </p>
        </div>
        <span
          aria-hidden="true"
          className="flex h-11 w-11 items-center justify-center rounded-xl text-lg font-semibold"
          style={{ background: "#F0FDF4", color: palette.green }}
        >
          {symbol}
        </span>
      </div>
      <p className="mt-3 text-xs" style={{ color: "var(--clinic-text-secondary, #475569)" }}>
        {note}
      </p>
    </article>
  );
}

const disabledStyle: CSSProperties = {
  background: "#4B5563",
  color: "#FFFFFF",
  opacity: 0.68,
  cursor: "not-allowed",
};

export default function InventoryDashboard() {
  return (
    <main
      className="min-h-screen p-4 sm:p-6 lg:p-8"
      style={{ background: "var(--clinic-bg, #F8FAFC)", color: "var(--clinic-text-primary, #0F172A)" }}
    >
      <div className="mx-auto max-w-7xl space-y-7">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "#E5E7EB", color: palette.muted }}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: palette.muted }} />
                NOT ACTIVE
              </span>
              <span className="text-xs" style={{ color: "var(--clinic-text-secondary, #475569)" }}>
                Preview layout · Inventory data is not connected
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Inventory</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 sm:text-base" style={{ color: "var(--clinic-text-secondary, #475569)" }}>
              A preview of the clinic inventory workspace. This section will become available after the team activates the inventory module.
            </p>
          </div>
          <button type="button" disabled aria-disabled="true" style={disabledStyle} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold shadow-sm">
            <span aria-hidden="true" className="text-lg leading-none">＋</span>
            Add item
            <span className="sr-only"> — unavailable while Inventory is inactive</span>
          </button>
        </header>

        <section
          aria-label="Inventory activation notice"
          className="flex flex-col gap-3 rounded-2xl border p-4 sm:flex-row sm:items-start"
          style={{ background: "#F9FAFB", borderColor: "#D1D5DB" }}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg" style={{ background: "#E5E7EB", color: palette.muted }} aria-hidden="true">
            i
          </span>
          <div>
            <h2 className="font-semibold" style={{ color: "#374151" }}>Inventory is temporarily disabled</h2>
            <p className="mt-1 text-sm leading-6" style={{ color: "#4B5563" }}>
              The navigation item and inventory actions should remain disabled until the team approves activation. No stock quantities, medicine records, or inventory values are being shown as real data on this screen.
            </p>
          </div>
        </section>

        <section aria-label="Inventory summary" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard label="Total items" note="Available after activation" symbol="▤" />
          <MetricCard label="Low-stock items" note="Threshold monitoring not active" symbol="↓" />
          <MetricCard label="Expiring soon" note="Expiry tracking not active" symbol="◷" />
          <MetricCard label="Inventory value" note="Value will appear when data is connected" symbol="$" />
        </section>

        <section
          className="overflow-hidden rounded-2xl border shadow-sm"
          style={{ background: "var(--clinic-surface, #FFFFFF)", borderColor: "var(--clinic-border, #E2E8F0)" }}
        >
          <div className="flex flex-col gap-4 border-b p-5 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "var(--clinic-border, #E2E8F0)" }}>
            <div>
              <h2 className="text-lg font-semibold">Inventory items</h2>
              <p className="mt-1 text-sm" style={{ color: "var(--clinic-text-secondary, #475569)" }}>The item list will appear here once this module is enabled.</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <label className="sr-only" htmlFor="inventory-search">Search inventory</label>
              <input
                id="inventory-search"
                type="search"
                disabled
                placeholder="Search items (unavailable)"
                className="h-10 min-w-56 rounded-xl border px-3 text-sm outline-none"
                style={{ background: "#F3F4F6", borderColor: "#D1D5DB", color: "#6B7280", cursor: "not-allowed" }}
              />
              <button type="button" disabled aria-disabled="true" className="h-10 rounded-xl border px-3 text-sm font-medium" style={{ background: "#F3F4F6", borderColor: "#D1D5DB", color: "#6B7280", cursor: "not-allowed" }}>
                Filters
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead style={{ background: "#F9FAFB", color: "#4B5563" }}>
                <tr>
                  <th className="px-5 py-3 font-semibold">Item</th>
                  <th className="px-5 py-3 font-semibold">Category</th>
                  <th className="px-5 py-3 font-semibold">Quantity</th>
                  <th className="px-5 py-3 font-semibold">Unit</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold">Last updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center">
                    <div className="mx-auto flex max-w-sm flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl" style={{ background: "#F0FDF4", color: palette.green }} aria-hidden="true">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5z" />
                          <path d="M4.5 7.8 12 12l7.5-4.2M12 12v8.5" />
                        </svg>
                      </div>
                      <h3 className="mt-4 text-base font-semibold">No inventory data yet</h3>
                      <p className="mt-2 text-sm leading-6" style={{ color: "var(--clinic-text-secondary, #475569)" }}>
                        This is an empty-state preview. Items, quantities, and status labels will populate here after the Inventory module is approved and connected to its API.
                      </p>
                      <span className="mt-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "#E5E7EB", color: palette.muted }}>
                        Module inactive
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t pt-4 text-xs sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "var(--clinic-border, #E2E8F0)", color: "var(--clinic-text-secondary, #475569)" }}>
          <span>Clinic Management System · Inventory preview</span>
          <span>Actions disabled until module activation</span>
        </footer>
      </div>
    </main>
  );
}
