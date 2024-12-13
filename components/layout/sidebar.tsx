'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NotificationCard } from './sidebar-notifications';
import { 
  Home,
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  BarChart3,
  Users,
  HelpCircle,
  Settings,
  Search,
  Menu,
  LogOut,
  LayoutGrid,
  LayoutList
} from "lucide-react";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Toggle } from "@/components/ui/toggle";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showStorageNotification, setShowStorageNotification] = useState(true);
  const [showFeaturesNotification, setShowFeaturesNotification] = useState(true);
  const [activeView, setActiveView] = useState<'grid' | 'list'>('grid');

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: FolderKanban, label: 'Projects', href: '/projects' },
    { icon: CheckSquare, label: 'Tasks', href: '/tasks' },
    { icon: BarChart3, label: 'Reporting', href: '/reporting' },
    { icon: Users, label: 'Users', href: '/users' },
    { icon: HelpCircle, label: 'Support', href: '/support' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <div 
      className={cn(
        "fixed left-0 top-0 h-screen bg-white transition-all duration-300 ease-in-out z-50",
        isCollapsed ? "w-[70px]" : "w-[250px]"
      )}
    >
      <div className="flex flex-col h-full border-r">
        <div className="p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            {!isCollapsed && <span className="font-semibold">Untitled UI</span>}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 self-start"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>

        {!isCollapsed && (
          <div className="px-4 pb-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search"
                className="pl-8"
              />
            </div>
          </div>
        )}

        <ScrollArea className="flex-1 px-4">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full",
                    isCollapsed ? "w-10 h-10 p-0 mx-auto flex justify-center" : "justify-start"
                  )}
                >
                  <item.icon className={cn(
                    isCollapsed ? "h-5 w-5" : "h-4 w-4 mr-2"
                  )} />
                  {!isCollapsed && <span>{item.label}</span>}
                </Button>
              </Link>
            ))}

            {!isCollapsed && (
              <div>
                {showStorageNotification && (
                  <NotificationCard
                    type="storage"
                    onDismiss={() => setShowStorageNotification(false)}
                  />
                )}
                {showFeaturesNotification && (
                  <NotificationCard
                    type="features"
                    onDismiss={() => setShowFeaturesNotification(false)}
                  />
                )}
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="p-4">
          <div className={cn(
            "flex gap-2 mb-4",
            isCollapsed ? "flex-col items-center" : "items-center justify-between"
          )}>
            <Toggle
              pressed={activeView === 'grid'}
              onPressedChange={() => setActiveView('grid')}
              className={cn(
                isCollapsed ? "w-10 h-10 p-0" : "flex-1"
              )}
            >
              <LayoutGrid className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
              {!isCollapsed && 'Grid'}
            </Toggle>
            <Toggle
              pressed={activeView === 'list'}
              onPressedChange={() => setActiveView('list')}
              className={cn(
                isCollapsed ? "w-10 h-10 p-0" : "flex-1"
              )}
            >
              <LayoutList className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
              {!isCollapsed && 'List'}
            </Toggle>
          </div>
          
          <Button
            variant="ghost"
            className={cn(
              "w-full text-red-500 hover:text-red-600",
              isCollapsed ? "w-10 h-10 p-0 mx-auto flex justify-center" : "justify-start"
            )}
          >
            <LogOut className={cn(
              isCollapsed ? "h-5 w-5" : "h-4 w-4 mr-2"
            )} />
            {!isCollapsed && <span>Logout</span>}
          </Button>
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            {!isCollapsed && (
              <div className="flex-1">
                <p className="text-sm font-medium">Lana Steiner</p>
                <p className="text-xs text-muted-foreground">lana@untitledui.com</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}