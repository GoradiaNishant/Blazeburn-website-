import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { MenuSection } from '@/components/sections/menu';
import { GallerySection } from '@/components/sections/gallery';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
