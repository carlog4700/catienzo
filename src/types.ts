export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icons
  tools: string[];
  benefits: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  type: 'freelance' | 'corporate';
}

export interface ProjectStep {
  name: string;
  type: 'trigger' | 'action' | 'ai' | 'database' | 'notification' | 'crm';
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tools: string[];
  category: 'Full AI Agent' | 'Workflow Integration' | 'Data Automation' | 'Reporting';
  steps: ProjectStep[];
  impact: string;
  image?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarSeed: string;
  metrics?: string; // e.g. "90% hours saved" or "10x lead response speed"
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  status: 'new' | 'read' | 'replied';
}
