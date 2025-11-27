'use client';

import Link from 'next/link';
import { Menu, Search, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { LionLogo } from '../icons/lion-logo';
import { ModeToggle } from '../mode-toggle';
import { SriLankaFlagIcon } from '../icons/sri-lanka-flag-icon';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTopBarHidden, setIsTopBarHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  const topBarColorClass = isScrolled ? 'bg-secondary/80' : 'bg-black/30';
  const navBarColorClass = isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent';
  const textColorClass = isScrolled ? 'text-foreground/80' : 'text-white/80 hover:text-white';


  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
      )}
    >
      <div className={cn("transition-all duration-300", topBarColorClass, isTopBarHidden && '-translate-y-full')}>
        <div className="container mx-auto flex h-10 items-center justify-end px-4 md:px-6">
            <div className="flex items-center gap-4">
                <SriLankaFlagIcon className="h-6 w-6 rounded-sm" />
                <ModeToggle isScrolled={isScrolled} />
                <Button variant="ghost" size="icon" className={cn("h-8 w-8", textColorClass, isScrolled ? "" : "hover:bg-white/10")}>
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className={cn("h-8 w-8", textColorClass, isScrolled ? "" : "hover:bg-white/10")}>
                  <Mail className="h-4 w-4" />
                </Button>
            </div>
        </div>
      </div>
      <div className={cn("transition-all duration-300", navBarColorClass, isTopBarHidden && '-translate-y-10')}>
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <LionLogo className={cn("h-8 w-8", !isScrolled && "text-white")} />
              <span className={cn("font-headline text-xl font-bold", isScrolled ? "text-primary" : "text-white")}>Lion Code</span>
            </Link>
            <div className="flex items-center gap-4">
              <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn("font-headline transition-colors hover:text-primary", textColorClass)}
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className={cn("md:hidden", isScrolled ? "" : "text-white bg-transparent border-white/50 hover:bg-white/10 hover:text-white")}>
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="grid gap-4 p-4">
                    <Link href="/" className="flex items-center gap-2" prefetch={false}>
                      <LionLogo />
                      <span className="font-headline text-lg font-bold text-primary">Lion Code</span>
                    </Link>
                    <div className="border-b pb-4">
                        <div className="flex items-center justify-end gap-2">
                            <SriLankaFlagIcon className="h-6 w-6 rounded-sm" />
                            <ModeToggle isScrolled={true} />
                            <Button variant="ghost" size="icon" >
                            <Search className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" >
                            <Mail className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                    <nav className="grid gap-2 text-base font-medium">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block rounded-lg px-3 py-2 text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                          prefetch={false}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
