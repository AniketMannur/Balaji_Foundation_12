import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import galleryCollage from '@assets/download_1762698543449.png';

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

        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-16">
          <Card className="overflow-hidden">
            <img 
              src={galleryCollage} 
              alt="Shree Balaji Foundation Activities Collage" 
              className="w-full h-auto"
              data-testid="img-gallery-collage"
            />
          </Card>

          <div className="mt-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Moments That Matter
            </h2>
            <p className="text-lg text-muted-foreground">
              These images showcase the dedication and compassion of our team, the resilience of the communities we serve, and the transformative power of our programs. From medical camps to educational initiatives, each photograph tells a story of hope, empowerment, and positive change.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
