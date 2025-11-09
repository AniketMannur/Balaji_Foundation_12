import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Heart, GraduationCap, Sprout, Building2, Award } from 'lucide-react';

export default function Impact() {
  const impactStats = [
    {
      icon: Users,
      title: 'Lives Impacted',
      value: '50,000+',
      description: 'People directly benefited from our programs',
    },
    {
      icon: GraduationCap,
      title: 'Students Educated',
      value: '15,000+',
      description: 'Children and youth provided with quality education',
    },
    {
      icon: Heart,
      title: 'Healthcare Services',
      value: '25,000+',
      description: 'Free medical checkups and treatments provided',
    },
    {
      icon: Award,
      title: 'Skill Training',
      value: '8,000+',
      description: 'Women and youth trained in vocational skills',
    },
    {
      icon: Building2,
      title: 'Communities Served',
      value: '100+',
      description: 'Villages and urban areas reached',
    },
    {
      icon: Sprout,
      title: 'Environmental Projects',
      value: '50+',
      description: 'Tree plantation and conservation initiatives',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6" data-testid="heading-impact">
              Our Impact
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              8 years of transforming lives and building stronger communities
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} data-testid={`card-impact-${index}`}>
                  <CardHeader className="gap-2">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{stat.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
              Making a Difference Since 2015
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground">
                With a legacy dating back to 2015, Shree Balaji Foundation has been committed to making a positive impact on society. As a registered organization under various acts, including 12A, 80G, and CSR-1 & Niti Aayog, we have consistently filed our ITRs for the past 8 years and undergone annual audit reports, ensuring transparency and accountability.
              </p>
              <p className="text-muted-foreground mt-4">
                Our multifaceted approach focuses on Health/Medical, Education and Skill Development, Woman Empowerment, Community Development, and Social Development, addressing critical needs in these areas. Through the generous support of CSR funds and donations, we continue to implement transformative projects that uplift communities and create lasting change.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
