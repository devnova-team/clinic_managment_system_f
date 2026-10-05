import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] p-6 text-[var(--color-text-primary)] md:p-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <header>
          <p className="mb-2 text-sm font-semibold text-[var(--color-primary-hover)]">
            Clinic Management System
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Design System — Button
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--color-text-secondary)]">
            First shared component for Dev 2. The button uses semantic design tokens instead of hard-coded colors.
          </p>
        </header>

        <Card title="Button variants">
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </div>
        </Card>

        <Card title="Button sizes">
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </Card>

        <Card title="Clinic statuses">
          <div className="flex flex-wrap gap-2">
            <Badge variant="confirmed">Confirmed</Badge>
            <Badge variant="completed">Completed</Badge>
            <Badge variant="cancelled">Cancelled</Badge>
            <Badge variant="pending">Pending</Badge>
            <Badge variant="suspended">Suspended</Badge>
          </div>
        </Card>
      </div>
    </main>
  );
}
