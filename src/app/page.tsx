import HeroSection from '@/components/home/hero-section';
import ServicesOverview from '@/components/home/services-overview';
import CtaSection from '@/components/home/cta-section';
import CaseStudiesSection from '@/components/home/case-studies-section';
import TeamSection from '@/components/home/team-section';
import BlogSection from '@/components/home/blog-section';
import { Separator } from '@/components/ui/separator';
import ProductCollection from '@/components/home/product-collection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductCollection />
      <ServicesOverview />
      <CtaSection />
      <CaseStudiesSection />
      <Separator />
      <TeamSection />
      <Separator />
      <BlogSection />
    </>
  );
}
