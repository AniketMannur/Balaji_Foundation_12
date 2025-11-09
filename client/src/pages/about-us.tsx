import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import aboutImage from '@assets/download_1762698540874.png';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6" data-testid="heading-about">
              About Shree Balaji Foundation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Committed to making a positive impact on society since 2015
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-16">
          <Card className="overflow-hidden">
            <img 
              src={aboutImage} 
              alt="Shree Balaji Foundation Description" 
              className="w-full h-auto"
              data-testid="img-foundation-description"
            />
          </Card>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-2xl font-serif font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To make a positive impact on society through our multifaceted approach focusing on Health/Medical, Education and Skill Development, Woman Empowerment, Community Development, and Social Development.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-serif font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To create lasting change by addressing critical needs in our communities and uplifting those who need it most through transformative projects.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-serif font-bold mb-4">Registered Organization</h2>
              <p className="text-muted-foreground">
                Shree Balaji Foundation is a registered organization under various acts, including 12A, 80G, and CSR-1 & Niti Aayog. We have consistently filed our ITRs for the past 8 years and undergone annual audit reports, ensuring transparency and accountability.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-serif font-bold mb-4">Support Our Work</h2>
              <p className="text-muted-foreground">
                By supporting Shree Balaji Foundation, your CSR funds/donations will contribute directly to transformative projects that uplift communities and create lasting change.
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
