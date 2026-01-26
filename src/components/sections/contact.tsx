"use client";

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail, MapPin, Phone } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactSection() {
  const { toast } = useToast();
  const mapImage = PlaceHolderImages.find(p => p.id === 'map-image');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll be in touch soon. (This is a demo and does not send emails).",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
            We'd love to hear from you. Make a reservation or send us a message.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
             <div className="space-y-4">
              <h3 className="text-2xl font-headline font-semibold">Contact Information</h3>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>123 Culinary Lane, Foodie City, 12345</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <a href="mailto:contact@blazeburn.in" className="hover:text-primary">contact@blazeburn.in</a>
                </li>
              </ul>
            </div>
             <div className="space-y-4">
               <h3 className="text-2xl font-headline font-semibold">Opening Hours</h3>
               <div className="text-lg text-muted-foreground grid grid-cols-[auto,1fr] gap-x-4 gap-y-2">
                 <span>Mon - Fri</span><span>11:30am - 10:00pm</span>
                 <span>Sat - Sun</span><span>10:00am - 11:00pm</span>
               </div>
            </div>
            {mapImage && (
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="block relative w-full aspect-video rounded-lg overflow-hidden shadow-lg group">
                    <Image
                        src={mapImage.imageUrl}
                        alt="Restaurant location on map"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={mapImage.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-lg font-bold">View on Google Maps</span>
                    </div>
                </a>
            )}
          </div>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-lg shadow-lg">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Your Message or Reservation Request</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your inquiry..." className="min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full font-bold text-lg bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
