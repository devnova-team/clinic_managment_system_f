import { ButtonLink } from "@/components/atoms/ButtonLink";
import { SectionEyebrow } from "@/components/atoms/SectionEyebrow";

export function BookingCta() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#123a56] px-6 py-9 sm:px-10 sm:py-12 lg:px-14">
        <div className="pointer-events-none absolute -right-5 -top-16 size-48 rounded-full bg-sky-500/25" />
        <div className="pointer-events-none absolute -bottom-20 right-14 size-44 rounded-full bg-emerald-400/20" />
        <div className="relative max-w-2xl">
          <SectionEyebrow light>Your next step starts here</SectionEyebrow>
          <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">Ready to book your appointment?</h2>
          <p className="mt-3 text-sm leading-6 text-sky-100/85">Choose a doctor, view available times, and plan your visit.</p>
          <ButtonLink href="/login" variant="primary" arrow className="mt-5">Book an Appointment</ButtonLink>
        </div>
      </div>
    </section>
  );
}
