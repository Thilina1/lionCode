'use client';

import { useState } from 'react';
import { SiWhatsapp } from '@icons-pack/react-simple-icons';
import { MessageCircle, X, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function WhatsappWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Contact Info
  const phoneNumber = "94726211888"; 
  const displayPhone = "+94 81 2 375 396"; 
  const email = "concierge@oruthotachalets.com"; 
  const message = "Hello, I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Popover */}
      {isOpen && (
        <div className="mb-4 bg-[#0a1120] rounded-3xl w-[360px] p-8 pb-10 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-bottom-5 duration-200 border border-white/5">
          <div className="absolute -top-4 right-4 text-[200px] font-serif text-[#142038] leading-none pointer-events-none opacity-60 select-none" aria-hidden="true">&ldquo;</div>
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-[#d8a868] text-[11px] font-bold tracking-[0.25em] uppercase mb-4">Concierge Desk</span>
            <h2 className="text-white text-3xl font-serif mb-8 text-center tracking-wide font-normal">How may we assist?</h2>
            
            <div className="w-full flex flex-col gap-4">
              {/* WhatsApp Card */}
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#121d33] hover:bg-[#182642] transition-colors rounded-2xl p-4 px-5 flex items-center gap-5 group border border-transparent hover:border-white/5">
                <div className="w-[48px] h-[48px] rounded-[14px] bg-[#1d2d4d] flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#243861] transition-colors">
                  <MessageCircle className="w-6 h-6 text-[#2cb664] stroke-1" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-white text-[16px] font-medium tracking-wide">WhatsApp Business</h3>
                  <p className="text-[#8e9fbf] text-[13px] mt-0.5 font-light">Direct artisan access</p>
                </div>
              </Link>

              {/* Email Card */}
              <a href={`mailto:${email}`} className="bg-[#121d33] hover:bg-[#182642] transition-colors rounded-2xl p-4 px-5 flex items-center gap-5 group border border-transparent hover:border-white/5">
                <div className="w-[48px] h-[48px] rounded-[14px] bg-[#1d2d4d] flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#243861] transition-colors">
                  <Mail className="w-6 h-6 text-[#d8a868] stroke-1" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <h3 className="text-white text-[16px] font-medium tracking-wide">Direct Email</h3>
                  <p className="text-[#8e9fbf] text-[13px] mt-0.5 truncate font-light">{email}</p>
                </div>
              </a>

              {/* Phone Card */}
              <a href={`tel:${displayPhone.replace(/\s+/g, '')}`} className="bg-[#121d33] hover:bg-[#182642] transition-colors rounded-2xl p-4 px-5 flex items-center gap-5 group border border-transparent hover:border-white/5">
                <div className="w-[48px] h-[48px] rounded-[14px] bg-[#1d2d4d] flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#243861] transition-colors">
                  <Phone className="w-6 h-6 text-[#d8a868] stroke-1" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-white text-[16px] font-medium tracking-wide">Direct Protocol</h3>
                  <p className="text-[#8e9fbf] text-[13px] mt-0.5 font-light">{displayPhone}</p>
                </div>
              </a>
            </div>

            <div className="mt-8 text-center text-[13px] flex gap-1.5 items-center font-light">
              <span className="text-[#8e9fbf]">Standard response time:</span>
              <span className="text-[#d8a868] font-normal">Within 2 hours</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-[60px] h-[60px] shadow-[0_10px_40px_rgba(216,168,104,0.3)] bg-[#deb174] hover:bg-[#cf9f62] text-[#0a1120] transition-all hover:scale-105 active:scale-95 flex items-center justify-center focus:outline-none z-50 relative"
        aria-label={isOpen ? "Close Concierge" : "Open Concierge"}
      >
        {isOpen ? (
          <X className="h-8 w-8" strokeWidth={2} />
        ) : (
          <MessageCircle className="h-8 w-8 fill-current" strokeWidth={1} />
        )}
      </button>
    </div>
  );
}
