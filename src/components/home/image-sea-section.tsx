import Image from 'next/image';

export default function ImageSeaSection() {
  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto">
        <div className="relative">
          <div
            className="h-96 rounded-xl bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/images/imagesea.png')" }}
          >
            <div className="flex h-full flex-col justify-center p-8 text-white md:p-16">
              <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                Have a <span className="text-red-600">BIG IDEA</span>
              </h2>
              <h3 className="text-3xl font-bold">in mind?</h3>
              <p className="mt-4 text-xl md:text-2xl">
                Let's discuss what we can achieve together
              </p>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-4">
                  <Image
                    src="/images/a.webp"
                    alt="Avatar 1"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="/images/a.webp"
                    alt="Avatar 2"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="/images/a.webp"
                    alt="Avatar 3"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-bold">Talk to an expert</p>
                  <p>marketing@zone24x7.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-24 right-0">
            <Image
              src="/images/whale.png"
              alt="Whale"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
