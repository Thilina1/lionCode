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
  { name: 'Flutter', icon: <SiFlutter size={32} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={32} /> },
  { name: 'SQL', icon: <SiPostgresql size={32} /> },
  { name: 'Google Cloud', icon: <SiGooglecloud size={32} /> },
  { name: 'Firebase', icon: <SiFirebase size={32} /> },
  { name: 'Swift', icon: <SiSwift size={32} /> },
  { name: 'React', icon: <SiReact size={32} /> },
  { name: 'AWS', icon: <SiAmazon size={32} /> },
  { name: 'MongoDB', icon: <SiMongodb size={32} /> },
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
                    {technologies.map((tech) => (
                        <Card key={tech.name} className="p-4 bg-secondary/50 border-0 shadow-none transition-all duration-300 hover:bg-secondary hover:-translate-y-2">
                            <CardContent className="flex flex-col items-center justify-center p-2 m-0 gap-2 w-24 h-24">
                                {tech.icon}
                                <span className="text-sm font-medium text-muted-foreground">{tech.name}</span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
