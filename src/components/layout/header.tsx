'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ModeToggle } from '../mode-toggle';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
 // { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTopBarHidden, setIsTopBarHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsTopBarHidden(true);
      } else {
        // Scrolling up
        setIsTopBarHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const showTransparentHeader = isHomePage && !isScrolled;

  const topBarColorClass = showTransparentHeader ? 'bg-black/30' : 'bg-secondary/80';
  const navBarColorClass = showTransparentHeader ? 'bg-transparent' : 'bg-background/80 shadow-md backdrop-blur-sm';
  const topBarIconColorClass = showTransparentHeader ? 'text-white/80 hover:text-white' : 'text-foreground/80';
  const navLinkColorClass = showTransparentHeader ? 'text-foreground/80 dark:text-white/80' : 'text-foreground/80';
  const logoColorClass = 'dark:brightness-0 dark:invert';
  const modeToggleColorClass = showTransparentHeader ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-foreground/80';
  const iconButtonColorClass = showTransparentHeader ? 'hover:bg-white/10' : '';

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
      )}
    >
      <div className={cn("transition-all duration-300", topBarColorClass, isTopBarHidden && '-translate-y-full')}>
        <div className="container mx-auto flex h-10 items-center justify-end px-4 md:px-6">
            <div className="flex items-center gap-4">
                <span>🇱🇰</span>
                {/* <ModeToggle className={modeToggleColorClass} /> */}
                <Button variant="ghost" size="icon" className={cn("h-8 w-8", topBarIconColorClass, iconButtonColorClass)}>
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className={cn("h-8 w-8", topBarIconColorClass, iconButtonColorClass)}>
                  <Mail className="h-4 w-4" />
                </Button>
            </div>
        </div>
      </div>
      <div className={cn("transition-all duration-300", navBarColorClass, isTopBarHidden && '-translate-y-10')}>
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <Image src="/images/logo.png" alt="Lion Code Logo" width={96} height={96} className={cn(logoColorClass)}/>
              <span className={cn("font-headline text-xl font-bold", showTransparentHeader ? "text-white" : "text-primary")}></span>
            </Link>
            <div className="flex items-center gap-4">
              <nav className="hidden items-center gap-6 text-medium font-medium md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn("font-headline transition-colors hover:text-primary", navLinkColorClass)}
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="grid gap-4 p-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                        prefetch={false}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
