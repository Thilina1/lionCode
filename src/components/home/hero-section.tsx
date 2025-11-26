import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 container px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 gap-8 items-center">
          <div className="space-y-4 text-center md:text-left">
            <p className="font-headline text-sm tracking-widest text-primary uppercase">CUTTING-EDGE</p>
            <h1 className="font-headline text-4xl font-black tracking-tight sm:text-5xl md:text-6xl text-white">
              IT SOLUTIONS
            </h1>
             <h2 className="font-headline text-4xl font-black tracking-tight sm:text-5xl md:text-6xl text-primary">
              FOR ALL BUSINESSES
            </h2>
            <div className="pt-4">
              <Button asChild size="lg">
                <Link href="/contact">CONTACT</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
