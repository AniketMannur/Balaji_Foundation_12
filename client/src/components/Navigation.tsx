import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/image_1762696322960.png';

interface NavigationProps {
  onDonateClick?: () => void;
}

export default function Navigation({ onDonateClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Shree Balaji Foundation" className="h-14 w-14" />
            <div>
              <div className="font-serif font-bold text-lg md:text-xl text-foreground">
                Shree Balaji Foundation
              </div>
              <div className="font-devanagari text-xs text-muted-foreground hidden md:block">
                सर्वे भवन्तु सुखिनः | सर्वे सन्तु निरामयाः
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                asChild
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
            <Button
              variant="default"
              className="ml-4"
              onClick={onDonateClick}
              data-testid="button-donate"
            >
              Donate Now
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  asChild
                  className="justify-start"
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  <a href={item.href} onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </a>
                </Button>
              ))}
              <Button
                variant="default"
                className="mt-2"
                onClick={() => {
                  onDonateClick?.();
                  setMobileMenuOpen(false);
                }}
                data-testid="button-mobile-donate"
              >
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
