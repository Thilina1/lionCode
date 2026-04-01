'use client';

import { Card, CardContent } from "@/components/ui/card";
import {
    SiFlutter,
    SiNextdotjs,
    SiGooglecloud,
    SiFirebase,
    SiSwift,
    SiReact,
    SiAmazon,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiPython,
    SiNodedotjs,
    SiTypescript,
    SiGo,
    SiVuedotjs,
    SiAngular,
    SiSharp,
    SiDotnet,
    SiRubyonrails
} from '@icons-pack/react-simple-icons';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

const technologies = [
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', darkColor: '#FFFFFF' },
  { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Swift', icon: SiSwift, color: '#F05138' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Go', icon: SiGo, color: '#00ADD8' },
  { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'Angular', icon: SiAngular, color: '#DD0031' },
];

export default function TechnologiesSection() {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-8 md:py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Globe image (desktop only) */}
          <div className="hidden md:flex relative items-center justify-center">
            <Image
              src="/images/global.png"
              alt="Global technology network"
              width={600}
              height={500}
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>

          {/* Right side - heading, description, tech cards */}
          {/* On mobile: globe.png is the background with dark overlay */}
          <div className="relative rounded-2xl overflow-hidden md:rounded-none md:overflow-visible">
            {/* Mobile-only background image */}
            <div
              className="md:hidden absolute inset-0 rounded-2xl"
              style={{ backgroundImage: 'url(/images/global.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            {/* Dark overlay - only on mobile */}
            <div className="absolute inset-0 bg-black/60 md:hidden rounded-2xl pointer-events-none" />

            <div className="relative md:static p-6 md:p-0">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-white md:text-foreground">Our Technology Stacks</h2>
              <p className="mt-4 text-lg text-white/80 md:text-muted-foreground">
                We leverage the latest and greatest technologies to deliver robust, scalable, and innovative solutions.
              </p>
              <div className="mt-8">
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:flex xl:flex-wrap gap-3 md:gap-4">
                  {technologies.map((tech) => {
                    const IconComponent = tech.icon;
                    const color = isMounted && resolvedTheme === 'dark' && tech.darkColor ? tech.darkColor : tech.color;
                    return (
                      <Card key={tech.name} className="bg-card border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 overflow-hidden aspect-square flex items-center justify-center">
                          <CardContent className="flex flex-col items-center justify-center p-2 m-0 gap-2">
                              <IconComponent className="h-6 w-6 md:h-8 md:w-8" style={{ color: color }} />
                              <span className="text-[10px] md:text-xs font-medium text-muted-foreground text-center line-clamp-1">{tech.name}</span>
                          </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
