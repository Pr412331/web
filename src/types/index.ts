import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  categories: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface TechnicalSkill {
  name: string;
  level: number;
}

export interface ProfessionalSkill {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface Skills {
  technical: TechnicalSkill[];
  professional: ProfessionalSkill[];
}