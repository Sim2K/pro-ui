export interface Ticket {
  id: string;
  subject: string;
  status: 'open' | 'solved' | 'pending';
  requester: {
    name: string;
    email: string;
    avatar: string;
  };
  assignee: {
    name: string;
    avatar: string;
  };
  tags: string[];
  messages: Message[];
  createdAt: string;
}

export interface Message {
  id: string;
  sender: {
    name: string;
    avatar: string;
    isAgent?: boolean;
  };
  content: string;
  timestamp: string;
}

export interface UserProfile {
  name: string;
  email: string;
  localTime: string;
  language: string;
  notes?: string;
}