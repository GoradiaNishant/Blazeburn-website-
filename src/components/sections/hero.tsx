import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

export function HeroSection() {
  if (!heroImage) return null;

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-white">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        data-ai-hint={heroImage.imageHint}
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center space-y-6 px-4">
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight">
          Blazeburn Bistro
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-primary-foreground/90">
          Where every meal is a celebration of fire and flavor.
        </p>
        <Button size="lg" asChild className="font-bold text-lg bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="#menu">Explore Our Menu</Link>
        </Button>
      </div>
    </section>
  );
}
