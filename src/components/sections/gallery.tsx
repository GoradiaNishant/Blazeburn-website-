import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryImageId = 'gallery-1';

export function GallerySection() {
  const image = PlaceHolderImages.find(p => p.id === galleryImageId);

  if (!image) return null;

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Our Atmosphere</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
            A warm and inviting space for every occasion.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="group relative overflow-hidden rounded-lg shadow-lg w-full max-w-4xl aspect-[4/3]">
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              data-ai-hint={image.imageHint}
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
