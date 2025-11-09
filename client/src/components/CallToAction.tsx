import { Button } from '@/components/ui/button';
import ctaImage from '@assets/generated_images/Community_foundation_event_gathering_3567fa03.png';

interface CallToActionProps {
  onDonateClick?: () => void;
  onVolunteerClick?: () => void;
}

export default function CallToAction({ onDonateClick, onVolunteerClick }: CallToActionProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40 z-10" />
      <img
        src={ctaImage}
        alt="Join our mission"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Join Our Mission
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Together, we can create lasting change and build a brighter future for communities in need.
          Your support makes a real difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-lg backdrop-blur-md bg-primary/90 hover:bg-primary border border-primary-border"
            onClick={onDonateClick}
            data-testid="button-cta-donate"
          >
            Donate Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={onVolunteerClick}
            data-testid="button-cta-volunteer"
          >
            Become a Volunteer
          </Button>
        </div>
      </div>
    </section>
  );
}
