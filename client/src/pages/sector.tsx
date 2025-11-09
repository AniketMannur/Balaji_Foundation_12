import { useRoute } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { GraduationCap, Heart, Palette, Building2, Sprout, Briefcase, Users, HandHeart } from 'lucide-react';

const sectorData: Record<string, { title: string; icon: any; description: string; details: string[] }> = {
  education: {
    title: 'Education',
    icon: GraduationCap,
    description: 'Providing quality education and learning opportunities for underprivileged children across communities.',
    details: [
      'Free education programs for underprivileged children',
      'Scholarship programs for deserving students',
      'Digital learning initiatives',
      'Library and resource centers',
      'Teacher training and capacity building',
      'Career guidance and counseling',
    ],
  },
  'women-empowerment': {
    title: 'Women Empowerment',
    icon: Heart,
    description: 'Empowering women through skill development, education, and economic opportunities.',
    details: [
      'Vocational training programs',
      'Financial literacy workshops',
      'Self-help group formation',
      'Entrepreneurship development',
      'Leadership training',
      'Women\'s health awareness campaigns',
    ],
  },
  'art-and-culture': {
    title: 'Art and Culture',
    icon: Palette,
    description: 'Preserving and promoting traditional art forms and cultural heritage.',
    details: [
      'Cultural festivals and events',
      'Traditional art workshops',
      'Heritage preservation initiatives',
      'Support for local artisans',
      'Cultural exchange programs',
      'Documentation of cultural practices',
    ],
  },
  health: {
    title: 'Health',
    icon: HandHeart,
    description: 'Providing accessible healthcare services and promoting wellness in underserved communities.',
    details: [
      'Free medical camps and health check-ups',
      'Mobile healthcare units',
      'Medicine distribution programs',
      'Health awareness campaigns',
      'Preventive healthcare initiatives',
      'Maternal and child health programs',
    ],
  },
  'community-development': {
    title: 'Community Development',
    icon: Building2,
    description: 'Building sustainable and resilient communities through comprehensive development programs.',
    details: [
      'Infrastructure development',
      'Clean water initiatives',
      'Sanitation programs',
      'Community centers',
      'Youth engagement programs',
      'Sports and recreation facilities',
    ],
  },
  'environment-conservation': {
    title: 'Environment Conservation',
    icon: Sprout,
    description: 'Promoting environmental sustainability and conservation through awareness and action.',
    details: [
      'Tree plantation drives',
      'Waste management programs',
      'Environmental awareness campaigns',
      'Conservation of natural resources',
      'Renewable energy promotion',
      'Climate change adaptation initiatives',
    ],
  },
  'skill-development': {
    title: 'Skill Development',
    icon: Briefcase,
    description: 'Equipping individuals with market-relevant skills for better employment opportunities.',
    details: [
      'Technical and vocational training',
      'Computer and IT skills',
      'Employability enhancement programs',
      'Industry partnerships for placements',
      'Certification courses',
      'Entrepreneurship training',
    ],
  },
  'social-welfare': {
    title: 'Social Welfare',
    icon: Users,
    description: 'Comprehensive welfare programs addressing various social needs and challenges.',
    details: [
      'Food distribution programs',
      'Elderly care services',
      'Support for differently-abled',
      'Disaster relief and rehabilitation',
      'Legal aid and counseling',
      'Child protection initiatives',
    ],
  },
};

export default function SectorPage() {
  const [, params] = useRoute('/sectors/:sector');
  const sectorKey = params?.sector || '';
  const sector = sectorData[sectorKey];

  if (!sector) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Sector Not Found</h1>
            <p className="text-muted-foreground">The sector you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = sector.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground" data-testid="heading-sector">
                {sector.title}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {sector.description}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-16">
          <h2 className="text-3xl font-serif font-bold mb-8">Our Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {sector.details.map((detail, index) => (
              <Card key={index} className="p-6" data-testid={`card-initiative-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-foreground">{detail}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
