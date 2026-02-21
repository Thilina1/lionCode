import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const clients = [
  { id: 'logo-tuk-tuk-drive', alt: 'Tuk Tuk Drive' },
  { id: 'logo-victoria-retreat', alt: 'Victoria Retreat' },
].map(client => {
  const image = PlaceHolderImages.find(p => p.id === client.id);
  return {
    ...client,
    imageUrl: image?.imageUrl || '',
  };
});

export default function TrustedClientsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Proudly Partnered With
          </h2>
          <p className="mt-4 text-lg text-white/70">
            We are dedicated to fostering strong, successful partnerships with our clients.
          </p>
        </div>
        <div className="mt-12 flex justify-center items-center gap-12 md:gap-24">
          {clients.map(client => (
            <div key={client.id} className="relative h-16 w-48">
              <Image 
                src={client.imageUrl}
                alt={client.alt}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
