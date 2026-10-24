import Image from "next/image";
import heroDoctor from "@/assets/images/HeroSection0.png";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { LineIcon } from "@/components/atoms/LineIcon";
import { SectionEyebrow } from "@/components/atoms/SectionEyebrow";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#effaff] via-[#f3fbff] to-[#effcf7]">
      <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-sky-100/70 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-32 right-[28%] size-72 rounded-full bg-emerald-100/55 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-4 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.94fr] lg:gap-12 lg:px-8 lg:py-12 xl:py-16">
        <div className="relative z-10 max-w-xl py-2">
          <SectionEyebrow>Care that starts with you</SectionEyebrow>
          <h1 className="max-w-[620px] text-[clamp(2.65rem,5vw,4.4rem)] font-extrabold leading-[1.04] tracking-[-0.055em] text-[#101d31]">
            Your health,<br />our priority.
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Thoughtful care, trusted doctors, and a simpler way to manage every visit — all in one place.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="#doctors" arrow>Find a Doctor</ButtonLink>
            <ButtonLink href="#services" variant="secondary">Explore Services</ButtonLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-slate-700">
            <span className="inline-flex items-center gap-2"><span className="grid size-5 place-items-center rounded-full bg-emerald-100 text-emerald-700"><LineIcon name="check" size={13} /></span>Patient-first approach</span>
            <span className="inline-flex items-center gap-2"><span className="grid size-5 place-items-center rounded-full bg-sky-100 text-sky-700"><LineIcon name="plus" size={13} /></span>Easy appointment booking</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[570px] lg:justify-self-end">
          <div className="relative mx-auto w-full max-w-[480px] lg:justify-self-end">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200/70">
              <Image
                src={heroDoctor}
                alt="Doctor at CarePoint Clinic"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
