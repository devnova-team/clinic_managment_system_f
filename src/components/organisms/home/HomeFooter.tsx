import Link from "next/link";
import { CarePointLogo } from "@/components/atoms/CarePointLogo";

const footerGroups = [
  { title: "Explore", links: [{ label: "Services", href: "#services" }, { label: "Our Doctors", href: "#doctors" }, { label: "About Us", href: "#about" }] },
  { title: "Patient Access", links: [{ label: "Log in", href: "/login" }, { label: "Book an Appointment", href: "/login" }, { label: "Public Tracking", href: "/tracking" }] },
  { title: "Contact", links: [{ label: "Clinic information", href: "#about" }, { label: "Opening hours", href: "#contact" }, { label: "Get in touch", href: "mailto:hello@carepoint.example" }] },
];

export function HomeFooter() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-[#f6f9fc]">
      <div className="mx-auto max-w-7xl px-4 pb-5 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1fr]">
          <div>
            <CarePointLogo />
            <p className="mt-4 max-w-xs text-xs leading-5 text-slate-500">A clearer, more convenient way to connect with care.</p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-extrabold text-slate-800">{group.title}</h2>
              <ul className="mt-3 space-y-2.5">
                {group.links.map((link) => <li key={link.label}><Link href={link.href} className="text-xs text-slate-500 transition hover:text-sky-700">{link.label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-4 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CarePoint Clinic. All rights reserved.</p>
          <div className="flex gap-4"><Link href="#home" className="hover:text-slate-600">Home</Link><Link href="#services" className="hover:text-slate-600">Services</Link><Link href="#about" className="hover:text-slate-600">About</Link></div>
        </div>
      </div>
    </footer>
  );
}
