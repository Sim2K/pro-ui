# Pro UI Application Reference Guide

This document serves as a comprehensive reference for the Pro UI application architecture, components, and implementation details. It is maintained by Cascade AI to provide quick access to important information about the application's structure and functionality.

## Purpose
- Quick reference for application architecture and implementation details
- Centralized documentation for component configurations
- Easy lookup for file locations and component relationships
- Track important implementation decisions and configurations

## Table of Contents
1. [Navigation](#navigation)
2. [Components](#components)
3. [Styling](#styling)
4. [State Management](#state-management)
5. [Utils](#utils)

---

## Navigation

### Left Sidebar Menu
**Location**: `components/layout/sidebar.tsx`

#### Core Components
- Main Component: `Sidebar` (React functional component)
- Related Components: 
  - `sidebar-notifications.tsx` - Handles notification cards in sidebar
  - `NotificationCard` component for storage and features notifications

#### State Management
```typescript
const [isCollapsed, setIsCollapsed] = useState(false);
const [showStorageNotification, setShowStorageNotification] = useState(true);
const [showFeaturesNotification, setShowFeaturesNotification] = useState(true);
const [activeView, setActiveView] = useState<'grid' | 'list'>('grid');
```

#### Menu Structure
- Fixed width: 250px (expanded) / 70px (collapsed)
- Transition: smooth animation with duration-300
- Components hierarchy:
  1. Logo/Brand (top)
  2. Collapse Toggle Button
  3. Search Input (hidden when collapsed)
  4. Navigation Links
  5. Notification Cards (hidden when collapsed)
  6. View Toggle (Grid/List)
  7. Logout Button
  8. User Profile Section

#### Navigation Items
```typescript
const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: FolderKanban, label: 'Projects', href: '/projects' },
  { icon: CheckSquare, label: 'Tasks', href: '/tasks' },
  { icon: BarChart3, label: 'Reporting', href: '/reporting' },
  { icon: Users, label: 'Users', href: '/users' },
  { icon: HelpCircle, label: 'Support', href: '/support' },
  { icon: Settings, label: 'Settings', href: '/settings' }
];
```

#### Styling Details
- Icons: 
  - Expanded: h-4 w-4 with mr-2
  - Collapsed: h-5 w-5 centered
- Buttons: 
  - Expanded: full width with left alignment
  - Collapsed: w-10 h-10 centered with no padding
- Grid/List Toggle:
  - Stacks vertically when collapsed
  - Horizontal with equal width when expanded

#### Key Classes
```css
// Main Container
"fixed left-0 top-0 h-screen bg-white transition-all duration-300 ease-in-out z-50"

// Button Base (Collapsed)
"w-10 h-10 p-0 mx-auto flex justify-center"

// Button Base (Expanded)
"w-full justify-start"
```

#### Dependencies
- Icons: `lucide-react` library
- Utilities: `@/lib/utils` for className merging (cn function)
- UI Components:
  - Button from `@/components/ui/button`
  - Input from `@/components/ui/input`
  - ScrollArea from `@/components/ui/scroll-area`
  - Toggle from `@/components/ui/toggle`

---