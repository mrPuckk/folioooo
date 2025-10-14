import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import projectsData from '@/data/projects.json'

interface PDFFile {
  id: string
  name: string
  url: string
  size?: string
  uploadedAt?: string
  type?: 'lecture' | 'notes' | 'documentation'
}

interface ProjectData {
  id: number
  title: string
  description: string
  tech: string[]
  image: string
  github: string
  demo: string
  pdfUrl?: string
  pdfFiles?: PDFFile[]
  tags: string[]
  category: string
  featured: boolean
  slug: string
}

export interface ProjectContent {
  title: string
  date: string
  coverImage: string
  excerpt: string
  category: string
  featured: boolean
  tech: string[]
  tags: string[]
  slug: string
  content: string
  pdfUrl?: string
  pdfFiles?: PDFFile[]
}

export interface ProjectWithContent extends ProjectContent {
  content: string
}

const contentDirectory = path.join(process.cwd(), 'content/projects')

export async function getAllProjectSlugs(): Promise<string[]> {
  try {
    const files = fs.readdirSync(contentDirectory)
    return files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace(/\.md$/, ''))
  } catch (error) {
    console.error('Error reading project slugs:', error)
    return []
  }
}

export async function getProjectBySlug(slug: string): Promise<ProjectWithContent | null> {
  try {
    const filePath = path.join(contentDirectory, `${slug}.md`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    const projectData = projectsData.projects.find((p: any) => p.slug === slug) as ProjectData | undefined
    
    if (!projectData) {
      return null
    }

    const project: ProjectContent = {
      title: data.title || projectData.title,
      date: data.date || new Date().toISOString(),
      coverImage: data.coverImage || projectData.image,
      excerpt: data.excerpt || projectData.description,
      category: data.category || projectData.category,
      featured: data.featured !== undefined ? data.featured : projectData.featured,
      tech: data.tech || projectData.tech,
      tags: data.tags || projectData.tags,
      slug: slug,
      content: content,
      pdfUrl: projectData.pdfUrl,
      pdfFiles: projectData.pdfFiles?.map((file: any) => ({
        ...file,
        type: file.type as 'lecture' | 'notes' | 'documentation' | undefined
      })),
    }

    return {
      ...project,
      content: content,
    }
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error)
    return null
  }
}

export async function getAllProjects(): Promise<ProjectWithContent[]> {
  const slugs = await getAllProjectSlugs()
  const projects = await Promise.all(
    slugs.map((slug) => getProjectBySlug(slug))
  )
  
  return projects.filter((project): project is ProjectWithContent => project !== null)
}

export function getProjectData(slug: string) {
  return projectsData.projects.find((project: any) => project.slug === slug) as ProjectData | null
} 