
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Cpu, Package, Eye, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const innovations = [
    {
        icon: <BrainCircuit className="h-10 w-10 text-white" />,
        title: "ARTIFICIAL INTELLIGENCE",
        subtitle: "SOLUTIONS",
        tag: "AI",
        description: "Uses AI and ML to understand data, Zone24x7's processes, and execute complex business processes autonomously, continuously learning and improving over time.",
        hashtags: ["#ArtificialIntelligence", "#AISolutions", "#MachineLearning"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format=fit&crop=entropy",
    },
    {
        icon: <Smartphone className="h-10 w-10 text-white" />,
        title: "RFID PRODUCT PLATFORM",
        subtitle: "SYSTEMS",
        tag: "RFID",
        description: "Innovative RFID solutions for real-time tracking, inventory management, and asset security across global supply chains.",
        hashtags: ["#RFIDTechnology", "#SmartTracking", "#AssetManagement"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2000&auto=format=fit&crop=entropy",
    },
    {
        icon: <Package className="h-10 w-10 text-white" />,
        title: "WAREHOUSE MANAGEMENT SYSTEM",
        subtitle: "OPERATIONS",
        tag: "WMS",
        description: "Zone24x7 WMS leverages advanced technologies to provide real-time visibility, optimize warehouse workflows, and ensure accurate inventory control.",
        hashtags: ["#WarehouseManagement", "#InventoryControl", "#SupplyChainSolutions"],
        image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2000&auto=format=fit&crop=entropy",
    },
    {
        icon: <Eye className="h-10 w-10 text-white" />,
        title: "COGNITIVE VISION ANALYTICS",
        subtitle: "INSIGHTS",
        tag: "CVAP",
        description: "Advanced computer vision models for visual analytics, smart surveillance, and automated inspection systems.",
        hashtags: ["#ComputerVision", "#VisualAnalytics", "#SmartSurveillance"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format=fit&crop=entropy",
    },
    {
        icon: <Cpu className="h-10 w-10 text-white" />,
        title: "EMBEDDED ENGINEERING",
        subtitle: "HARDWARE",
        tag: "EMBEDDED",
        description: "Hardware-software co-design for embedded systems, IoT development, and next-generation industrial electronics.",
        hashtags: ["#EmbeddedSystems", "#IoTDevelopment", "#HardwareSoftwareIntegration"],
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2000&auto=format=fit&crop=entropy",
    },
];

export default function InnovationsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="mb-20">
                    <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight uppercase leading-none">
                        End-To-End Technology <br />
                        <span className="text-primary tracking-widest">And Innovations</span>
                    </h2>
                    <p className="mt-8 text-xl text-gray-400 max-w-3xl leading-relaxed">
                        Offering a broad set of capabilities under one roof makes us a versatile partner to meet all your digital ambitions.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row h-[750px] gap-[2px] transition-all duration-700 ease-in-out">
                    {innovations.map((item, index) => (
                        <motion.div
                            key={item.title}
                            onMouseEnter={() => setActiveIndex(index)}
                            className={cn(
                                "relative overflow-hidden cursor-pointer group flex-1 transition-all duration-700 ease-in-out",
                                activeIndex === index ? "lg:flex-[4.5]" : "lg:flex-[1]"
                            )}
                            animate={{
                                flex: activeIndex === index ? 4.5 : 1,
                            }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Background Image with Zoom and Desaturate */}
                            <div className="absolute inset-0">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={cn(
                                        "w-full h-full object-cover transition-all duration-1000 group-hover:scale-110",
                                        activeIndex === index ? "grayscale-0 opacity-80" : "grayscale opacity-40 blur-[1px]"
                                    )}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                            </div>

                            {/* Content for Collapsed State */}
                            <AnimatePresence mode="wait">
                                {activeIndex !== index && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex flex-col items-center justify-center p-4"
                                    >
                                        <div className="flex flex-col items-center gap-6">
                                            {/* Vertical Hashtags */}
                                            <div className="flex flex-col items-center gap-4 mb-8">
                                                {item.hashtags.map((tag) => (
                                                    <span key={tag} className="text-[11px] font-medium tracking-wider text-gray-400 opacity-60 uppercase writing-mode-vertical rotate-180">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            
                                            {/* Vertical Title */}
                                            <h4 className="text-xl font-bold tracking-[0.2em] text-white/90 uppercase writing-mode-vertical rotate-180 whitespace-nowrap">
                                                {item.title}
                                            </h4>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Content for Expanded State */}
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="absolute inset-0 flex flex-col justify-center p-12 md:p-16 max-w-2xl"
                                    >
                                        <div className="mb-8">
                                            <div className="w-20 h-[2px] bg-primary mb-6" />
                                            <h3 className="text-5xl md:text-7xl font-bold font-headline leading-tight uppercase mb-4">
                                                {item.title}
                                            </h3>
                                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
                                                {item.description}
                                            </p>
                                            
                                            <div className="flex flex-wrap items-center gap-6">
                                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-8 text-lg font-bold uppercase tracking-widest shadow-xl shadow-primary/20">
                                                    Free Demo
                                                </Button>
                                                <Button size="lg" variant="link" className="text-white hover:text-primary p-0 text-lg font-bold uppercase tracking-widest flex items-center gap-2 group/btn">
                                                    More Info <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Bottom Label Tag (Always visible Red Box) */}
                            <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
                                <div className={cn(
                                    "h-full flex items-center justify-center transition-all duration-500",
                                    activeIndex === index ? "bg-primary" : "bg-primary/10 backdrop-blur-sm"
                                )}>
                                    <span className="font-bold tracking-[0.3em] text-lg uppercase">
                                        {item.tag}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .writing-mode-vertical {
                    writing-mode: vertical-rl;
                }
            `}</style>
        </section>
    );
}
