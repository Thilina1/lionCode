'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function CtaSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 overflow-hidden">
        <motion.div 
            className="absolute inset-x-0"
            style={{ 
                y,
                top: '-20%',
                bottom: '-20%',
            }} 
        >
            <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format=fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team collaboration"
                fill
                className="object-cover"
            />
        </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-black/50" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto"
          >
            Let's discuss how Lion Code Technologies can help you achieve your goals. Our team is ready to build the solutions you need to succeed in the digital age.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Button asChild size="xl" className="group relative overflow-hidden rounded-full bg-white text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4">
                    <span className="absolute inset-0 w-full h-full bg-white/20 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
                    <span className="font-semibold text-lg relative">Get in Touch</span>
                    <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 relative" />
                </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
