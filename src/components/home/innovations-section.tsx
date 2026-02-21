
import { BrainCircuit, Zap, CloudCog, Code, Smartphone, Briefcase } from "lucide-react";

const innovations = [
    {
        icon: <Code className="h-8 w-8 text-primary" />,
        title: "Custom Software Development",
        description: "We build bespoke web and enterprise applications tailored to unique business needs. Our solutions are scalable, performant, and designed for long-term value.",
    },
    {
        icon: <Smartphone className="h-8 w-8 text-primary" />,
        title: "Mobile App Development",
        description: "We create engaging and intuitive iOS and Android apps with a focus on great user experience.",
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Business Process Automation",
        description: "We streamline operations and increase efficiency by identifying bottlenecks and implementing intelligent automation solutions.",
    },
    {
        icon: <BrainCircuit className="h-8 w-8 text-primary" />,
        title: "AI & Data Science",
        description: "We help businesses leverage their data with predictive analytics, machine learning models, and data visualization.",
    },
    {
        icon: <CloudCog className="h-8 w-8 text-primary" />,
        title: "Cloud & DevOps",
        description: "We offer expertise in cloud migration, infrastructure management (AWS, Google Cloud), and CI/CD to enhance agility and scalability.",
    },
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: "IT Consulting",
        description: "We provide strategic guidance to align technology with business goals, ensuring IT investments deliver maximum ROI.",
    },
];


export default function InnovationsSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        End-To-End Technology And Innovations
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                    Offering a broad set of capabilities under one roof makes us a versatile partner to meet all your digital ambitions.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {innovations.map((item) => (
                        <div key={item.title} className="flex items-start gap-4">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold font-headline">{item.title}</h3>
                                <p className="mt-1 text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
