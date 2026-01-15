
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BedDouble, Calendar, BarChart, Settings, CheckCircle, Monitor, Server, Library } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const guestFeatures = [
    {
        title: "Seamless Online Booking",
        description: "Guests can effortlessly browse room availability, select their preferred dates, and complete their reservation with a secure, integrated payment system.",
    },
    {
        title: "Dynamic Room Showcase",
        description: "A beautiful and intuitive interface presents room types, amenities, and high-quality photo galleries to attract and inform potential guests.",
    },
    {
        title: "Instant Confirmation",
        description: "Upon successful booking, guests receive an automated confirmation email with all their reservation details, ensuring peace of mind.",
    }
];

const staffFeatures = [
    {
        title: "Centralized Reservation Dashboard",
        description: "Staff can view and manage all incoming bookings, check guest details, and see room status at a glance from a single, powerful dashboard.",
    },
    {
        title: "Room & Rate Management",
        description: "Administrators have full control to update room availability, adjust pricing based on seasons or demand, and manage special offers.",
    },
    {
        title: "Reporting & Analytics",
        description: "The system generates key reports on occupancy rates, revenue, and booking trends to inform business strategy and operational decisions.",
    }
];

const keyBusinessFeatures = [
    { title: "Direct Booking Engine", description: "Reduces reliance on third-party booking sites, saving on commission fees and increasing direct revenue." },
    { title: "Real-Time Availability", description: "A robust backend ensures that room availability is always accurate across the guest-facing site and the staff dashboard." },
    { title: "Dynamic Pricing Controls", description: "Empowers the hotel to implement flexible pricing strategies to maximize revenue and occupancy." },
    { title: "Automated Guest Communication", description: "Streamlines the booking process with automated confirmation and pre-arrival emails." },
    { title: "Comprehensive Staff Dashboard", description: "A central control panel for reservations, room management, and performance analytics." },
    { title: "Scalable Cloud Architecture", description: "Built on a modern tech stack that ensures the system is fast, secure, and can grow with the business." }
];

const techStack = [
    {
        category: "Frontend",
        icon: <Monitor className="h-6 w-6" />,
        technologies: [
            { name: "Next.js", description: "For a high-performance, server-rendered React application." },
            { name: "TypeScript", description: "Ensures type safety and improves code maintainability." },
            { name: "Tailwind CSS", description: "For rapid and responsive UI development." },
        ]
    },
    {
        category: "Backend & Database",
        icon: <Server className="h-6 w-6" />,
        technologies: [
            { name: "Node.js", description: "Powers the robust and scalable backend services." },
            { name: "PostgreSQL", description: "A reliable relational database for managing all booking and hotel data." },
        ]
    },
    {
        category: "Key Libraries",
        icon: <Library className="h-6 w-6" />,
        technologies: [
            { name: "Stripe", description: "For secure and seamless payment processing." },
            { name: "ShadCN/UI", description: "Provides a set of beautifully designed, reusable components." },
        ]
    }
];


export default function HotelCaseStudyPage() {
  const image = PlaceHolderImages.find(p => p.id === 'case-study-4');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold text-primary">Web Application Case Study</p>
          <h1 className="mt-2 font-headline text-4xl font-bold tracking-tight sm:text-5xl">Victoria Retreat: Hotel Booking Management System</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A bespoke web application that provides a seamless, direct booking experience for guests and a powerful management toolkit for hotel staff.
          </p>
        </div>

        {/* Hero Image */}
        {image && (
          <div className="mt-12">
            <Image
              src={image.imageUrl}
              alt="Victoria Retreat hotel view"
              width={1200}
              height={600}
              className="w-full rounded-lg object-cover shadow-lg"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}

        {/* Overview */}
        <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">Project Overview</h2>
            <Card className="mt-8 bg-secondary border-none shadow-lg">
                <CardContent className="p-8">
                    <p className="text-muted-foreground">
                        Victoria Retreat needed to modernize its reservation process, reduce dependency on costly online travel agencies (OTAs), and gain more control over its guest relationships. We developed a full-stack web application that combines a beautiful, guest-facing booking engine with a comprehensive backend dashboard for staff, all powered by a robust and scalable architecture.
                    </p>
                </CardContent>
            </Card>
        </div>
        
        {/* Guest-Facing Features */}
        <div className="mx-auto mt-16 max-w-5xl">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">The Guest Experience</h2>
           <p className="mt-4 text-lg text-muted-foreground text-center">
            Designed to be as elegant and welcoming as the hotel itself, the public website makes booking a room a simple and enjoyable process.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {guestFeatures.map(feature => (
              <Card key={feature.title} className="transition-shadow duration-300 hover:shadow-xl text-center flex flex-col">
                <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {feature.title.includes("Booking") && <Calendar className="h-8 w-8" />}
                        {feature.title.includes("Showcase") && <BedDouble className="h-8 w-8" />}
                        {feature.title.includes("Confirmation") && <CheckCircle className="h-8 w-8" />}
                    </div>
                  <CardTitle className="font-headline text-xl mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Staff-Facing Features */}
        <div className="mx-auto mt-16 max-w-5xl">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">The Staff Management Dashboard</h2>
            <p className="mt-4 text-lg text-muted-foreground text-center">
               A secure administrative interface that empowers hotel staff to manage operations with efficiency and precision.
            </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {staffFeatures.map(feature => (
              <Card key={feature.title} className="transition-shadow duration-300 hover:shadow-xl text-center flex flex-col">
                 <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {feature.title.includes("Dashboard") && <BarChart className="h-8 w-8" />}
                        {feature.title.includes("Management") && <Settings className="h-8 w-8" />}
                        {feature.title.includes("Reporting") && <BarChart className="h-8 w-8" />}
                    </div>
                  <CardTitle className="font-headline text-xl mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Features Summary */}
        <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">Key Business & Technical Features</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
                {keyBusinessFeatures.map(feature => (
                    <div key={feature.title} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">{feature.title}</h4>
                            <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Technology Stack */}
        <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">Technology Stack</h2>
             <p className="mt-4 text-lg text-muted-foreground text-center">
                The project leverages a modern, reliable, and scalable technology stack to deliver a superior experience for both guests and staff.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-1">
                {techStack.map(stack => (
                    <Card key={stack.category}>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                {stack.icon}
                            </div>
                            <CardTitle className="font-headline text-2xl">{stack.category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <ul className="space-y-4">
                                {stack.technologies.map(tech => (
                                <li key={tech.name}>
                                    <h4 className="font-semibold">{tech.name}</h4>
                                    <p className="text-muted-foreground">{tech.description}</p>
                                </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        {/* Business Value Summary */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
            <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-8">
                <h2 className="font-headline text-3xl font-bold">Project Outcome</h2>
                <p className="mt-4 text-lg">
                    The Victoria Retreat booking system is a powerful asset that drives direct revenue, enhances operational efficiency, and provides a world-class digital experience for guests, solidifying the hotel's brand and market position.
                </p>
            </Card>
        </div>

        <div className="mt-16 text-center">
            <Button asChild variant="outline">
                <Link href="/case-studies">View All Case Studies <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
