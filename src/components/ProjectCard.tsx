'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/types/project'
import { fadeInUp, cardHover, buttonHover, scaleIn } from '@/lib/animations'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      {...cardHover}
    >
      <Card className="group h-full overflow-hidden bg-background/90 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl shadow-lg">
        {/* Project Image */}
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 3}
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            {/* Fallback placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="text-center text-muted-foreground">
                <div className="text-4xl font-bold mb-2">{project.title.charAt(0)}</div>
                <div className="text-sm opacity-70">{project.category}</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {/* Featured Badge */}
          {project.featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <Badge className="absolute top-2 right-4 bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-lg">
                Featured
              </Badge>
            </motion.div>
          )}

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          >
            <Badge className="absolute top-8 left-2 bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-lg">
              {project.category}
            </Badge>
          </motion.div>
        </div>
        </Link>

        {/* Project Content */}
        <CardHeader>
          <Link href={`/projects/${project.slug}`}>
            <CardTitle className="group-hover:text-primary transition-colors text-xl font-bold cursor-pointer">
              {project.title}
            </CardTitle>
          </Link>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Description */}
          <motion.p 
            className="text-muted-foreground text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
          >
            {project.description}
          </motion.p>

          {/* Tech Stack */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
          >
            <h4 className="text-sm font-semibold text-foreground">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 + techIndex * 0.1 }}
                >
                  <Badge variant="outline" className="text-xs font-medium border-primary/30">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
          >
            <h4 className="text-sm font-semibold text-foreground">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.6 + tagIndex * 0.1 }}
                >
                  <Badge variant="secondary" className="text-xs font-medium bg-gradient-to-r from-primary/20 to-secondary/20">
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex gap-3 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
          >
            {project.github && (
              <motion.div {...buttonHover}>
                <Button variant="outline" size="sm" asChild className="font-medium">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
            )}
            {project.demo && (
              <motion.div {...buttonHover}>
                <Button size="sm" asChild className="font-medium">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </motion.div>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 