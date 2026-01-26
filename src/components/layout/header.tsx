"use client";

import Link from 'next/link';
import { Menu, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
          <Utensils className="h-8 w-8 text-primary" />
          <span className="text-2xl font-headline font-bold text-foreground">Blazeburn Bistro</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
          <Button asChild className="font-bold bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#contact">Book a Table</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 p-6">
                <Link href="/" className="flex items-center gap-2">
                  <Utensils className="h-6 w-6 text-primary" />
                  <span className="text-xl font-headline font-bold">Blazeburn Bistro</span>
                </Link>
                <nav className="grid gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="font-bold bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="#contact">Book a Table</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
