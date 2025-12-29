import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, BarChart2, DollarSign, Repeat, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const useCases = [
  {
    title: "Customer Booking & Experience",
    description: "Customers can easily book tuk-tuks through a streamlined online process. The app provides clear pricing, optional extras, and booking confirmation in real time.",
    benefits: [
      "Faster and more convenient bookings",
      "Transparent pricing with no hidden costs",
      "Improved customer trust and satisfaction"
    ]
  },
  {
    title: "Driver & Vehicle Management",
    description: "The platform enables efficient onboarding and management of drivers and tuk-tuks, including document verification and availability tracking.",
    benefits: [
      "Faster driver onboarding",
      "Centralized document management",
      "Better utilization of available vehicles"
    ]
  },
  {
    title: "Booking Assignment & Operations",
    description: "Admins can assign available tuk-tuks based on date, location, and demand, ensuring smooth daily operations.",
    benefits: [
      "Reduced scheduling conflicts",
      "Optimized vehicle allocation",
      "Fewer last-minute cancellations"
    ]
  },
  {
    title: "Pricing, Extras & Revenue Optimization",
    description: "The system supports dynamic pricing, license fees, and paid extras such as full-time drivers or accessories.",
    benefits: [
      "Automated cost calculations",
      "Additional revenue streams through add-ons",
      "Clear cost breakdown for customers"
    ]
  },
  {
    title: "Admin Dashboard & Reporting",
    description: "A centralized dashboard provides visibility into bookings, revenue, and operational performance.",
    benefits: [
      "Real-time business insights",
      "Easy tracking of daily and monthly revenue",
      "Data-driven decision making"
    ]
  }
];

const roiPoints = [
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: "Increased Revenue",
    description: "More bookings through digital accessibility, upselling via extras, and reduced missed or duplicate bookings.",
    impact: "Higher and more predictable income"
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Reduced Operational Costs",
    description: "Less dependency on manual processes, reduced paperwork and admin overhead, and automated reporting.",
    impact: "Lower operational expenses"
  },
  {
    icon: <Repeat className="h-8 w-8 text-primary" />,
    title: "Improved Customer Retention",
    description: "Reliable and consistent booking experience with transparent pricing and professional service.",
    impact: "Repeat customers and long-term loyalty"
  },
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
            A smart, digital platform designed to modernize tuk-tuk rental and booking operations, connecting customers, drivers, and administrators through a single, efficient system.
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
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">Tuk Tuk Drive – Use Cases & Business ROI</h2>
            <Card className="mt-8 bg-secondary border-none shadow-lg">
                <CardContent className="p-8">
                    <h3 className="font-headline text-2xl font-bold">Overview</h3>
                    <p className="mt-4 text-muted-foreground">
                    Tuk Tuk Drive is a smart, digital platform designed to modernize tuk-tuk rental and booking operations. The application connects customers, drivers, and administrators through a single, efficient system—reducing manual work, improving service quality, and increasing overall profitability.
                    </p>
                </CardContent>
            </Card>
        </div>
        
        {/* Core Use Cases */}
        <div className="mx-auto mt-16 max-w-5xl">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">Core Use Cases</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-1">
            {useCases.map(useCase => (
              <Card key={useCase.title} className="transition-shadow duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{useCase.description}</p>
                  <ul className="mt-4 space-y-2">
                    {useCase.benefits.map(benefit => (
                      <li key={benefit} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Return on Investment (ROI) */}
        <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">Return on Investment (ROI)</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
                {roiPoints.map(point => (
                    <Card key={point.title} className="text-center p-6 transition-shadow duration-300 hover:shadow-xl">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                            {point.icon}
                        </div>
                        <h3 className="font-headline text-xl font-bold">{point.title}</h3>
                        <p className="mt-2 text-muted-foreground">{point.description}</p>
                        <p className="mt-4 font-bold text-primary">Impact: {point.impact}</p>
                    </Card>
                ))}
            </div>
             <Card className="mt-8 bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
                <CardContent className="p-6">
                    <h3 className="font-headline text-xl font-bold text-green-800 dark:text-green-200">🚀 Scalability & Growth</h3>
                    <p className="mt-2 text-green-700 dark:text-green-300">Easy expansion to new cities or regions and the ability to manage more vehicles without increasing staff leads to business growth without proportional cost increases.</p>
                </CardContent>
            </Card>
        </div>

        {/* Business Value Summary */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
            <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-8">
                <h2 className="font-headline text-3xl font-bold">Business Value Summary</h2>
                <p className="mt-4 text-lg">
                Tuk Tuk Drive transforms traditional tuk-tuk rental operations into a scalable, data-driven digital business. By automating bookings, optimizing resource allocation, and improving customer experience, the platform delivers measurable ROI within a short time frame.
                </p>
                <p className="mt-4 text-xl font-bold">Tuk Tuk Drive is not just an app—it’s a growth engine for modern tuk-tuk businesses.</p>
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
