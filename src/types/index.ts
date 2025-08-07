export interface NavLink {
  title: string;
  path: string;
}

import type { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  category: 'backend' | 'frontend' | 'tools' | 'languages' | 'other';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
