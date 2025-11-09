import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import medicalBanner from '@assets/image_1762700142631.png';
import activitiesCollage from '@assets/image_1762700250649.png';

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6" data-testid="heading-gallery">
              Our Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A glimpse into our work and the communities we serve
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-16 space-y-16">
          <section>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
              Medical Services & Marathon Events
            </h2>
            <div className="grid grid-cols-1 gap-8">
              <Card className="overflow-hidden">
                <img 
                  src={medicalBanner} 
                  alt="Free Medical Services Provided By Shree Balaji Foundation In Different Public Marathon" 
                  className="w-full h-auto"
                  data-testid="img-medical-banner"
                />
              </Card>
              
              <Card className="overflow-hidden">
                <img 
                  src={activitiesCollage} 
                  alt="Medical Services at Marathons and Educational Lectures" 
                  className="w-full h-auto"
                  data-testid="img-activities-collage"
                />
              </Card>
            </div>
            
            <div className="mt-8 p-6 bg-muted/30 rounded-md">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Community Health Initiatives
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our foundation actively participates in public marathons across different cities, providing free medical services to runners and participants. From hydration stations to emergency medical care, our dedicated team ensures the safety and well-being of all marathon participants.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
              Educational & Awareness Programs
            </h2>
            <div className="p-6 bg-muted/30 rounded-md">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Empowering Through Knowledge
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We organize free lectures and awareness sessions for females and students at various schools, institutes, and self-help groups. These programs focus on health education, personal development, and skill building, creating lasting positive impact in communities.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Moments That Matter
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              These images showcase the dedication and compassion of our team, the resilience of the communities we serve, and the transformative power of our programs. From medical camps to educational initiatives, each photograph tells a story of hope, empowerment, and positive change.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
