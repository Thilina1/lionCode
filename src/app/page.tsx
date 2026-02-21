import HeroSection from '@/components/home/hero-section';
import ServicesOverview from '@/components/home/services-overview';
import CtaSection from '@/components/home/cta-section';
import CaseStudiesSection from '@/components/home/case-studies-section';
import ImageSeaSection from '@/components/home/image-sea-section';
import TechnologiesSection from '@/components/home/technologies-section';
import TrustedClientsSection from '@/components/home/trusted-clients-section';
import BlogNewsSection from '@/components/home/blog-news-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <ImageSeaSection />
      <TechnologiesSection />
      <CaseStudiesSection />
      <CtaSection />
      <BlogNewsSection />
      <TrustedClientsSection />
    </>
  );
}
