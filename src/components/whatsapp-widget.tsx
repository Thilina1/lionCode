'use client';

import { SiWhatsapp } from '@icons-pack/react-simple-icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function WhatsappWidget() {
  // Replace with actual WhatsApp number
  const phoneNumber = "94726211888"; 
  const message = "Hello, I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        asChild 
        size="icon" 
        className="rounded-full w-14 h-14 shadow-lg bg-[#25D366] hover:bg-[#20bd5a] text-white transition-transform hover:scale-110"
      >
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <SiWhatsapp className="h-7 w-7" />
          <span className="sr-only">Contact on WhatsApp</span>
        </Link>
      </Button>
    </div>
  );
}
