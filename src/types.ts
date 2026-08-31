export type ThreeSceneMode = 'hybrid' | 'aids' | 'aiml' | 'placement';

export type ColorTheme = 'cyan' | 'emerald' | 'violet' | 'amber';

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'Journal' | 'Conference' | 'Book Chapter' | 'Preprint';
  category: 'Cloud & Anomaly' | 'Deep Learning & NLP' | 'Networks & SDN' | 'DevOps & Systems' | 'AgriTech & Healthcare' | 'General AI';
  abstract?: string;
  doi?: string;
  url?: string;
  citations?: number;
  bibtex: string;
  tags: string[];
  isTopPick?: boolean;
}

export interface Patent {
  id: string;
  title: string;
  authors: string[];
  applicationNumber: string;
  year: string;
  status: string;
  description?: string;
  category?: string;
}

export interface Repository {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  topics: string[];
  highlight?: boolean;
  sampleCode?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  current?: boolean;
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  thesis?: string;
  description?: string;
  field?: string;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Research';
  semester: string;
  description: string;
  topics: string[];
  resourcesUrl?: string;
}

export interface CommunityEvent {
  id: string;
  title: string;
  role: string;
  event: string;
  date: string;
  type: 'DevFest' | 'Workshop' | 'Keynote' | 'Hackathon';
  description: string;
  tags: string[];
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  grantInfo?: string;
  type?: 'International Grant' | 'State Award' | 'Fellowship' | 'Recognition';
}

export interface InstitutionalProject {
  id: string;
  title: string;
  period: string;
  role: string;
  impactHighlight?: string;
  description: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer?: string;
  year?: string;
}

export interface ProfessionalMembership {
  id: string;
  name: string;
  shortName: string;
  role?: string;
}
