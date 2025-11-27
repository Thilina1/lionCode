import HeroSection from '@/components/home/hero-section';
import ServicesOverview from '@/components/home/services-overview';
import CtaSection from '@/components/home/cta-section';
import CaseStudiesSection from '@/components/home/case-studies-section';
import TeamSection from '@/components/home/team-section';
import BlogSection from '@/components/home/blog-section';
import { Separator } from '@/components/ui/separator';
import ProductCollection from '@/components/home/product-collection';
import InnovationsSection from '@/components/home/innovations-section';
import ImageSeaSection from '@/components/home/image-sea-section';
import TechnologiesSection from '@/components/home/technologies-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductCollection />
      <InnovationsSection />
      <ServicesOverview />
      <ImageSeaSection />
      <TechnologiesSection />
      <CtaSection />
      <CaseStudiesSection />
      <Separator />
      <TeamSection />
      <Separator />
      <BlogSection />
    </>
  );
}
