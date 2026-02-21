import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const posts = [
  {
    title: 'From Code to Conversation: Playwright MCP',
    excerpt: 'Software testing has always been the backbone of quality software development. Testing is absolutely critical. Every bug caught before production saves companies money, protects the user experience, and preserves brand reputation...',
    imageUrl: 'https://images.unsplash.com/photo-1678483749293-ede73887162b?q=80&w=2070&auto=format=fit&crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/blog/locators-and-capturing-xpath',
    imageId: 'blog-playwright-mcp-hero'
  },
  {
    title: 'Firebase Studio: Design, Develop, Test and Deploy Smarter',
    excerpt: 'A few months ago, I came across Firebase Studio on the Google Developer Blog and YouTube. Google described it as an AI powered, cloud based development platform that can turn simple ideas into fully deployed applications...',
    imageUrl: 'https://images.unsplash.com/photo-1633355444131-45b73485c343?q=80&w=2070&auto=format=fit&crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/blog/firebase-studio',
    imageId: 'firebase-studio-hero'
  },
];

const BlogNewsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-3 lg:gap-16 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-1 relative">
            <div className="flex items-center">
              <div className="flex items-center -ml-4 sm:-ml-8 md:-ml-12">
                  <h3 className="[writing-mode:vertical-rl] rotate-180 uppercase bg-primary text-primary-foreground tracking-wider font-bold py-3 px-4 rounded-sm text-sm">
                      BLOG
                  </h3>
              </div>
              <div className="ml-6">
                  <h2 className="font-headline text-4xl font-bold text-foreground">
                      News And <br /> Updates
                  </h2>
                  <p className="mt-4 text-muted-foreground max-w-sm">
                  Keep yourself updated with the latest industry updates and news from Lion Code Technologies.
                  </p>
                  <Link
                      href="/blog"
                      className="mt-6 inline-flex items-center font-semibold text-primary hover:underline group"
                  >
                  Read More Articles
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
              </div>
            </div>
          </div>

          {/* Right Column (Blog Posts) */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {posts.map((post, index) => {
              const image = PlaceHolderImages.find(p => p.id === post.imageId);
              return (
              <Link key={index} href={post.href} className="group block rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="h-full flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={image?.imageUrl || post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-4 flex-grow">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsSection;
