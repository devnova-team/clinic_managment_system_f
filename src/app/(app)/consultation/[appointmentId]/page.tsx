import ConsultationView from "@/components/organisms/consultation/ConsultationView";

export default async function ConsultationPage({
  params,
}: {
  params: Promise<{ appointmentId: string }>;
}) {
  const { appointmentId } = await params;
  return <ConsultationView appointmentId={appointmentId} />;
}