import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

import heroImage1 from '@assets/image_1762697872211.png';
import heroImage2 from '@assets/image_1762697899307.png';
import heroImage3 from '@assets/image_1762697942154.png';

import avatar1 from '@assets/generated_images/Indian_woman_portrait_headshot_ee4f7908.png';
import avatar2 from '@assets/generated_images/Indian_man_portrait_headshot_93412f40.png';
import avatar3 from '@assets/generated_images/Elderly_Indian_woman_headshot_9aa8c42c.png';
import avatar4 from '@assets/generated_images/Young_Indian_woman_headshot_f118dfba.png';

export default function Home() {
  const heroSlides = [
    {
      image: heroImage1,
      title: 'Empowering through education',
      subtitle: 'Building brighter futures for underprivileged children across communities',
      cta: 'Support education',
    },
    {
      image: heroImage2,
      title: 'Healthcare for all',
      subtitle: 'Providing essential medical care and wellness programs to those in need',
      cta: 'Learn more',
    },
    {
      image: heroImage3,
      title: 'Skills for tomorrow',
      subtitle: 'Empowering women and youth with vocational training and opportunities',
      cta: 'Get involved',
    },
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
        <Testimonials testimonials={testimonials} />
        <CallToAction onVolunteerClick={handleVolunteerClick} />
      </main>
      <Footer />
    </div>
  );
}
