import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const menuItems = [
  { id: 'menu-item-1', name: 'Ember-Kissed Ribeye', description: '300g Prime ribeye, grilled to perfection, served with asparagus and potato gratin.', price: '32.50', imageId: 'menu-item-1' },
  { id: 'menu-item-2', name: 'Charred Salmon Delight', description: 'Pan-seared salmon with a crispy skin, on a bed of quinoa salad and citrus vinaigrette.', price: '26.00', imageId: 'menu-item-2' },
  { id: 'menu-item-3', name: 'Volcanic Chocolate Molten', description: 'Decadent dark chocolate cake with a gooey molten center, served with vanilla bean ice cream.', price: '12.00', imageId: 'menu-item-3' },
  { id: 'menu-item-4', name: 'The Blazeburn Burger', description: 'Wagyu beef patty, smoked gouda, caramelized onions, and our secret blaze sauce on a brioche bun.', price: '19.50', imageId: 'menu-item-4' },
  { id: 'menu-item-5', name: 'Hearth-Fired Pasta', description: 'Handmade pappardelle with a slow-cooked wild mushroom ragu and parmesan.', price: '22.00', imageId: 'menu-item-5' },
  { id: 'menu-item-6', name: 'Spicy Inferno Soup', description: 'A hearty and spicy tomato-based soup with roasted vegetables and a hint of chili.', price: '9.50', imageId: 'menu-item-6' },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Our Menu</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
            Crafted with passion, cooked with fire.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => {
            const image = PlaceHolderImages.find(p => p.id === item.imageId);
            return (
              <Card key={item.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl bg-card">
                {image && (
                  <div className="overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={item.name}
                      width={600}
                      height={400}
                      className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-headline text-2xl font-semibold leading-tight">{item.name}</h3>
                        <p className="text-xl font-body font-semibold text-primary whitespace-nowrap ml-4">${item.price}</p>
                    </div>
                    <p className="text-muted-foreground flex-grow mt-2">{item.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
