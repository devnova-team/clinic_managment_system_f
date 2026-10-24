import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { LineIcon } from "@/components/atoms/LineIcon";

export type ServiceCardData = {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
};

export function ServiceCard({ service }: { service: ServiceCardData }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[var(--clinic-border)]/80 bg-[var(--clinic-surface)] p-3.5 shadow-[0_4px_14px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.1)]">
      <div className="relative h-[150px] overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
        <h3 className="text-[15px] font-extrabold tracking-[-0.02em] text-[var(--clinic-text-primary)]">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-xs leading-5 text-[var(--clinic-text-secondary)]">
          {service.description}
        </p>
        <Link
          href="/login"
          className="mt-4 inline-flex w-fit items-center gap-1 text-xs font-bold text-[var(--clinic-primary-hover)] transition group-hover:gap-2"
        >
          Learn more <LineIcon name="arrow-right" size={13} />
        </Link>
      </div>
    </article>
  );
}
