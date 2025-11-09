import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Programs from '@/components/Programs';

import eduImage from '@assets/generated_images/Students_collaborative_learning_education_4ac6836b.png';
import healthImage from '@assets/generated_images/Healthcare_medical_checkup_scene_932d6355.png';
import womenImage from '@assets/generated_images/Women_empowerment_workshop_session_f072e1f6.png';
import communityImage from '@assets/generated_images/Community_development_project_teamwork_58719fa2.png';
import skillImage from '@assets/generated_images/Technical_skill_training_center_a91ec481.png';
import envImage from '@assets/generated_images/Environmental_awareness_tree_planting_ff02a864.png';

export default function ProgramsPage() {
  const programs = [
    {
      title: 'Quality Education',
      category: 'Education',
      description: 'Providing access to quality education and learning resources for underprivileged children.',
      image: eduImage,
    },
    {
      title: 'Healthcare Services',
      category: 'Healthcare',
      description: 'Free medical camps and healthcare services for communities in need.',
      image: healthImage,
    },
    {
      title: 'Women Empowerment',
      category: 'Empowerment',
      description: 'Skill development and empowerment programs for women and girls.',
      image: womenImage,
    },
    {
      title: 'Community Development',
      category: 'Community',
      description: 'Building sustainable communities through infrastructure and social programs.',
      image: communityImage,
    },
    {
      title: 'Skill Training',
      category: 'Training',
      description: 'Vocational training programs to enhance employability and self-reliance.',
      image: skillImage,
    },
    {
      title: 'Environmental Initiatives',
      category: 'Environment',
      description: 'Promoting environmental awareness and sustainable practices in communities.',
      image: envImage,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6" data-testid="heading-programs">
              Our Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Comprehensive initiatives designed to create sustainable impact across communities
            </p>
          </div>
        </div>

        <div className="py-8">
          <Programs programs={programs} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
