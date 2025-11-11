import { ModernNavigation } from '@/components/ModernNavigation';
import { ModernHero } from '@/components/ModernHero';
import { AboutSection } from '@/components/AboutSection';
import { ProgramsSection } from '@/components/ProgramsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ModernNavigation />
      <main>
        <ModernHero />
        <AboutSection />
        <ProgramsSection />
        <TestimonialsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
