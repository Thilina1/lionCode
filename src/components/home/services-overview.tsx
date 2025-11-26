import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, Rocket } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'Custom Software Development',
    description: 'Bespoke web and enterprise applications tailored to your unique business needs, built for scalability and performance.',
    link: '/services#custom-software'
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Mobile App Development',
    description: 'Engaging and intuitive iOS and Android applications that connect you with your customers on the go.',
    link: '/services#mobile-apps'
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: 'Business Process Automation',
    description: 'Streamline your operations, reduce manual effort, and increase efficiency with our intelligent automation solutions.',
    link: '/services#automation'
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We transform businesses with cutting-edge technology and strategic IT solutions.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 transition-all hover:shadow-xl hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {service.icon}
                </div>
                <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <Link href={service.link} className="mt-4 font-semibold text-primary hover:underline">Learn More &rarr;</Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
