import generalConsultationImage from "@/assets/images/ServicesSection.jpg";
import preventiveCareImage from "@/assets/images/ServicesSection1.jpg";
import followUpImage from "@/assets/images/ServicesSection2.jpg";
import specialistVisitsImage from "@/assets/images/ServicesSection3.jpg";

import { ButtonLink } from "@/components/atoms/ButtonLink";
import { SectionEyebrow } from "@/components/atoms/SectionEyebrow";
import { ServiceCard, type ServiceCardData } from "@/components/molecules/ServiceCard";

const services: ServiceCardData[] = [
  {
    title: "General Consultation",
    description: "Discuss your symptoms and get guidance for your next steps.",
    image: generalConsultationImage,
    imageAlt: "Healthcare professional in a clinical setting",
  },
  {
    title: "Preventive Care",
    description: "Stay informed with routine check-ups and health advice.",
    image: preventiveCareImage,
    imageAlt: "Preventive healthcare consultation",
  },
  {
    title: "Follow-up Visits",
    description: "Keep your care plan moving with a planned follow-up.",
    image: followUpImage,
    imageAlt: "Healthcare professional supporting a patient",
  },
  {
    title: "Specialist Visits",
    description: "Connect with a doctor for your specific care needs.",
    image: specialistVisitsImage,
    imageAlt: "Medical specialist in a clinic",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#f6f9fc] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <SectionEyebrow>Our services</SectionEyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.045em] text-[#102037] sm:text-4xl">
              Care that fits your needs
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Explore the services available at our clinic and choose the care you need.
            </p>
          </div>
          <ButtonLink href="#doctors" variant="text" arrow className="px-1">
            View all services
          </ButtonLink>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
