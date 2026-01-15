export default function BlogPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24 min-h-[calc(100vh-120px)] flex flex-col justify-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Our Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Our team is preparing insightful articles. Our blog is launching soon!
          </p>
        </div>
      </div>
    </div>
  );
}
