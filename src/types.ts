export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badgeUrl?: string;
  type: 'cisco' | 'packages' | 'degree';
}

export interface Skill {
  name: string;
  category: 'Full Stack' | 'Networking' | 'Internet Admin' | 'Office Suites' | 'Mobile Development';
  level: number; // 0 to 100
  icon: string; // Lucide icon name
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: 'web' | 'network' | 'system';
  highlights: string[];
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
