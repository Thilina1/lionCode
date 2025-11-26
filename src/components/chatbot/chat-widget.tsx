'use client';

import { useState } from 'react';
import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatDialog from './chat-dialog';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="icon" className="rounded-full w-14 h-14 shadow-lg" onClick={() => setIsOpen(true)}>
          <Bot className="h-7 w-7" />
          <span className="sr-only">Open Chatbot</span>
        </Button>
      </div>
      <ChatDialog isOpen={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
