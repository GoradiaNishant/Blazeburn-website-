"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { BlazeburnIcon } from '@/components/icons/blazeburn-icon';
import { ThemeToggle } from '../theme-toggle';

const navLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    setIsMounted(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
          <BlazeburnIcon className="h-10 w-10 text-primary" />
          <div>
            <span className="text-2xl font-headline font-bold text-foreground">Blazeburn</span>
            <p className="text-xs text-muted-foreground -mt-1 tracking-wider uppercase">Deliciously Crafted</p>
          </div>
        </Link>
        <nav className="hidden items-center justify-between gap-8 md:flex flex-1">
          <div className="flex items-center gap-6 mx-auto">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button asChild className="font-bold bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#contact">Book a Table</Link>
            </Button>
            <ThemeToggle />
          </div>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          {isMounted && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0">
                <SheetHeader className="p-4 border-b flex-row justify-between items-center">
                   <Link href="/" className="flex items-center gap-2">
                      <BlazeburnIcon className="h-8 w-8 text-primary" />
                      <SheetTitle><span className="text-xl font-headline font-bold">Blazeburn</span></SheetTitle>
                    </Link>
                  <ThemeToggle />
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <nav className="flex flex-col gap-4 p-4">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary">
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto p-4">
                    <Button asChild className="w-full font-bold bg-accent text-white hover:bg-accent/90">
                      <Link href="#contact">Book a Table</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
