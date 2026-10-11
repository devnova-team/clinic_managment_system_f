import Image from "next/image";

import trustedCareImage from "@/assets/images/ServicesSection.jpg";
import connectedServicesImage from "@/assets/images/ServicesSection1.jpg";
import clearStepsImage from "@/assets/images/ServicesSection2.jpg";

const items = [
  {
    image: trustedCareImage,
    imageAlt: "Healthcare professional supporting a patient",
    title: "Trusted care",
    description: "Thoughtful support at every visit",
    tone: "blue",
  },
  {
    image: connectedServicesImage,
    imageAlt: "Healthcare team working together",
    title: "Connected services",
    description: "Care information in one place",
    tone: "green",
  },
  {
    image: clearStepsImage,
    imageAlt: "Medical professional helping a patient",
    title: "Clear next steps",
    description: "Simple booking and follow-up",
    tone: "purple",
  },
];

export function TrustStrip() {
  return (
    <section aria-label="CarePoint benefits" className="bg-white">
      <div className="mx-auto grid max-w-7xl divide-y divide-slate-100 px-4 py-5 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8 lg:py-7">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-3 px-3 py-4 md:px-6 md:py-1"
          >
            <span
              className={`relative block size-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-sm ${
                item.tone === "blue"
                  ? "bg-sky-100"
                  : item.tone === "green"
                    ? "bg-emerald-100"
                    : "bg-violet-100"
              }`}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>

            <span className="min-w-0">
              <span className="block text-sm font-extrabold text-slate-800">
                {item.title}
              </span>
              <span className="mt-1 block text-xs leading-5 text-slate-500">
                {item.description}
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
