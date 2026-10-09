
export default function Home() {
  return (
    <main className=" p-6 ">
      <h1 className="mb-2 text-sm font-semibold text-[var(--color-primary-hover)] text-center">
        Clinic Management System
      </h1>
      <button
        type="button"
        className="bg-[var(--color-primary-hover)] text-white px-4 py-2 rounded-md hover:bg-[var(--color-primary)] transition-colors"
      >
        Get Started
      </button>
    </main>
  );
}
