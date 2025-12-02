
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'case-study-3',
    title: 'Tuk Tuk Drive: Automated Booking Web App',
    category: 'Web Application',
  },
  {
    id: 'case-study-4',
    title: 'Victoria Retreat: Hotel Booking Management',
    category: 'Hospitality Solutions',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Success Stories</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how we've helped Sri Lankan businesses thrive with our innovative solutions.
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/case-studies">View All Case Studies <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {caseStudies.map(study => {
            const image = PlaceHolderImages.find(p => p.id === study.id);
            return (
              <Link href={`/case-studies/${study.id}`} key={study.id}>
                <Card className="group overflow-hidden transition-all hover:shadow-xl bg-secondary">
                  {image && (
                    <div className="overflow-hidden">
                       <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <p className="text-sm font-semibold text-primary">{study.category}</p>
                    <h3 className="mt-2 font-headline text-xl font-bold">{study.title}</h3>
                    <p className="mt-4 flex items-center font-semibold text-primary">Read Case Study <ArrowRight className="ml-2 h-4 w-4" /></p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
