import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  { id: 'team-member-1', name: 'John Doe', role: 'CEO & Founder' },
  { id: 'team-member-2', name: 'Jane Smith', role: 'CTO' },
  { id: 'team-member-3', name: 'Peter Jones', role: 'Lead Architect' },
];

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Leadership</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The brilliant minds behind our success, dedicated to innovation and excellence.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {teamMembers.map(member => {
            const image = PlaceHolderImages.find(p => p.id === member.id);
            return (
              <Card key={member.id} className="group text-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-secondary">
                {image && (
                  <div className="overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="object-cover w-full h-80 transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{member.role}</p>
                  <div className="mt-4 flex justify-center gap-4">
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-primary"><Twitter className="h-5 w-5" /></Link>
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="default" className="transition-transform duration-300 hover:scale-105">
            <Link href="/team">Meet The Whole Team <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
