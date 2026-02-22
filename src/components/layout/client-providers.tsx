'use client';

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import dynamic from 'next/dynamic';

const ChatWidget = dynamic(() => import('@/components/chatbot/chat-widget'), {
  ssr: false,
});

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          {children}
          <ChatWidget />
          <Toaster />
        </ThemeProvider>
    );
}
