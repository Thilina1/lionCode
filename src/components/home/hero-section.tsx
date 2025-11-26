import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center md:min-h-[700px]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.webp"
          alt="A finger touching a glowing processor, representing advanced technology."
          fill
          className="object-cover"
          priority
          data-ai-hint="finger processor"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl text-center mx-auto">
          <div className="space-y-4">
            <p className="font-headline text-sm tracking-widest text-primary uppercase">CUTTING-EDGE</p>
            <h1 className="font-headline text-4xl font-black tracking-tight sm:text-5xl md:text-7xl text-white">
              IT SOLUTIONS
            </h1>
             <h2 className="font-headline text-4xl font-black tracking-tight sm:text-5xl md:text-7xl text-primary">
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
