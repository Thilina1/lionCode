import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/80">
            Let's discuss how Lion Code Technologies can help you achieve your goals. Our team is ready to build the solutions you need to succeed.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="outline" className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
