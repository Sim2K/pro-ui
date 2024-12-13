'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ticket } from "@/types/ticket";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TicketHeaderProps {
  ticket: Ticket;
}

export function TicketHeader({ ticket }: TicketHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b p-4">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          <span className="font-medium">SAMPLE TICKET: {ticket.subject}</span>
          <Badge variant="secondary">{ticket.id}</Badge>
        </div>
        <Button variant="ghost" size="icon">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="destructive">Open</Badge>
        <Badge>Ticket #{ticket.id}</Badge>
      </div>
    </div>
  );
}