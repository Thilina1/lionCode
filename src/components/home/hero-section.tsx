'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-start pt-32 md:pt-0 md:items-center text-center md:text-left md:min-h-[700px] overflow-hidden md:justify-start">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/hero-background.png"
          alt="A finger touching a glowing processor, representing advanced technology."
          fill
          className="object-cover"
          priority
          data-ai-hint="finger processor"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl transition-all duration-1000 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-4 text-center md:text-left">
            <p className="font-headline text-sm tracking-widest text-accent uppercase">CUTTING-EDGE</p>
            <h1 className="font-headline text-4xl font-black tracking-tight sm:text-5xl md:text-7xl text-white">
              IT SOLUTIONS
            </h1>
            <h2 className="font-headline text-4xl font-black tracking-tight sm:text-5xl md:text-7xl text-primary">
              FOR ALL BUSINESSES
            </h2>
            <p className="text-lg text-gray-300 md:text-xl">
              We provide innovative and customized IT solutions to help your business grow and succeed in the digital age. From web development to cloud computing, We are here to support you.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
                <Link href="/contact">CONTACT</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
