import { PageLayout } from '@/components/PageLayout';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Star } from 'lucide-react';
import { useState } from 'react';
import { ScrollNavigation } from '@/components/ScrollNavigation';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Message Sent Successfully!',
          description: 'Thank you for contacting us. We will get back to you soon.',
        });
        e.currentTarget.reset();
        setRating(0);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: 'Failed to Send Message',
        description: 'Please try again or contact us directly via email or phone.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@shreebalajifoundation.org.in',
      description: 'Send us an email anytime',
      link: 'mailto:contact@shreebalajifoundation.org.in',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8087678977, 8459485202',
      description: 'Mon-Fri from 9am to 6pm',
      link: 'tel:+918087678977',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Pune, Maharashtra, India',
      description: 'Visit our office',
      link: 'https://www.google.com/maps/place/Pune,+Maharashtra',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Mon-Fri: 9:00 AM - 6:00 PM',
      description: 'Saturday: 10:00 AM - 4:00 PM',
    },
  ];

  return (
    <PageLayout>
      <PageHero
        title="Get In Touch"
        subtitle="We'd Love to Hear From You"
        description="Have questions about our programs? Want to volunteer or donate? Reach out to us and we'll get back to you as soon as possible."
        tagline="Contact Us"
      />

      <AnimatedSection background="white">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Fill out the form below and we'll respond within 24 hours.
            </p>

            <Card className="p-8 border-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''} />
                <input type="hidden" name="subject" value="New Contact Form Submission from Shree Balaji Foundation Website" />
                <input type="hidden" name="from_name" value="Shree Balaji Foundation Website" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-900 dark:text-white">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-900 dark:text-white">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-900 dark:text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      data-testid="input-phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject_field" className="text-gray-900 dark:text-white">
                      Subject *
                    </Label>
                    <Input
                      id="subject_field"
                      name="subject_field"
                      placeholder="Subject of your message"
                      required
                      data-testid="input-subject"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-gray-900 dark:text-white">
                    Category *
                  </Label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    data-testid="select-category"
                  >
                    <option value="">Select a category</option>
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donations</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-900 dark:text-white">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={6}
                    required
                    data-testid="input-message"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-900 dark:text-white">
                    Rate Your Experience (Optional)
                  </Label>
                  <input type="hidden" name="rating" value={rating} />
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="hover-elevate active-elevate-2 rounded-md p-1"
                        data-testid={`button-rating-${star}`}
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= rating
                              ? 'fill-secondary text-secondary'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-900 dark:text-white font-medium mb-1">{info.value}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{info.description}</p>
                  </div>
                </div>
              );
              
              return (
                <Card
                  key={info.title}
                  className={`p-6 hover-elevate opacity-0 animate-fade-in-up delay-${
                    (index + 2) * 100
                  }`}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.icon === MapPin ? '_blank' : undefined}
                      rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                      className="block"
                      data-testid={`link-contact-${info.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Card>
              );
            })}

            <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-white mt-8">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
              <p className="text-white/90 mb-6">
                For urgent matters or immediate support, please call us directly during business hours
                or send us an email with "URGENT" in the subject line.
              </p>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/20"
                onClick={() => window.location.href = 'tel:+918087678977'}
                data-testid="button-urgent-contact"
              >
                Call Now
              </Button>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection background="gray" delay={100}>
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join us in creating positive change. Whether you want to volunteer, donate, or partner with
            us, we welcome your support in making a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/20"
            >
              Become a Volunteer
            </Button>
          </div>
        </div>
      </AnimatedSection>
      <ScrollNavigation />
    </PageLayout>
  );
}
