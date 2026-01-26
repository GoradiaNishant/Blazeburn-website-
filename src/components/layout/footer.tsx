import Link from 'next/link';
import { Mail, MapPin, Phone, Utensils, Twitter, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
            <Utensils className="h-8 w-8 text-primary" />
            <span className="text-2xl font-headline font-bold text-foreground">Blazeburn</span>
          </Link>
          <p className="text-muted-foreground">
            A symphony of flavors, grilled to perfection.
          </p>
          <p className="font-bold text-foreground">blazeburn.in</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-headline font-semibold">Contact Us</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>123 Culinary Lane, Foodie City, 12345</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:contact@blazeburn.in" className="hover:text-primary">contact@blazeburn.in</a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-headline font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-border pt-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Blazeburn. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
