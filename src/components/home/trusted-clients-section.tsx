import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const clients = [
  { id: 'logo-tuk-tuk-drive' },
  { id: 'logo-victoria-retreat' },
];

export default function TrustedClientsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Trusted By Leading Businesses</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are proud to have partnered with these innovative companies in Sri Lanka.
          </p>
        </div>
        <div className="mt-12 flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          {clients.map(client => {
            const image = PlaceHolderImages.find(p => p.id === client.id);
            if (!image) return null;

            const imageStyle = client.id === 'logo-tuk-tuk-drive' 
              ? '' 
              : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100';

            return (
              <div key={client.id} className={`relative h-24 w-48 transition-all duration-300 ${imageStyle}`}>
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-contain"
                  data-ai-hint={image.imageHint}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
