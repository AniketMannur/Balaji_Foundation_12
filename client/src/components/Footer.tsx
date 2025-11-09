import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logoImage from '@assets/image_1762696322960.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Programs', href: '#programs' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const programs = [
    { label: 'Education', href: '#programs' },
    { label: 'Healthcare', href: '#programs' },
    { label: 'Women Empowerment', href: '#programs' },
    { label: 'Community Development', href: '#programs' },
  ];

  return (
    <footer id="contact" className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Shree Balaji Foundation" className="h-12 w-12" />
              <div className="font-serif font-bold text-lg text-foreground">
                Shree Balaji
                <br />
                Foundation
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Empowering communities through education, healthcare, and sustainable development.
            </p>
            <div className="font-devanagari text-sm text-primary">
              सर्वे भवन्तु सुखिनः
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Programs</h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.label}>
                  <a
                    href={program.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-program-${program.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>info@shreebalajifd.org</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => console.log('Facebook clicked')}
                data-testid="button-social-facebook"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => console.log('Twitter clicked')}
                data-testid="button-social-twitter"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => console.log('Instagram clicked')}
                data-testid="button-social-instagram"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => console.log('LinkedIn clicked')}
                data-testid="button-social-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Shree Balaji Foundation. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
