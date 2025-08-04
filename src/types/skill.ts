export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'database';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon: string;
  color: string;
}

export interface SkillBadgeProps {
  skill: Skill;
  className?: string;
}

export interface SkillsSectionProps {
  skills: Skill[];
  className?: string;
} 