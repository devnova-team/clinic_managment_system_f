import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-[272px_minmax(0,1fr)] max-[900px]:grid-cols-1">
      <Sidebar />
      <main className="flex min-w-0 flex-col gap-[22px] px-6 py-[30px] pb-12 max-[640px]:px-4">
        {children}
      </main>
    </div>
  );
}