import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

const innovations = [
    {
        id: 'innovation-software',
        preTitle: 'Delivering Enduring Growth With',
        title: 'Software Engineering Solutions',
        gridClass: 'md:col-span-1 md:row-span-2',
    },
    {
        id: 'innovation-ai',
        preTitle: 'Omni-channel Personalized Product Recommendations With',
        title: 'Artificial Intelligence & Data Science',
        gridClass: 'md:col-span-1',
    },
    {
        id: 'innovation-embedded',
        preTitle: 'Streamline With',
        title: 'Web Development',
        gridClass: 'md:col-span-1 md:row-span-3',
    },
    {
        id: 'innovation-iot',
        preTitle: 'Remote Monitoring With',
        title: 'IoT & IoB',
        gridClass: 'md:col-span-1',
    },
    {
        id: 'innovation-warehouse',
        preTitle: 'PROFESSIONAL SERVICES',
        title: 'Mobile Application Development',
        gridClass: 'md:col-span-2 md:row-span-2',
    },
];

export default function InnovationsSection() {
    return (
        <section className="bg-background text-foreground py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-4 flex items-center justify-center">
                        <div className="flex items-center gap-3 rounded-md bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">
                            <span>SERVICES</span>
                            <div className="h-0.5 w-10 rounded-full bg-primary-foreground" />
                        </div>
                    </div>
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">End-To-End Technology And Innovations</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Offering a broad set of capabilities under one roof makes us a versatile partner to meet all your digital ambitions.
                    </p>
                </div>

                <div className="mt-16 grid gap-4 md:grid-cols-3 md:grid-rows-3">
                     {innovations.map(item => {
                        const image = PlaceHolderImages.find(p => p.id === item.id);
                        if (!image) return null;

                        if (item.id === 'innovation-warehouse') {
                            return (
                                <Link href="#" key={item.id} className={`group relative overflow-hidden rounded-lg ${item.gridClass}`}>
                                    <Image
                                        src={image.imageUrl}
                                        alt={image.description}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={image.imageHint}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                    <div className="relative flex h-full flex-col justify-end p-6 text-white">
                                        <p className="text-sm font-semibold uppercase tracking-wider">{item.preTitle}</p>
                                        <h3 className="mt-2 font-headline text-3xl font-bold text-accent">{item.title}</h3>
                                    </div>
                                </Link>
                            )
                        }
                        
                        return (
                             <Link href="#" key={item.id} className={`group relative overflow-hidden rounded-lg ${item.gridClass} min-h-[250px] md:min-h-0`}>
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    data-ai-hint={image.imageHint}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="relative flex h-full flex-col justify-end p-6 text-white">
                                    <p className="text-sm">{item.preTitle}</p>
                                    <h3 className={`mt-1 font-headline text-2xl font-bold ${item.id === 'innovation-software' || item.id === 'innovation-embedded' ? 'text-primary' : 'text-white'}`}>{item.title}</h3>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}