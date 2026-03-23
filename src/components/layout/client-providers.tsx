'use client';

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import WhatsappWidget from '@/components/whatsapp-widget';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          {children}
          <WhatsappWidget />
          <Toaster />
        </ThemeProvider>
    );
}
