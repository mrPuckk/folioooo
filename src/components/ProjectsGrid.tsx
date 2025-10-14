'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/ProjectCard'
import projectsData from '@/data/projects.json'
import { Project, PDFFile } from '@/types/project'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import { staggerContainer, staggerItem } from '@/lib/animations'

// Type conversion function to handle JSON data
const convertProjects = (rawProjects: any[]): Project[] => {
  return rawProjects.map(project => ({
    ...project,
    pdfFiles: project.pdfFiles?.map((file: any) => ({
      ...file,
      type: file.type as 'lecture' | 'notes' | 'documentation' | undefined
    })) || undefined
  }))
}

export function ProjectsGrid() {
  const projects: Project[] = convertProjects(projectsData.projects)

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      <AnimatedBackground variant="reverse" />

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeader title="Projects" />

          {/* Projects Grid with Enhanced Styling */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 