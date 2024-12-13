'use client';

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, MessageCircle, Phone, Plus, Search } from "lucide-react";
import { NavigationMenu } from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <MessageCircle className="h-4 w-4 text-orange-500" />
              SAMPLE TICKET: #13
            </Button>
          </div>
          <Button variant="ghost" size="sm">Next →</Button>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
          <div className="relative w-64">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-8"
            />
          </div>
          <Button variant="ghost" size="sm">
            Conversation 0
          </Button>
          <Button variant="ghost" size="icon">
            <MessageCircle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Avatar className="h-8 w-8">
            <img
              src={AVATARS.JURGEN}
              alt="User avatar"
            />
          </Avatar>
        </div>
      </div>
    </header>
  );
}

const AVATARS = {
  JURGEN: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=32&h=32&fit=crop&crop=face'
} as const;