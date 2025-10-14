export interface PDFFile {
  id: string
  name: string
  url: string
  size?: string
  uploadedAt?: string
  type?: 'lecture' | 'notes' | 'documentation'
}

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
  pdfUrl?: string
  pdfFiles?: PDFFile[]
}

export interface ProjectCardProps {
  project: Project
  index: number
  className?: string
}

export interface ProjectsGridProps {
  projects?: Project[]
  filter?: string
  className?: string
} 