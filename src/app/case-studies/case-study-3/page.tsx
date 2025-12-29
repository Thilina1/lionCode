
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Monitor, Server, Library, DollarSign, Package, CheckCircle, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const publicFeatures = [
    {
        title: "Online Booking System",
        description: "Travelers can select rental dates, choose from available tuk-tuks, provide their details, and process payments securely, receiving instant booking confirmations.",
        details: "This system reads from and writes to a robust SQL database on Google Cloud, managing availability, pricing, and customer information in real-time."
    },
    {
        title: "Dynamic Content & Blog Platform",
        description: "A fully-featured CMS attracts and informs potential customers with articles about Sri Lankan travel. The blog highlights featured posts and categorizes content to inspire travelers.",
        details: "Each post can have a unique, dynamically applied color scheme controlled from the admin panel. All content, including rich text, images, and tags, is pulled from the Google Cloud SQL database."
    },
    {
        title: "Static & Informational Pages",
        description: "Essential pages like 'About Us,' 'Terms and Conditions,' and 'Privacy Policy' build trust and provide legal clarity for users.",
        details: ""
    }
];

const adminFeatures = [
    {
        title: "Dashboard Overview",
        description: "A central hub provides at-a-glance analytics on business performance, including key metrics like 'Total Revenue' and 'Last 30 Days Revenue.'",
        details: "Interactive charts show booking trends and revenue over time, with a list of upcoming pickups and returns for easy operational planning."
    },
    {
        title: "Booking Management",
        description: "A comprehensive view of all bookings made through the site, allowing the admin to see customer details, rental dates, and payment status for every booking.",
        details: ""
    },
    {
        title: "Advanced Blog Management (CMS)",
        description: "Admins have full control over the website's content, with the ability to create, edit, and delete posts using a rich text editor. A simple checkbox marks posts as 'featured.'",
        details: "A key feature is the drag-and-drop reordering of featured posts, which automatically updates their position on the public website, providing incredible flexibility for marketing."
    }
];

const keyBusinessFeatures = [
    { title: "Dynamic Pricing Engine", description: "Calculates rental costs based on duration, vehicle count, locations, and optional extras." },
    { title: "Customizable 'Extras' System", description: "Allows users to add items like licenses, special equipment, and transfers to their booking." },
    { title: "Comprehensive Admin Dashboard", description: "A control center for managing bookings, viewing revenue analytics, and overseeing all operations." },
    { title: "Full-Fledged Content Management System (CMS)", description: "An integrated blog with dynamic color palettes and drag-and-drop reordering for featured posts, serving as a powerful marketing tool." },
    { title: "Automated Booking Confirmation", description: "Sends detailed confirmation emails to customers upon successful payment." },
    { title: "Real-Time Data Management", description: "Built on a robust SQL backend, ensuring that all data on the admin dashboard and public site is always up-to-date." },
    { title: "Modern Tech Stack", description: "Utilizes Next.js, TypeScript, and Tailwind CSS for a fast, reliable, and scalable application." }
];

const techStack = [
    {
        category: "Frontend",
        icon: <Monitor className="h-6 w-6" />,
        technologies: [
            { name: "Next.js", description: "A powerful React framework for fast, server-rendered applications." },
            { name: "TypeScript", description: "Adds static typing to JavaScript for improved code quality." },
            { name: "Tailwind CSS", description: "A utility-first CSS framework for rapid UI development." },
        ]
    },
    {
        category: "Backend & Database",
        icon: <Server className="h-6 w-6" />,
        technologies: [
            { name: "Google Cloud", description: "Provides the backend infrastructure for the application." },
            { name: "SQL Database", description: "A flexible and scalable SQL database for storing all booking and blog data." },
        ]
    },
    {
        category: "Key Libraries",
        icon: <Library className="h-6 w-6" />,
        technologies: [
            { name: "Chart.js", description: "For creating beautiful and interactive charts on the admin dashboard." },
            { name: "Jodit-React", description: "A powerful rich text editor for easy blog content formatting." },
        ]
    }
];

const pricingComponents = [
    { title: "Base Rental Cost", description: "The core rental price is calculated based on the number of days and vehicles, offering flexibility for both solo travelers and larger groups." },
    { title: "Location-Based Adjustments", description: "The cost dynamically adapts based on the traveler's chosen pickup and drop-off points, ensuring fair pricing for logistical requirements." },
    { title: "Service & Administrative Fees", description: "Standard fees are seamlessly integrated into the total cost to cover essential operational services." }
];

const customizableExtras = [
    { title: "Permits & Licenses", description: "The system intelligently calculates costs for any necessary local driving permits or licenses based on the number of drivers." },
    { title: "Specialized Equipment", description: "A flexible system allows the business to offer various add-ons, giving travelers the option to rent specialized gear for their trip." },
    { title: "Logistical Support", description: "The platform can handle unique requests, like coordinating vehicle transfers to and from local transport hubs, with any associated costs clearly outlined." }
];

