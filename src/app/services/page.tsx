
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, Rocket, BrainCircuit, Cloud, Handshake } from 'lucide-react';
import CtaSection from '@/components/home/cta-section';

const services = [
  {
    id: 'custom-software',
    icon: <Code className="h-12 w-12 text-primary" />,
    title: 'Custom Software Development',
    description: 'We build bespoke web and enterprise applications tailored to your unique business needs. Our solutions are designed for scalability, performance, and long-term value, ensuring your software grows with your business.',
    details: [
      'Full-stack web application development',
      'Enterprise software solutions',
      'API design and integration',
      'Database design and management',
    ]
  },
  {
    id: 'mobile-apps',
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: 'Mobile App Development',
    description: 'Create engaging and intuitive iOS and Android applications that connect you with your customers on the go. We focus on user experience and performance to deliver apps that people love to use.',
    details: [
        'Native iOS & Android development',
        'Cross-platform development (Flutter, React Native)',
        'Mobile UI/UX design',
        'App store submission and maintenance',
    ]
  },
  {
    id: 'business-automation',
    icon: <Rocket className="h-12 w-12 text-primary" />,
    title: 'Business Process Automation',
    description: 'Streamline your operations, reduce manual effort, and increase efficiency with our intelligent automation solutions. We help you identify bottlenecks and implement technology to optimize your workflows.',
     details: [
        'Workflow automation and optimization',
        'Automated data entry and processing',
        'Integration of disparate systems',
    ]
  },
  {
    id: 'ai-data-science',
    icon: <BrainCircuit className="h-12 w-12 text-primary" />,
    title: 'AI & Data Science',
    description: 'Leverage the power of your data with our Artificial Intelligence and Data Science services. From predictive analytics to machine learning models, we help you uncover insights and make smarter business decisions.',
    details: [
        'Data analysis and visualization',
        'Predictive analytics and forecasting',
        'Natural Language Processing (NLP)',
    ]
  },
    {
    id: 'cloud-devops',
    icon: <Cloud className="h-12 w-12 text-primary" />,
    title: 'Cloud & DevOps',
    description: 'Utilize the full potential of the cloud with our expert services. We provide solutions for cloud migration, infrastructure management, and continuous integration/delivery to enhance your agility and scalability.',
    details: [
        'Cloud infrastructure setup (AWS, Google Cloud)',
        'CI/CD pipeline implementation',
        'Containerization with Docker and Kubernetes',
    ]
  },
  {
    id: 'it-consulting',
    icon: <Handshake className="h-12 w-12 text-primary" />,
    title: 'IT Consulting',
    description: 'Gain a strategic advantage with our IT consulting services. We provide expert guidance to help you align your technology strategy with your business goals, ensuring your IT investments deliver maximum ROI.',
    details: [
        'Technology roadmap and strategy',
        'Digital transformation planning',
        'Software architecture review',
        'IT project management',
    ]
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="bg-background">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-[url('/images/services_hero_bg.png')] bg-cover bg-center py-12 md:py-16 border-b border-border/40">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
          <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center text-center text-white">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white mb-6 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              OUR SERVICES
            </div>
            <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
              What We Do
            </h1>
            <p className="max-w-[700px] text-lg text-slate-300 sm:text-xl">
              We provide a comprehensive suite of IT services designed to solve complex business problems, drive innovation, and accelerate growth.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
          {/* Services List */}
          <div className="mx-auto mt-16 grid max-w-7xl gap-8">
            {services.map((service) => (
              <Card key={service.title} id={service.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl md:flex-row bg-secondary/50 scroll-mt-24">
                <div className="flex-shrink-0 p-6 md:p-8 md:w-1/3 flex flex-col items-center text-center justify-center">
                   <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </div>
                 <div className="p-6 md:p-8 md:border-l md:w-2/3">
                  <CardDescription className="text-lg mb-6">{service.description}</CardDescription>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-3">
                           <div className="h-2 w-2 rounded-full bg-primary" />
                           <span className="text-muted-foreground">{detail}</span>
                        </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
