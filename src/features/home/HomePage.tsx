import { HomeHeader } from "@/components/organisms/home/HomeHeader";
import { HeroSection } from "@/components/organisms/home/HeroSection";
import { TrustStrip } from "@/components/organisms/home/TrustStrip";
import { ServicesSection } from "@/components/organisms/home/ServicesSection";
import { AboutSection } from "@/components/organisms/home/AboutSection";
import { DoctorsSection } from "@/components/organisms/home/DoctorsSection";
import { BookingCta } from "@/components/organisms/home/BookingCta";
import { HomeFooter } from "@/components/organisms/home/HomeFooter";

/** Public landing page: Home + About Us combined per the latest project brief. */
export function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[var(--clinic-text-primary)]">
      <HomeHeader />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <AboutSection />
      <DoctorsSection />
      <BookingCta />
      <HomeFooter />
    </main>
  );
}
