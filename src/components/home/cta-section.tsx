import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="bg-accent text-accent-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-black">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg text-black/80">
            Let's discuss how Lion Code Technologies can help you achieve your goals. Our team is ready to build the solutions you need to succeed.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="default" className="transition-transform duration-300 hover:scale-105">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
