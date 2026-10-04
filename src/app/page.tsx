import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-sm font-semibold text-sky-600">Clinic Management System</p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Frontend foundation is ready</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Next.js App Router + Tailwind CSS + shared component structure for the Dev 2 track.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card title="Design System">
            <p className="text-sm text-slate-600">Tokens and reusable UI components live under src/components and src/styles.</p>
          </Card>
          <Card title="Team Structure">
            <p className="text-sm text-slate-600">Feature folders are separated so each developer can work independently.</p>
          </Card>
        </div>

        <div className="mt-6 flex gap-3">
          <Button>Primary Action</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </div>
    </main>
  );
}
