'use client';

import { MessageList } from "@/components/ticket/message-list";
import { TicketHeader } from "@/components/ticket/ticket-header";
import { UserProfile } from "@/components/ticket/user-profile";
import { mockTickets } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function Home() {
  const currentTicket = mockTickets[0];
  const userProfile = {
    name: currentTicket.requester.name,
    email: currentTicket.requester.email,
    localTime: 'Mon, 15:20 GMT+7',
    language: 'English (US)',
    notes: '',
  };

  return (
    <div className="flex h-[calc(100vh-3.5rem)]">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <TicketHeader ticket={currentTicket} />
        <MessageList messages={currentTicket.messages} />
        
        {/* Message Input */}
        <div className="border-t p-4 mt-auto">
          <div className="flex gap-2">
            <Input placeholder="Type your message..." className="flex-1" />
            <Button>
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 border-l p-4">
        <UserProfile profile={userProfile} />
      </div>
    </div>
  );
}