export default function TukTukCaseStudyPage() {
  const image = PlaceHolderImages.find(p => p.id === 'case-study-3');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold text-primary">Web Application Case Study</p>
          <h1 className="mt-2 font-headline text-4xl font-bold tracking-tight sm:text-5xl">Tuk Tuk Drive: Automated Booking Web App</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive web application designed to connect adventurous travelers with local tuk-tuk owners in Sri Lanka, providing an authentic, immersive, and sustainable travel experience.
          </p>
        </div>

        {/* Hero Image */}
        {image && (
          <div className="mt-12">
            <Image
              src={image.imageUrl}
              alt="Tuk Tuk Drive dashboard"
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
                        TukTukDrive.com replaces the traditional, often cumbersome, rental process with a seamless online booking system, while also serving as a rich content hub for anyone looking to explore Sri Lanka. The project is split into two main parts: a public-facing website for travelers and a powerful admin dashboard for business management.
                    </p>
                </CardContent>
            </Card>
        </div>
        
        {/* Public-Facing Website */}
        <div className="mx-auto mt-16 max-w-5xl">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">Public-Facing Website</h2>
           <p className="mt-4 text-lg text-muted-foreground text-center">
            This is the primary interface for the end-user, designed to be engaging, informative, and easy to use.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-1">
            {publicFeatures.map(feature => (
              <Card key={feature.title} className="transition-shadow duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                   {feature.details && <p className="mt-2 text-sm text-primary/80 italic">{feature.details}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dynamic Pricing */}
        <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">Intelligent Pricing Engine</h2>
             <p className="mt-4 text-lg text-muted-foreground text-center">
                The platform moves beyond simple fixed pricing, utilizing a dynamic calculation engine that builds the total rental cost in real-time. This ensures fair and transparent pricing for the customer, reflecting their unique selections.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-1">
                <Card className="bg-secondary">
                    <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <DollarSign className="h-6 w-6" />
                        </div>
                        <CardTitle className="font-headline text-2xl">Key Pricing Components</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <ul className="space-y-4">
                            {pricingComponents.map(item => (
                            <li key={item.title}>
                                <h4 className="font-semibold">{item.title}</h4>
                                <p className="text-muted-foreground">{item.description}</p>
                            </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
        
        {/* Customizable Extras */}
        <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">Customizable Add-Ons</h2>
             <p className="mt-4 text-lg text-muted-foreground text-center">
                A key advantage for travelers is the ability to customize their rental with optional "add-ons," each seamlessly integrated into the final price. This empowers travelers while creating multiple revenue streams for the business.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
                {customizableExtras.map(item => (
                <Card key={item.title} className="transition-shadow duration-300 hover:shadow-xl">
                    <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center gap-2"><Package className="h-6 w-6 text-primary"/>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
        </div>
        
        {/* Booking Process */}
        <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">The Seamless Booking Experience</h2>
             <p className="mt-4 text-lg text-muted-foreground text-center">
                The process from vehicle selection to final confirmation is designed to be a smooth, secure, and transparent journey for the customer, highlighting the advantages of a modern web application.
            </p>
            <Card className="mt-8">
                <CardContent className="p-8">
                    <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Effortless Configuration:</span> The customer easily selects their travel dates, locations, vehicle quantity, and any desired add-ons through an intuitive user interface.</li>
                        <li><span className="font-semibold text-foreground">Transparent, Real-Time Quotes:</span> As selections are made, the dynamic pricing engine instantly calculates and displays the total rental price, providing complete transparency and eliminating surprises.</li>
                        <li><span className="font-semibold text-foreground">Secure & Simple Payment:</span> The user proceeds to a secure, integrated payment gateway to complete the transaction with confidence.</li>
                        <li><span className="font-semibold text-foreground">Instant Peace of Mind:</span> Upon successful payment, the system automatically sends a detailed confirmation email, providing the customer with all essential booking details for their records.</li>
                    </ol>
                </CardContent>
            </Card>
        </div>

        {/* Admin Dashboard */}
        <div className="mx-auto mt-16 max-w-5xl">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">Admin Dashboard</h2>
            <p className="mt-4 text-lg text-muted-foreground text-center">
                A secure, all-in-one control center for the business owner to manage every aspect of the platform.
            </p>
          <div className="mt-12 grid gap-8 md:grid-cols-1">
            {adminFeatures.map(feature => (
              <Card key={feature.title} className="transition-shadow duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                  {feature.details && <p className="mt-2 text-sm text-primary/80 italic">{feature.details}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Features Summary */}
        <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">Key Technical & Business Features</h2>
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
                The project is built on a modern, robust, and scalable technology stack.
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
                <h2 className="font-headline text-3xl font-bold">Project Summary</h2>
                <p className="mt-4 text-lg">
                    This project is a perfect example of a modern, full-stack application that solves a real-world business need while providing a high-quality user experience.
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

    