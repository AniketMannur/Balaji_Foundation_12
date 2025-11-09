import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

import heroImage1 from '@assets/image_1762697872211.png';
import heroImage2 from '@assets/image_1762697899307.png';
import heroImage3 from '@assets/image_1762697942154.png';

import eduImage from '@assets/generated_images/Students_collaborative_learning_education_4ac6836b.png';
import healthImage from '@assets/generated_images/Healthcare_medical_checkup_scene_932d6355.png';
import womenImage from '@assets/generated_images/Women_empowerment_workshop_session_f072e1f6.png';
import communityImage from '@assets/generated_images/Community_development_project_teamwork_58719fa2.png';
import skillImage from '@assets/generated_images/Technical_skill_training_center_a91ec481.png';
import envImage from '@assets/generated_images/Environmental_awareness_tree_planting_ff02a864.png';

import img1 from '@assets/generated_images/Children_cultural_educational_event_a6c74505.png';
import img2 from '@assets/generated_images/Volunteers_community_service_distribution_aee5a7dd.png';
import img3 from '@assets/generated_images/Community_foundation_event_gathering_3567fa03.png';
import img4 from '@assets/generated_images/Students_digital_technology_lab_fa3935ac.png';
import img5 from '@assets/generated_images/Foundation_volunteers_staff_group_c2460243.png';
import img6 from '@assets/generated_images/Rural_school_building_exterior_86924dde.png';
import img7 from '@assets/generated_images/Students_collaborative_learning_education_4ac6836b.png';
import img8 from '@assets/generated_images/Healthcare_medical_checkup_scene_932d6355.png';
import img9 from '@assets/generated_images/Women_empowerment_workshop_session_f072e1f6.png';

import avatar1 from '@assets/generated_images/Indian_woman_portrait_headshot_ee4f7908.png';
import avatar2 from '@assets/generated_images/Indian_man_portrait_headshot_93412f40.png';
import avatar3 from '@assets/generated_images/Elderly_Indian_woman_headshot_9aa8c42c.png';
import avatar4 from '@assets/generated_images/Young_Indian_woman_headshot_f118dfba.png';

export default function Home() {
  const heroSlides = [
    {
      image: heroImage1,
      title: 'Empowering Through Education',
      subtitle: 'Building brighter futures for underprivileged children across communities',
      cta: 'Support Education',
    },
    {
      image: heroImage2,
      title: 'Healthcare for All',
      subtitle: 'Providing essential medical care and wellness programs to those in need',
      cta: 'Learn More',
    },
    {
      image: heroImage3,
      title: 'Skills for Tomorrow',
      subtitle: 'Empowering women and youth with vocational training and opportunities',
      cta: 'Get Involved',
    },
  ];

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

  const galleryImages = [
    { url: img1, alt: 'Children participating in cultural educational event', category: 'Education' },
    { url: img2, alt: 'Volunteers distributing essentials to communities', category: 'Community' },
    { url: img3, alt: 'Community members at foundation event', category: 'Events' },
    { url: img4, alt: 'Students learning in digital technology lab', category: 'Education' },
    { url: img5, alt: 'Foundation volunteers and staff', category: 'Team' },
    { url: img6, alt: 'Rural school building supported by foundation', category: 'Education' },
    { url: img7, alt: 'Students engaged in collaborative learning', category: 'Education' },
    { url: img8, alt: 'Healthcare professionals providing medical care', category: 'Healthcare' },
    { url: img9, alt: 'Women empowerment workshop in progress', category: 'Empowerment' },
  ];

  const testimonials = [
    {
      quote: 'The foundation helped my daughter get quality education. Today she is pursuing her dreams as a teacher. We are forever grateful.',
      author: 'Priya Sharma',
      role: 'Parent & Beneficiary',
      image: avatar1,
    },
    {
      quote: 'Through the skill training program, I learned computer skills and found a job that changed my family\'s future. Thank you for believing in us.',
      author: 'Rajesh Kumar',
      role: 'Program Graduate',
      image: avatar2,
    },
    {
      quote: 'The healthcare camp saved my life. The doctors were caring and the treatment was excellent. This foundation is a blessing to our village.',
      author: 'Kamala Devi',
      role: 'Healthcare Recipient',
      image: avatar3,
    },
    {
      quote: 'Being part of the women empowerment program gave me confidence and skills. Now I run my own tailoring business and support my family.',
      author: 'Anjali Patel',
      role: 'Entrepreneur',
      image: avatar4,
    },
  ];

  const handleVolunteerClick = () => {
    console.log('Volunteer clicked - would open volunteer registration');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroCarousel slides={heroSlides} />
        <About />
        <Programs programs={programs} />
        <Gallery images={galleryImages} />
        <Testimonials testimonials={testimonials} />
        <CallToAction onVolunteerClick={handleVolunteerClick} />
      </main>
      <Footer />
    </div>
  );
}
