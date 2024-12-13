import { Ticket } from "@/types/ticket";

const AVATARS = {
  JIMMY: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
  JURGEN: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=32&h=32&fit=crop&crop=face'
} as const;

export const mockTickets: Ticket[] = [
  {
    id: '#13',
    subject: 'Cancel order',
    status: 'open',
    requester: {
      name: 'Jimmy Sullivan',
      email: 'jimmysullivan@gmail.com',
      avatar: AVATARS.JIMMY,
    },
    assignee: {
      name: 'Jurgen Brandt',
      avatar: AVATARS.JURGEN,
    },
    tags: ['delivery', 'sample_ticket'],
    messages: [
      {
        id: '1',
        sender: {
          name: 'Jimmy Sullivan',
          avatar: AVATARS.JIMMY,
        },
        content: 'Can I still cancel my order?',
        timestamp: 'Monday 10:12',
      },
      {
        id: '2',
        sender: {
          name: 'Jurgen Brandt',
          avatar: AVATARS.JURGEN,
          isAgent: true,
        },
        content: "Hi Jimmy. That depends. Please provide your order number and I will see what I can do.",
        timestamp: 'Monday 10:12',
      },
    ],
    createdAt: 'Monday 10:12',
  },
];