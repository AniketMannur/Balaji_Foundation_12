import { PageLayout } from '@/components/PageLayout';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@shreebalajifoundation.org',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 XXXXX XXXXX',
      description: 'Mon-Fri from 9am to 6pm',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Maharashtra, India',
      description: 'Visit our office',
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-900 dark:text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  className="border-gray-300"
                  data-testid="input-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-900 dark:text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="border-gray-300"
                  data-testid="input-email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-900 dark:text-white">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="border-gray-300"
                  data-testid="input-phone"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-900 dark:text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  className="border-gray-300"
                  data-testid="input-message"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600"
                data-testid="button-submit"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={info.title}
                  className={`p-6 hover-elevate opacity-0 animate-fade-in-up delay-${
                    (index + 2) * 100
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
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
                </Card>
              );
            })}

            <Card className="p-8 bg-gradient-to-br from-teal-500 to-cyan-500 text-white mt-8">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
              <p className="text-white/90 mb-6">
                For urgent matters or immediate support, please call us directly during business hours
                or send us an email with "URGENT" in the subject line.
              </p>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/20"
                data-testid="button-urgent-contact"
              >
                Call Now
              </Button>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection background="gray" delay={100}>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join us in creating positive change. Whether you want to volunteer, donate, or partner with
            us, we welcome your support in making a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
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
    </PageLayout>
  );
}
