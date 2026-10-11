import { AboutAppIllustration } from "@/components/atoms/HealthcareIllustrations";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { SectionEyebrow } from "@/components/atoms/SectionEyebrow";
import { BenefitItem } from "@/components/molecules/BenefitItem";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="mx-auto w-full max-w-[510px]">
          <AboutAppIllustration />
        </div>
        <div className="max-w-xl">
          <SectionEyebrow>About CarePoint</SectionEyebrow>
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#102037] sm:text-4xl">Healthcare, made<br className="hidden sm:block" /> more approachable.</h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            We bring clinic services, doctors, and appointment booking together in one clear, convenient experience. Our goal is to make each step — from finding care to managing a visit — easier for patients and clinic teams.
          </p>
          <div className="mt-6 grid gap-4">
            <BenefitItem icon="check" title="A clear path to finding and booking care" description="Find the right service and understand your next step." tone="green" />
            <BenefitItem icon="plus" title="Useful information in one place" description="See doctors, services, and appointment details together." tone="blue" />
            <BenefitItem icon="shield" title="A patient-first clinic experience" description="Simple, thoughtful steps throughout your visit." tone="purple" />
          </div>
          <ButtonLink href="#doctors" arrow className="mt-7">Meet Our Doctors</ButtonLink>
        </div>
      </div>
    </section>
  );
}
