import Link from 'next/link';
import { LionLogo } from '@/components/icons/lion-logo';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-black border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4 flex flex-col items-center">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <span className="font-headline text-xl font-bold text-primary">Lion Code Technologies</span>
            </Link>
            <LionLogo width={48} height={48} className="dark:brightness-0 dark:invert" />
            <p className="text-muted-foreground text-center">
              Automating business processes and solving business problems using IT.
            </p>
            <div className="flex gap-4">
              <Link href="https://web.facebook.com/profile.php?id=61583633541519" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
              <Link href="https://web.facebook.com/profile.php?id=61583633541519" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
              <Link href="https://web.facebook.com/profile.php?id=61583633541519" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="font-headline font-semibold text-foreground">Services</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link href="/services" className="text-muted-foreground hover:text-primary">Web Development</Link></li>
                  <li><Link href="/services" className="text-muted-foreground hover:text-primary">Mobile Apps</Link></li>
                  <li><Link href="/services" className="text-muted-foreground hover:text-primary">Business Automation</Link></li>
                  <li><Link href="/services" className="text-muted-foreground hover:text-primary">IT Consulting</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-headline font-semibold text-foreground">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link href="/team" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                  <li><Link href="/case-studies" className="text-muted-foreground hover:text-primary">Our Work</Link></li>
                  <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                  <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-headline font-semibold text-foreground">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lion Code Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
