import Image from 'next/image';

const clients = [
  { id: 'logo-tuk-tuk', alt: 'Tuk Tuk Drive', imageUrl: '/customers/logo-tuk-tuk-drive.png' },
  { id: 'logo-removebg', alt: 'Customer Logo 1', imageUrl: '/customers/Logo-removebg-preview.png' },
  { id: 'logo-jpeg', alt: 'Customer Logo 2', imageUrl: '/customers/Logo.jpeg', background: 'rgba(238, 238, 238)' },
  { id: 'logo-png', alt: 'Customer Logo 3', imageUrl: '/customers/Logo.png' },
  { id: 'logo-whatsapp', alt: 'Customer Logo 4', imageUrl: '/customers/WhatsApp Image 2026-03-27 at 21.29.17.jpeg', background: 'rgba(110, 153, 64)' },
  { id: 'logo-victoria', alt: 'Victoria Retreat', imageUrl: '/customers/victoria.jpeg' },
];

export default function TrustedClientsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Featured Clients
          </h2>
          <p className="mt-4 text-lg text-white/70">
            We are dedicated to fostering strong, successful partnerships with our clients.
          </p>
        </div>
        <div className="mt-12 flex justify-center items-center gap-12 md:gap-24">
          {clients.map(client => {
            const isPng = client.imageUrl.toLowerCase().endsWith('.png');
            const isWhiteBgJpeg = client.imageUrl.toLowerCase().includes('logo.jpeg') || client.imageUrl.toLowerCase().includes('victoria.jpeg');
            const shouldHaveWhiteBg = isPng || isWhiteBgJpeg;
            
            return (
              <div 
                key={client.id} 
                className={`relative h-20 w-48 p-2 rounded-lg flex items-center justify-center ${shouldHaveWhiteBg && !client.background ? 'bg-white' : ''}`}
                style={client.background ? { backgroundColor: client.background } : {}}
              >
                <div className="relative h-full w-full">
                  <Image 
                    src={client.imageUrl}
                    alt={client.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
