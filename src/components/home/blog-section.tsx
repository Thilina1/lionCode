import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  { id: 'blog-post-1', title: 'The Future of Business Automation in Sri Lanka', excerpt: 'Explore the trends shaping the next wave of business efficiency...', date: 'July 15, 2024' },
  { id: 'blog-post-2', title: 'Why Your Business Needs a Mobile App in 2024', excerpt: 'Discover the strategic advantages of connecting with your customers on mobile.', date: 'July 8, 2024' },
];

export default function BlogSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">From Our Blog</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Insights, trends, and best practices in IT and business automation.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {blogPosts.map(post => {
            const image = PlaceHolderImages.find(p => p.id === post.id);
            return (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <Card className="group overflow-hidden transition-all hover:shadow-xl">
                  {image && (
                    <div className="overflow-hidden">
                       <Image
                        src={image.imageUrl}
                        alt={post.title}
                        width={800}
                        height={450}
                        className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                    <h3 className="mt-2 font-headline text-xl font-bold">{post.title}</h3>
                    <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                    <p className="mt-4 flex items-center font-semibold text-primary">Read More <ArrowRight className="ml-2 h-4 w-4" /></p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/blog">Visit Our Blog <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
