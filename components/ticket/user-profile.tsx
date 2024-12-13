'use client';

import { Card } from "@/components/ui/card";
import { UserProfile } from "@/types/ticket";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface UserProfileProps {
  profile: UserProfile;
}

export function UserProfile({ profile }: UserProfileProps) {
  const [notes, setNotes] = useState(profile.notes || '');

  return (
    <Card className="p-4">
      <div className="flex flex-col items-center">
        <Avatar className="h-20 w-20">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
            alt={profile.name}
          />
        </Avatar>
        <h3 className="mt-4 text-lg font-semibold">{profile.name}</h3>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="text-sm font-medium text-muted-foreground">Email</label>
          <p className="text-sm">{profile.email}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground">Local Time</label>
          <p className="text-sm">{profile.localTime}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground">Language</label>
          <p className="text-sm">{profile.language}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground">Notes</label>
          <Textarea
            placeholder="Add user notes"
            className="mt-1"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>
    </Card>
  );
}