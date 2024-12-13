'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CircleProgress } from "@/components/ui/circle-progress";

interface NotificationCardProps {
  type: 'storage' | 'features';
  onDismiss: () => void;
}

export function NotificationCard({ type, onDismiss }: NotificationCardProps) {
  if (type === 'storage') {
    return (
      <Card className="bg-purple-600 text-white p-4 mb-4">
        <div className="flex flex-col items-center text-center">
          <CircleProgress value={80} />
          <div className="mt-4">
            <h3 className="font-medium">Used space</h3>
            <p className="text-sm text-purple-100 mt-1">
              Your team has used 80% of your available space. Need more?
            </p>
            <div className="flex gap-3 mt-3 justify-center">
              <Button
                variant="link"
                className="text-white px-0 h-auto"
                onClick={onDismiss}
              >
                Dismiss
              </Button>
              <Button
                variant="link"
                className="text-white px-0 h-auto"
              >
                Upgrade plan
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-blue-600 text-white p-4 mb-4">
      <div className="space-y-2">
        <h3 className="font-medium">New features available!</h3>
        <p className="text-sm text-blue-100">
          Check out the new dashboard view. Pages and exports now load faster.
        </p>
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop"
          alt="New features"
          className="w-full h-32 object-cover rounded-md mt-2"
        />
        <div className="flex gap-3 mt-2">
          <Button
            variant="link"
            className="text-white px-0 h-auto"
            onClick={onDismiss}
          >
            Dismiss
          </Button>
          <Button
            variant="link"
            className="text-white px-0 h-auto"
          >
            What's new?
          </Button>
        </div>
      </div>
    </Card>
  );
}