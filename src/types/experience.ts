export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  logo?: string;
  location?: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
}

export interface TimelineItemProps {
  experience: Experience;
  className?: string;
}

export interface ExperienceSectionProps {
  experiences: Experience[];
  className?: string;
} 