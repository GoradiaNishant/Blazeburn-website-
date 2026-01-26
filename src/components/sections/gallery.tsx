import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryImageIds = ['gallery-1', 'gallery-2', 'gallery-3', 'gallery-4', 'gallery-5', 'gallery-6'];

export function GallerySection() {
  const galleryImages = galleryImageIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Our Atmosphere</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
            A warm and inviting space for every occasion.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => image && (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-lg shadow-lg
                ${index === 0 ? 'col-span-2 row-span-2' : ''}
                ${index === 3 || index === 4 ? 'col-span-2' : ''}
              `}
            >
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
