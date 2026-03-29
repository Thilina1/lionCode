
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
    {
        id: 'firebase-studio',
        href: '/blog/firebase-studio',
        title: 'Firebase Studio: Design, Develop, Test and Deploy Smarter.',
        category: 'Development Tools',
        description: 'An in-depth look at Google\'s AI-powered, cloud-based development environment and how it streamlines the entire software development lifecycle.',
        imageId: 'firebase-studio-hero',
    },
    {
        id: 'locators-and-capturing-xpath',
        href: '/blog/locators-and-capturing-xpath',
        title: 'From Code to Conversation: Playwright MCP Makes Natural Language the New Test Automation Language 🤖',
        category: 'Test Automation',
        description: 'Explore how Playwright MCP is revolutionizing test automation by allowing testers to use natural language commands to interact with web applications.',
        imageId: 'blog-playwright-mcp-hero'
    },
    {
        id: 'blog-post-1',
        href: '/blog/blog-post-1',
        title: 'The Future of Business Automation in Sri Lanka',
        category: 'Business Technology',
        description: 'A look into the trends and strategic imperatives driving the adoption of business automation in Sri Lanka\'s evolving economic landscape.',
        imageId: 'blog-post-1',
    }
];

export default function BlogPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[url('/images/blog_hero_bg.png')] bg-cover bg-center py-12 md:py-16 border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
        <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center text-center text-white">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white mb-6 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            OUR BLOG
          </div>
          <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
            Insights &amp; Articles
          </h1>
          <p className="max-w-[700px] text-lg text-slate-300 sm:text-xl">
            Explore our latest articles, tutorials, and thoughts on technology and business.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mt-16 grid max-w-5xl mx-auto gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(post => {
            const image = PlaceHolderImages.find(p => p.id === post.imageId);
            return (
              <Link href={post.href} key={post.id}>
                <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl bg-secondary h-full flex flex-col">
                  {image && (
                    <div className="overflow-hidden">
                       <Image
                        src={image.imageUrl}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <p className="text-sm font-semibold text-primary">{post.category}</p>
                    <h3 className="mt-2 font-headline text-xl font-bold">{post.title}</h3>
                    <p className="mt-2 text-muted-foreground flex-grow">{post.description}</p>
                    <p className="mt-4 flex items-center font-semibold text-primary">Read Article <ArrowRight className="ml-2 h-4 w-4" /></p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
