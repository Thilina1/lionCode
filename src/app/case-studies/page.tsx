
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'case-study-3',
    title: 'Tuk Tuk Drive: Automated Booking Web App',
    category: 'Web Application',
    description: 'A comprehensive web application designed to connect adventurous travelers with local tuk-tuk owners in Sri Lanka.'
  },
  {
    id: 'case-study-4',
    title: 'Victoria Retreat: Hotel Booking Management',
    category: 'Hospitality Solutions',
    description: 'A bespoke web application that provides a seamless, direct booking experience for guests and a powerful management toolkit for hotel staff.'
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[url('/images/casestudies_hero_bg.png')] bg-cover bg-center py-12 md:py-16 border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
        <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center text-center text-white">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white mb-6 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            OUR WORK
          </div>
          <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
            Success Stories
          </h1>
          <p className="max-w-[700px] text-lg text-slate-300 sm:text-xl">
            See how we&apos;ve helped Sri Lankan businesses thrive with our innovative solutions.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mt-16 grid max-w-5xl mx-auto gap-8 md:grid-cols-2">
          {caseStudies.map(study => {
            const image = PlaceHolderImages.find(p => p.id === study.id);
            return (
              <Link href={`/case-studies/${study.id}`} key={study.id}>
                <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl bg-secondary h-full flex flex-col">
                  {image && (
                    <div className="overflow-hidden">
                       <Image
                        src={image.imageUrl}
                        alt={study.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <p className="text-sm font-semibold text-primary">{study.category}</p>
                    <h3 className="mt-2 font-headline text-xl font-bold">{study.title}</h3>
                    <p className="mt-2 text-muted-foreground flex-grow">{study.description}</p>
                    <p className="mt-4 flex items-center font-semibold text-primary">Read Case Study <ArrowRight className="ml-2 h-4 w-4" /></p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
