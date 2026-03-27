import Link from 'next/link';
import { LionLogo } from '@/components/icons/lion-logo';
import { Linkedin, Twitter, Facebook, Youtube, Instagram, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-1 lg:col-span-2 space-y-6 flex flex-col items-center md:items-center text-center">
            <Link href="/" className="inline-block" prefetch={false}>
              <div className="flex items-center justify-center">
                <LionLogo width={96} height={96} className="brightness-0 invert" />
              </div>
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed mx-auto">
              Our sound research and development background means that we are constantly developing leading-edge technology solutions ahead of market needs. Our ability to meld hardware and software solutions places us amongst a handful of companies in the world with the ability to do so.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-bold uppercase tracking-wider mb-6 relative">
              Pages
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gray-600"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/team' },
                { name: 'Partners', href: '/partners' },
                { name: 'Blog', href: '/blog' },
                { name: 'Case Studies', href: '/case-studies' },
                { name: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-red-600 mr-2 group-hover:scale-110 transition-transform"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-bold uppercase tracking-wider mb-6 relative">
              Services
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gray-600"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Web Development', href: '/services#custom-software' },
                { name: 'Mobile Apps', href: '/services#mobile-apps' },
                { name: 'Business Automation', href: '/services#business-automation' },
                { name: 'IT Consulting', href: '/services#it-consulting' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-red-600 mr-2 group-hover:scale-110 transition-transform"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-bold uppercase tracking-wider mb-6 relative">
              Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gray-600"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms of Service', href: '/terms-of-service' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-red-600 mr-2 group-hover:scale-110 transition-transform"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            {[
              { icon: Facebook, href: 'https://web.facebook.com/profile.php?id=61583633541519' },
              { icon: Linkedin, href: '#' },
              { icon: Youtube, href: '#' },
              { icon: Instagram, href: '#' },
              { icon: Share2, href: '#' },
            ].map((social, idx) => (
              <Link key={idx} href={social.href} className="text-gray-400 hover:text-white transition-colors">
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
          
          <div className="text-gray-400 text-sm flex flex-col items-center md:items-end gap-2">
            <p>&copy; {new Date().getFullYear()} LIONCODE Inc - <Link href="/privacy-policy" className="hover:text-white underline">Privacy</Link> <Link href="/terms-of-service" className="hover:text-white underline">Terms of Use</Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
