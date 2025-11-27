import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const products = [
  {
    id: 'product-chatbot',
    title: 'Chatbot',
    description: 'Our chatbot solution is designed to enhance customer engagement and support. This intelligent chatbot utilizes natural language processing and providing real-time assistance and information.',
  },
  {
    id: 'product-cvap',
    title: 'CVAP (Cognitive Vision Analytics)',
    description: 'CVAP uses AI to analyze visual data, enabling real-time object detection, activity recognition, and insights to improve efficiency, safety, and customer experiences across industries.',
  },
  {
    id: 'product-planogram',
    title: 'Planogram',
    description: 'Planograms empower retailers to create a cohesive and inviting shopping experience while maximizing sales potential and improving inventory management.',
  },
];

export default function ProductCollection() {
  return (
    <section className="relative py-16 md:py-24 bg-background text-foreground overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 60% 40%, hsl(var(--primary) / 0.1), transparent 50%),' +
            'radial-gradient(circle at 80% 70%, hsl(var(--primary) / 0.05), transparent 60%)',
        }}
      />
       <div className="absolute top-0 right-0 z-0 transform translate-x-1/2 -translate-y-1/3">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/5">
            <g clipPath="url(#clip0_102_2)">
            <path d="M-28.5 63L513 541.5" stroke="currentColor" strokeWidth="2"/>
            <path d="M-28.5 233L343.5 541.5" stroke="currentColor" strokeWidth="2"/>
            <path d="M-28.5 403L174 541.5" stroke="currentColor" strokeWidth="2"/>
            <path d="M88.5 -27.5L513 323" stroke="currentColor" strokeWidth="2"/>
            </g>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="flex items-center gap-3 rounded-md bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">
              <span>PRODUCT</span>
              <div className="h-0.5 w-10 rounded-full bg-primary-foreground" />
            </div>
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Explore Our Premium Product Collection</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover a range of top-quality products designed to meet your needs and exceed your expectations. Whether you're looking for innovation, durability, or style, our carefully curated selection offers something for everyone. Shop now and experience the best in craftsmanship and value.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="default" className="transition-transform duration-300 hover:scale-105">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {products.map((product) => {
            const image = PlaceHolderImages.find((p) => p.id === product.id);
            return (
              <Card key={product.id} className="bg-card text-card-foreground text-left shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold font-headline">{product.title}</h3>
                  {image && (
                     <div className="mb-4 flex items-center justify-start h-20">
                      <Image
                        src={image.imageUrl}
                        alt={`${product.title} logo`}
                        width={product.id === 'product-chatbot' ? 80 : 150}
                        height={product.id === 'product-chatbot' ? 80 : 75}
                        className={`object-contain ${product.id === 'product-chatbot' ? 'rounded-full' : ''}`}
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
