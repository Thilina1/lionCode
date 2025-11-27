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
    SiPostgresql
} from '@icons-pack/react-simple-icons';

const technologies = [
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'SQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Swift', icon: SiSwift, color: '#F05138' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'AWS', icon: SiAmazon, color: '#232F3E' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
];

export default function TechnologiesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Technologies</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We leverage the latest and greatest technologies to deliver robust, scalable, and innovative solutions.
          </p>
        </div>
        <div className="mt-12">
            <div className="relative">
                <div className="flex justify-center flex-wrap gap-4 md:gap-8">
                    {technologies.map((tech) => {
                      const IconComponent = tech.icon;
                      return (
                        <Card key={tech.name} className="p-4 bg-secondary/50 border-0 shadow-none transition-all duration-300 hover:bg-secondary hover:-translate-y-2">
                            <CardContent className="flex flex-col items-center justify-center p-2 m-0 gap-2 w-24 h-24">
                                <IconComponent size={32} color={tech.color} />
                                <span className="text-sm font-medium text-muted-foreground">{tech.name}</span>
                            </CardContent>
                        </Card>
                      )
                    })}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
