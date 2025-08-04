export interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  image: string
  github: string
  demo: string
  tags: string[]
  category: string
  featured: boolean
  slug: string
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export interface ProjectsGridProps {
  projects: Project[];
  filter?: string;
  className?: string;
} 