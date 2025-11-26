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
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="flex items-center gap-2 rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
              PRODUCT
              <div className="h-1 w-8 rounded-full bg-primary-foreground/50" />
            </div>
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Explore Our Premium Product Collection</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover a range of top-quality products designed to meet your needs and exceed your expectations. Whether you're looking for innovation, durability, or style, our carefully curated selection offers something for everyone. Shop now and experience the best in craftsmanship and value.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="default">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {products.map((product) => {
            const image = PlaceHolderImages.find((p) => p.id === product.id);
            return (
              <Card key={product.id} className="bg-card text-card-foreground text-center">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold font-headline">{product.title}</h3>
                  {image && (
                    <div className="mb-4 flex justify-center">
                      <Image
                        src={image.imageUrl}
                        alt={`${product.title} logo`}
                        width={150}
                        height={75}
                        className="object-contain"
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
