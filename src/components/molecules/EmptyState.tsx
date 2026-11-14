import type { ReactNode } from "react";
import Card from "@/components/atoms/Card";
import Title from "@/components/atoms/Title";

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <Card className="flex flex-col items-center gap-2 py-10 text-center">
      <Title size="lg">{title}</Title>
      {description && <p className="text-muted">{description}</p>}
      {action && <div className="mt-2">{action}</div>}
    </Card>
  );
}