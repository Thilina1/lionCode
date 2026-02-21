'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'CUSTOM SOFTWARE DEVELOPMENT',
    shortName: 'SOFTWARE',
    hashtags: ['#BespokeSoftware', '#WebApps', '#EnterpriseSolutions'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/services/custom-software',
    description: 'We build bespoke web and enterprise applications tailored to unique business needs. Our solutions are scalable, performant, and designed for long-term value.'
  },
  {
    title: 'MOBILE APP DEVELOPMENT',
    shortName: 'MOBILE',
    hashtags: ['#iOS', '#Android', '#UserExperience'],
    imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/services/mobile-apps',
    description: 'We create engaging and intuitive iOS and Android apps with a focus on great user experience.'
  },
  {
    title: 'BUSINESS PROCESS AUTOMATION',
    shortName: 'BPA',
    hashtags: ['#Automation', '#Efficiency', '#Streamline'],
    imageUrl: 'https://images.unsplash.com/photo-1581090464777-f32202518091?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/services/automation',
    description: 'We streamline operations and increase efficiency by identifying bottlenecks and implementing intelligent automation solutions.'
  },
  {
    title: 'AI & DATA SCIENCE',
    shortName: 'AI & DS',
    hashtags: ['#MachineLearning', '#PredictiveAnalytics', '#DataVisualization'],
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/services/ai-data-science',
    description: 'We help businesses leverage their data with predictive analytics, machine learning models, and data visualization.'
  },
  {
    title: 'CLOUD & DEVOPS',
    shortName: 'DEVOPS',
    hashtags: ['#AWS', '#GoogleCloud', '#CICD'],
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/services/cloud-devops',
    description: 'We offer expertise in cloud migration, infrastructure management (AWS, Google Cloud), and CI/CD to enhance agility and scalability.'
  }
];

export default function ServicesOverview() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            End-To-End Technology And Innovations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Offering a broad set of capabilities under one roof makes us a versatile partner to meet all your digital ambitions.
          </p>
        </div>
      </div>
      <div className="flex w-full h-auto md:h-[70vh] min-h-[600px] flex-col md:flex-row">
        {services.map((service, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`relative h-full text-white bg-cover bg-center transition-all duration-700 ease-in-out ${isActive ? 'flex-[3] md:flex-[2]' : 'flex-[1]'}`}
              style={{ backgroundImage: `url(${service.imageUrl})` }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`absolute inset-0 bg-primary transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-0'}`}></div>
              
              <div className="relative z-10 flex flex-col h-full p-8 justify-between overflow-hidden">
                {/* Expanded Content */}
                <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                  <h3 className="font-headline text-4xl font-bold uppercase">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-white/90">
                    {service.description}
                  </p>
                </div>

                {/* Collapsed Content */}
                <div className={`absolute bottom-24 left-8 right-8 transition-all duration-500 ${isActive ? 'opacity-0 translate-y-10' : 'opacity-100'}`}>
                  <p className="text-sm text-white/70 font-mono">
                    {service.hashtags.join(', ')}
                  </p>
                  <h3 className="font-headline text-2xl font-bold mt-2 uppercase">
                      {service.title}
                  </h3>
                </div>

                {/* Footer Content (always visible) */}
                <div>
                  <Link href={service.href} className={`block text-sm font-semibold tracking-wider uppercase text-white hover:underline transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    Read More
                  </Link>
                  <div className="relative h-[2px] bg-white/20 w-full my-4">
                    <div className="absolute bottom-0 left-0 h-[2.5px] bg-white w-1/4"></div>
                  </div>
                  <p className="font-bold text-white text-md tracking-widest uppercase">{service.shortName}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}
