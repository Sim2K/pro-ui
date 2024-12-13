'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-muted-foreground">An any way to manage sales with care and precision.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search anything in Sonoma" className="pl-8" />
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add new product
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Net Income</p>
              <h2 className="text-3xl font-semibold">$193,000</h2>
              <p className="text-sm text-green-500">+35% from last month</p>
            </div>
            <Button variant="ghost" size="icon">⋯</Button>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Total Return</p>
              <h2 className="text-3xl font-semibold">$32,000</h2>
              <p className="text-sm text-red-500">-24% from last month</p>
            </div>
            <Button variant="ghost" size="icon">⋯</Button>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Revenue</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">Income</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Expenses</span>
            </div>
          </div>
        </div>
        <div className="h-64 w-full bg-gray-50 rounded-lg"></div>
      </Card>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Sales Report</h3>
          <Button variant="ghost" size="icon">⋯</Button>
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm">Product Launched (223)</span>
              <span className="text-sm">223</span>
            </div>
            <div className="h-2 bg-green-100 rounded-full overflow-hidden">
              <div className="h-full w-[60%] bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm">Ongoing Product (23)</span>
              <span className="text-sm">23</span>
            </div>
            <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
              <div className="h-full w-[20%] bg-blue-500 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm">Product Sold (483)</span>
              <span className="text-sm">483</span>
            </div>
            <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
              <div className="h-full w-[80%] bg-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}