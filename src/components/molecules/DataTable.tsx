import type { ReactNode } from "react";
import Card from "@/components/atoms/Card";
import { cn } from "@/lib/cn";

export interface Column<T> {
  key: string;
  header: ReactNode;
  cell: (row: T) => ReactNode;
  align?: "start" | "end";
}

interface DataTableProps<T> {
  columns: Column<T>[];
  rows: T[];
  getRowKey: (row: T) => string;
  loading?: boolean;
  loadingText?: string;
  className?: string;
}

const TH = "whitespace-nowrap border-b border-line px-3 py-2.5 text-[11.5px] font-bold uppercase tracking-[.1em] text-muted [dir=rtl]:tracking-normal";
const TD = "border-b border-line px-3 py-3 align-middle last:border-0";

export default function DataTable<T>({
  columns,
  rows,
  getRowKey,
  loading = false,
  loadingText = "…",
  className,
}: DataTableProps<T>) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c.key} className={cn(TH, c.align === "end" ? "text-end" : "text-start")}>
                  {c.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="py-6 text-center text-muted">
                  {loadingText}
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr key={getRowKey(row)}>
                  {columns.map((c) => (
                    <td key={c.key} className={cn(TD, c.align === "end" && "text-end")}>
                      {c.cell(row)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}