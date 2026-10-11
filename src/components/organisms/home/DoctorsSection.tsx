
"use client";

import { useState } from "react";
import { SectionEyebrow } from "@/components/atoms/SectionEyebrow";
import { LineIcon } from "@/components/atoms/LineIcon";
import { DoctorCard, type DoctorCardData } from "@/components/molecules/DoctorCard";
import doctorImage1 from "@/assets/images/HeroSection.jpg";
import doctorImage from "@/assets/images/ServicesSection.jpg";
import doctorImage2 from "@/assets/images/ServicesSection2.jpg";

const doctors: DoctorCardData[] = [
  {
    name: "Dr. Sarah Ahmed",
    specialty: "General Medicine",
    description: "Consultations and ongoing health guidance.",
    days: ["Mon · 10:30", "Tue · 12:00"],
    tone: "blue",
    image: doctorImage1,
  },
  {
    name: "Dr. Omar Hassan",
    specialty: "Family Health",
    description: "Care for individuals and families at every stage.",
    days: ["Wed · 09:30", "Thu · 11:00"],
    tone: "green",
    image: doctorImage2,
  },
  {
    name: "Dr. Lina Mostafa",
    specialty: "Preventive Care",
    description: "Helping you stay informed and plan your care.",
    days: ["Fri · 10:00", "Sat · 12:30"],
    tone: "purple",
    image: doctorImage,
  },
  {
    name: "Dr. Adam Farouk",
    specialty: "Internal Medicine",
    description: "Personalized care and clear treatment guidance.",
    days: ["Sun · 11:00", "Tue · 14:00"],
    tone: "blue",
    image: doctorImage,
  },
];

export function DoctorsSection() {
  const [start, setStart] = useState(0);

  const visibleDoctors = Array.from(
    { length: 3 },
    (_, index) => doctors[(start + index) % doctors.length]
  );

  return (
    <section id="doctors" className="bg-[#f6f9fc] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <SectionEyebrow>Our doctors</SectionEyebrow>

            <h2 className="text-3xl font-extrabold tracking-[-0.045em] text-[#102037] sm:text-4xl">
              Meet the people behind your care
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Explore doctor profiles and choose a time that works for you.
            </p>
          </div>

          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              aria-label="Previous doctors"
              onClick={() =>
                setStart((current) => (current - 1 + doctors.length) % doctors.length)
              }
              className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-sky-500 hover:text-sky-600"
            >
              <LineIcon name="chevron-left" />
            </button>

            <button
              type="button"
              aria-label="Next doctors"
              onClick={() =>
                setStart((current) => (current + 1) % doctors.length)
              }
              className="grid size-10 place-items-center rounded-full bg-sky-600 text-white transition hover:bg-sky-700"
            >
              <LineIcon name="chevron-right" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {visibleDoctors.map((doctor) => (
            <DoctorCard key={doctor.name} doctor={doctor} />
          ))}
        </div>

        <p className="mt-5 text-center text-[10px] text-slate-400">
          Doctor names and appointment times are illustrative placeholders for the UI design.
        </p>
      </div>
    </section>
  );
}
