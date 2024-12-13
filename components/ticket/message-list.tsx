'use client';

import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Message } from "@/types/ticket";

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <ScrollArea className="h-[calc(100vh-300px)] px-4">
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start gap-3">
            <Avatar className="h-8 w-8">
              <img src={message.sender.avatar} alt={message.sender.name} />
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">
                  {message.sender.name}
                  {message.sender.isAgent && (
                    <span className="ml-1 text-xs text-muted-foreground">(You)</span>
                  )}
                </span>
                <span className="text-xs text-muted-foreground">{message.timestamp}</span>
              </div>
              <p className="mt-1 text-sm">{message.content}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}